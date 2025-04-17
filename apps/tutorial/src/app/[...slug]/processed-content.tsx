"use client";
import React, { useEffect } from "react";
import { useProcessMDX } from "@programmer/hooks";
import { useDispatch } from "react-redux";
import { setProcessedContent } from "@/redux/tutorials/processedContentSlice";

export default function ProcessedContent({ data }: { data: string }) {
  const dispatch = useDispatch();
  const { content } = useProcessMDX(data);

  useEffect(() => {
    if (!setProcessedContent) return;
    dispatch(setProcessedContent(content));
  }, [content]);

  return (
    <>
      <article
        className="prose prose-gray dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </>
  );
}
