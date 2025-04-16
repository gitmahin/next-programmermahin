import React from "react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ProcessedContent from "./processed-content";
import matter from "gray-matter";
import ContentAsideNav from "./content-aside-nav";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TutoPagination from "./paginatation";

interface ContentPagePropsType {
  params: Promise<{ slug: string[] }>;
}

export default async function ContentPage({ params }: ContentPagePropsType) {
  const { slug } = await params;

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
          <aside className="w-[300px] h-[calc(100vh-70px)] overflow-y-auto sticky border top-[70px] tuto-aside-nav">
            <ContentAsideNav />
          </aside>
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
