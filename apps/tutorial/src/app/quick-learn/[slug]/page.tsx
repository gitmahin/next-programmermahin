import React from "react";
import fs from "fs"
import matter from "gray-matter";
import { mdxToHtml } from "@/lib/mdxToHtml";
import { QuickLearnAsideNav } from "../components/quickLearnAsideNav";


export default async function QuickLearnChildrenPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params
  const fileContent = fs.readFileSync(`src/content/quicklearn/${slug}.mdx`, "utf-8")
  const {content}  = matter(fileContent)
  const MdxContent = mdxToHtml(content) 

  return  <div className="flex justify-center items-start gap-5">
            <div className="max-w-[750px] w-full p-5 pt-16">
                <article className="prose prose-gray dark:prose-invert main-article">
                  {MdxContent}
                </article>
              {/* <TutoPagination /> */}
            </div>
            <QuickLearnAsideNav/>
          </div>
}
