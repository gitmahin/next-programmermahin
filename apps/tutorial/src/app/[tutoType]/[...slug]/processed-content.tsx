"use client";
import React, { useEffect, useState } from "react";
import { useProcessMDX } from "@programmer/hooks";
import { useDispatch } from "react-redux";
import { setProcessedContent } from "@/redux/tutorials/processedContentSlice";

export default function ProcessedContent({ data }: { data: string }) {
  const dispatch = useDispatch();
  // Extract the compiled HTML content from the processed MDX data
  const { content } = useProcessMDX(data);

  useEffect(() => {
    if (!setProcessedContent) return;
    // To generate the table of contents, we dispatch the content to Redux
    // so it can be accessed by any component.
    dispatch(setProcessedContent(content));
  }, [content]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [content]);

  return (
    <>
      <article
        className="prose prose-gray dark:prose-invert main-article"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </>
  );
}
