import React from "react";
import fs from "fs";
// import ProcessedContent from "./processed-content";
import matter from "gray-matter";
import ContentAsideNav from "./content-aside-nav";
import TutoPagination from "./paginatation";
import {
  getTutorialsByKey,
  TutorialDirChildNavItemType,
} from "@programmer/constants";
import { algolia, IndexTutorialsType } from "@programmer/shared";
import toc from "toc";
import { AnchorsType } from "@programmer/types";
import slugify from "slugify";
import { remark } from "remark";
import html from "remark-html";
import { TutorialEnums } from "@programmer/constants";
import { Metadata } from "next";

interface ContentPagePropsType {
  params: Promise<{ tutoType: string; slug: string[] }>;
}

export async function generateStaticParams() {
  try {
    const tutorialTypes = [
      "cpp",
      "react",
      "nextjs",
      "devops",
      "git",
      "monorepo",
    ];

    const params: { tutoType: string; slug: string[] }[] = [];

    tutorialTypes.forEach((type) => {
      const tutorials = getTutorialsByKey[type as TutorialEnums];
      if (!tutorials) return;

      Object.values(tutorials).forEach((section) => {
        if (!section?.slug) return;

        section.items.forEach((item) => {
          // Push direct item
          if (item.slug) {
            params.push({
              tutoType: type,
              slug: [section.slug, item.slug],
            });
          }

          // If item has dirItems, handle them
          if (item.dirItems) {
            Object.entries(item.dirItems).forEach(([_, dir]) => {
              const typedDir = dir as TutorialDirChildNavItemType;
              // push the dir nodes
              if (typedDir.slug) {
                params.push({
                  tutoType: type,
                  slug: [section.slug, typedDir.slug],
                });
              }

              // Push all subitems
              typedDir.items.forEach((subItem) => {
                if (subItem.slug) {
                  params.push({
                    tutoType: type,
                    slug: [section.slug, typedDir.slug, subItem.slug],
                  });
                }
              });
            });
          }
        });
      });
    });

    // Preparing data for indexing in Algolia
    if (process.env.NODE_ENV === "production") {
      const dataForAlgo: IndexTutorialsType[] = await Promise.all(
        params.map(async (param): Promise<IndexTutorialsType> => {
          const joinedSlug = param.slug.join("/").toString();
          // getting the absolute path
          const filePath = `src/content/${param.tutoType}/${joinedSlug}.mdx`;

          let getData = "";

          try {
            getData = fs.readFileSync(filePath, "utf-8");
          } catch (error) {
            console.log("Error file reading");
          }

          const { data, content } = matter(getData);

          // Convert MDX/Markdown to HTML
          const processedContent = await remark().use(html).process(content);
          // convert to string
          const contentHtml = processedContent.toString();
          // create anchor for headings with id
          const { headers } = toc.anchorize(contentHtml, []);
          const parsedAnchors = headers.map((header: AnchorsType) => ({
            ...header,
            anchor: slugify(header.text || "", {
              replacement: "-",
              lower: true,
              strict: true,
              trim: true,
            }),
          }));

          return {
            objectID: `${param.tutoType}/${joinedSlug}`, // <-- Unique identifier for Algolia
            label: data?.title,
            desc: data?.desc,
            type: "tutorial",
            slug: `${param.tutoType}/${joinedSlug}`,
            onthispage: parsedAnchors.map((item: AnchorsType) => ({
              label: item.text,
              slug: item.anchor,
            })) || [{}],
          };
        })
      );

      try {
        await algolia.indexTutorial(dataForAlgo);
      } catch (error) {
        throw new Error("Failed to index data in Algolia");
      }
    }

    return params;
  } catch (error) {
    throw new Error("Failed to generate static params");
  }
}

export async function generateMetadata({
  params,
}: ContentPagePropsType): Promise<Metadata> {
  const { tutoType, slug } = await params;
  const filePath = `src/content/${tutoType}/${slug.join("/")}.mdx`;

  try {
    const getData = fs.readFileSync(filePath, "utf-8");
    const { data: metaData } = matter(getData);

    return {
      title: metaData?.title || "Tutorial",
      description: metaData?.desc || "Description not found",
    };
  } catch (error) {
    return {
      title: "Not Found",
      description:
        "Sorry, the tutorial you're looking for doesn't exist or may have been moved. Explore other tutorials to keep learning!",
    };
  }
}

export default async function ContentPage({ params }: ContentPagePropsType) {
  const { tutoType, slug } = await params;
  const { default: Post } = await import(`@/content/${tutoType}/${slug.join("/")}.mdx`)

  // if (process.env.NODE_ENV === "development") {
  //   generateStaticParams().then((params) => {
  //     console.log(params);
  //   });
  // }

  try {

    return (
      <>
        <div className="flex justify-center items-start gap-5">
          <div className="max-w-[750px] w-full p-5 pt-16">
            <article className="prose prose-gray dark:prose-invert main-article">
            <Post />
            </article>
            <TutoPagination />
          </div>

          <ContentAsideNav />
        </div>
      </>
    );
  } catch (error) {
    return (
      <div className="flex justify-center items-start gap-5">
        <div className=" w-full p-5 pt-14 h-screen flex justify-center items-center">
          <span>Not Found</span>
        </div>
      </div>
    );
  }
}
