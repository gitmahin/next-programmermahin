import { ArticlePage, ArticlePageWrapper } from "@/components/articlePage";
import { MainContentWrapper } from "@/components/mainContentWrapper";
import { getFileContent } from "@/lib/getFileContent";
import { mdxToHtml } from "@programmer/shared";
import { notFound } from "next/navigation";
import React from "react";

interface LegalsPagePropsType {
  params: Promise<{ slug: string }>;
}

export default async function LegalsPage({ params }: LegalsPagePropsType) {
  const { slug } = await params;
  
  const filePath = `src/content/pages/${slug}.mdx`;
  const { data, content } = getFileContent(filePath);

  if(content == "") {
    return notFound()
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
