"use client";
import React, { useEffect, useState } from "react";
import { AnchorsType } from "@programmer/types";
import toc from "toc";
import slugify from "slugify";

export const useAnchorize = (htmlContent: string) => {
  const [anchors, setAnchors] = useState<AnchorsType[]>([]);

  useEffect(() => {
    if (htmlContent) {
      const { headers } = toc.anchorize(htmlContent);
      const parsedAnchors = headers.map((header: AnchorsType) => ({
        ...header,
        anchor: slugify(header.text || "", {
          replacement: "-",
          lower: true,
          strict: true,
          trim: true,
        }),
      }));
      setAnchors(parsedAnchors);
    } else {
      setAnchors([]);
    }
  }, [htmlContent]);

  return {anchors};
};
