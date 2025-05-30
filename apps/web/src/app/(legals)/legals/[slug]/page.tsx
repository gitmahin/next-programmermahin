import { ArticlePage, ArticlePageWrapper } from "@/components/articlePage";
import { MainContentWrapper } from "@/components/mainContentWrapper";
import { getFileContent } from "@/lib/getFileContent";
import { mdxToHtml } from "@programmer/shared";
import { notFound } from "next/navigation";
import React from "react";
import fs from "fs";
import { Metadata } from "next";

interface LegalsPagePropsType {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const getSlugs = fs.readdirSync("src/content/pages", "utf-8");

  const data = getSlugs.map((item) => ({
    slug: item.replace(".mdx", ""),
  }));

  return data;
}

export async function generateMetadata({
  params,
}: LegalsPagePropsType): Promise<Metadata> {
  const { slug } = await params;
  const filePath = `src/content/pages/${slug}.mdx`;

  try {
    const { data: metaData } = getFileContent(filePath);

    return {
      title: metaData?.title || "Untitled",
      description: metaData?.meta_desc || "Description not found",
    };
  } catch (error) {
    return {
      title: "Not Found",
      description:
        "Sorry, the page you're looking for doesn't exist or may have been moved.",
    };
  }
}

export default async function LegalsPage({ params }: LegalsPagePropsType) {
  const { slug } = await params;

  const filePath = `src/content/pages/${slug}.mdx`;
  const { data, content } = getFileContent(filePath);

  if (content == "") {
    return notFound();
  }

  if (process.env.NODE_ENV === "development") {
    generateStaticParams().then((params) => {
      console.log(params);
    });
  }

  const MdxContent = mdxToHtml(content);
  return (
    <MainContentWrapper>
      <div className="layout_max_750 mx-auto pb-10 mb-4 mt-14">
        <span className="text-read_2 font-medium text-text-color_3">
          {data.date}
        </span>
        <h1 className="pm_page_title font-semibold mt-2">{data.title}</h1>
      </div>
      <ArticlePageWrapper>
        <ArticlePage>{MdxContent}</ArticlePage>
      </ArticlePageWrapper>
      <div className="mb-36"></div>
    </MainContentWrapper>
  );
}
