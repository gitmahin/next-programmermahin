import React from "react";
import fs from "fs";
import ProcessedContent from "./processed-content";
import matter from "gray-matter";
import ContentAsideNav from "./content-aside-nav";
import TutoPagination from "./paginatation";
import { getTutorialsByKey, TutorialEnums } from "@/constants";
import { algolia, IndexTutorialsType } from "@programmer/shared";
import toc from "toc";
import { AnchorsType } from "@programmer/types";
import slugify from "slugify";
import { remark } from "remark";
import html from "remark-html";

interface ContentPagePropsType {
  params: Promise<{ slug: string[] }>;
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

    const params: { slug: string[] }[] = [];

    tutorialTypes.forEach((type) => {
      const tutorials = getTutorialsByKey[type as TutorialEnums];

      if (!tutorials) return;

      Object.values(tutorials).forEach((section) => {
        if (!section?.slug) return;

        // Push nested items
        section.items.forEach((item) => {
          params.push({
            slug: [type, section.slug, item.slug],
          });
        });
      });
    });

    // Indexing data to algolia

    // const dataForAlgo: IndexTutorialsType[] = await Promise.all(
    //   params.map(async (param): Promise<IndexTutorialsType> => {
    //     const joinedSlug = param.slug.join("/").toString();
    //     const filePath = `src/content/${joinedSlug}.mdx`;
    //     console.log("file path is", filePath);

    //     let getData = "";

    //     try {
    //       getData = fs.readFileSync(filePath, "utf-8");
    //     } catch (error) {
    //       console.log("Error file reading");
    //     }

    //     const { data, content } = matter(getData);

    //     // Convert MDX/Markdown to HTML
    //     const processedContent = await remark().use(html).process(content);

    //     const contentHtml = processedContent.toString();
    //     const { headers } = toc.anchorize(contentHtml, []);
    //     const parsedAnchors = headers.map((header: AnchorsType) => ({
    //       ...header,
    //       anchor: slugify(header.text || "", {
    //         replacement: "-",
    //         lower: true,
    //         strict: true,
    //         trim: true,
    //       }),
    //     }));

    //     return {
    //       label: data?.title,
    //       desc: data?.description,
    //       type: "tutorial",
    //       slug: joinedSlug,
    //       onthispage: parsedAnchors.map((item: AnchorsType) => ({
    //         label: item.text,
    //         slug: item.anchor,
    //       })) || [{}],
    //     };
    //   })
    // );

    // console.log(dataForAlgo);

    // try {
    //   await algolia.indexTutorial(dataForAlgo);
    // } catch (error) {
    //   throw new Error("Failed to index data in Algolia");
    // }

    return params;
  } catch (error) {
    throw new Error("Failed to generate static params");
  }
}

export default async function ContentPage({ params }: ContentPagePropsType) {
  const { slug } = await params;

  if (process.env.NODE_ENV === "development") {
    generateStaticParams().then((params) => {
      console.log(params);
    });
  }

  try {
    const filePath = `src/content/${slug.join("/")}.mdx`;
    const getData = fs.readFileSync(filePath, "utf-8");
    const { data: metaData, content: mdxContent } = matter(getData);

    return (
      <>
        <title>{metaData.title || "Untitled"}</title>
        <meta name="description" content={metaData.desc || "No Description"} />
        <div className="flex justify-center items-start gap-5">
          <div className="max-w-[800px] w-full p-5 pt-16">
            <ProcessedContent data={mdxContent} />
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
