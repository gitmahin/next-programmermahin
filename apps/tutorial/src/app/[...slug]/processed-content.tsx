"use client";
import React, { useEffect } from "react";
import { useProcessMDX } from "@programmer/hooks";
import { usePathname } from "next/navigation";

export default function ProcessedContent({
  data,
}: {
  data: string;
}) {
  const { content } = useProcessMDX(data);
  return (
    <>
      <article
        className="prose prose-gray dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </>
  );
}
