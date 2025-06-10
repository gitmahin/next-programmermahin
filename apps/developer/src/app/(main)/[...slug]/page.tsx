import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { extractAnchors, mdxToHtml } from "@programmer/shared";
import Link from "next/link";
import { ContentAside } from "./content-aside";
import { Pagination } from "./pagination";
import { getDeveloperDocsFlatData } from "@/lib";

type MainDocContentPropsType = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const data = getDeveloperDocsFlatData
  return data
}

export default async function MainDocContent({
  params,
}: MainDocContentPropsType) {
  const { slug } = await params;
  try {
    const filePath = `src/content/${slug.join("/")}.mdx`;
    const getFileData = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(getFileData);

    const MdxComponent = await mdxToHtml(content);

    if (process.env.NODE_ENV === "development") {
      generateStaticParams().then((params) => {
        console.log(params);
      });
    }

    return (
      <div className="flex justify-center items-start">
        <div className="pb-28 !max-w-[800px] w-full">
          <article className="prose prose-gray dark:prose-invert p-8 pb-20 max-[1290px]:p-5 !w-full ">
            {MdxComponent}
          </article>
          <div className="px-8 max-[1290px]:px-5">
            <Pagination />
          </div>
        </div>
        <ContentAside content={content} />
      </div>
    );
  } catch (error) {
    <div className="w-full h-[500px] bg-red-500">Not Found</div>;
  }
}
