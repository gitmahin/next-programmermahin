"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  isContentAsideOpenSelector,
  setContentAsideOpen,
} from "@/redux/sidebar/sidebarSlice";
import { extractAnchors, TocItem } from "@programmer/shared";
import { useActiveAnchor } from "@programmer/hooks";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ContentAside = ({ content }: { content: string }) => {
   const anchors = extractAnchors(content);
  const { activeHash } = useActiveAnchor(content)
  const isContentAsideOpen = useAppSelector(isContentAsideOpenSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <AlignRight
        onClick={() => {
          if (!setContentAsideOpen) return;
          dispatch(setContentAsideOpen(!isContentAsideOpen));
        }}
        size={20}
        className="fixed top-[60px] right-4 z-20 hidden max-[830px]:flex"
      />
      <aside
        className={`w-[300px] bg-transparent flex-shrink-0 flex flex-col  sticky top-[85px] max-[1290px]:top-[75px] max-[830px]:fixed max-[830px]:top-0 max-[830px]:h-screen max-[830px]:w-[280px] max-[830px]:pt-[65px] max-[830px]:border-l border-border-color_800C z-10 gap-1 px-5 text-read_1 ${isContentAsideOpen ? "max-[830px]:right-0" : "max-[830px]:right-[-100%]"}`}
      >
        {anchors.map((item, i) => {
          return (
            <Link
              key={i}
              href={`#${item.slug}`}
              style={{ marginLeft: `${(item.level - 2) * 10}px` }}
              className={`transition-colors ${activeHash === `#${item.slug}` ? "text-pm_purple-600 font-medium" : "text-text-color_2 hover:text-text-color_1"}`}
            >
              {item.content}
            </Link>
          );
        })}
      </aside>
    </>
  );
};
