import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { mdxToHtml } from "@programmer/shared";
import { QuickLearnAsideNav } from "../components/quickLearnAsideNav";
import { QuickLearnPagination } from "../components/quickLearnPagination";
import { Metadata } from "next";
import { getQuickLearnSlugs } from "@/lib/quicklearn/getQuickLearnSlugs";

interface QuickLearnPagePropsType {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const data = getQuickLearnSlugs();

    return data;
  } catch (error) {
    throw new Error("Failed to generate static params");
  }
}

export async function generateMetadata({
  params,
}: QuickLearnPagePropsType): Promise<Metadata> {
  const { slug } = await params;

  try {
    const fileContent = fs.readFileSync(
      `src/content/quicklearn/${slug}.mdx`,
      "utf-8"
    );
    const { data: metaData } = matter(fileContent);

    return {
      title: metaData?.title || "Tutorial",
      description: metaData?.meta_desc || "Description not found",
    };
  } catch (error) {
    return {
      title: "Not Found",
      description:
        "Sorry, the tutorial you're looking for doesn't exist or may have been moved. Explore other tutorials to keep learning!",
    };
  }
}

export default async function QuickLearnChildrenPage({
  params,
}: QuickLearnPagePropsType) {
  const { slug } = await params;

  if (process.env.NODE_ENV === "development") {
    generateStaticParams().then((params) => {
      console.log(params);
    });
  }

  try {
    const fileContent = fs.readFileSync(
      `src/content/quicklearn/${slug}.mdx`,
      "utf-8"
    );
    const { content } = matter(fileContent);
    const MdxContent = mdxToHtml(content);

    return (
      <div className="flex justify-center items-start gap-5">
        <div className="max-w-[750px] w-full p-5 pt-16">
          <article className="prose prose-gray dark:prose-invert main-article">
            {MdxContent}
          </article>
          <QuickLearnPagination />
        </div>
        <QuickLearnAsideNav matterContent={content} />
      </div>
    );
  } catch (error) {
    return <div>Not found</div>;
  }
}
