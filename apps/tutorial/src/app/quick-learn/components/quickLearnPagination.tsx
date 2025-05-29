"use client";
import { useAppSelector } from "@/hooks/redux.hook";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const QuickLearnPagination = () => {
  const prev = useAppSelector((state) => state.tutoPaginate.prev);
  const next = useAppSelector((state) => state.tutoPaginate.next);
  return (
    <div className="flex justify-between items-center gap-10 my-16">
      {prev && (
        <Link href={prev?.path || ""}>
          <PMButton
            variant="secondary"
            className="py-1 px-5 rounded group flex justify-center items-center gap-1"
          >
            <ChevronLeft
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color group-hover:text-text-color_1"
            />
            <span className="text-read_1 font-medium text-text-color_2 group-hover:text-text-color_1">
              {prev?.label}
            </span>
          </PMButton>
        </Link>
      )}

      {next && (
        <Link href={next?.path || ""}>
          <PMButton
            variant="secondary"
            className="py-1 px-5 rounded group flex justify-center items-center gap-1"
          >
            <span className="text-read_1 font-medium text-text-color_2 group-hover:text-text-color_1">
              {next?.label}
            </span>
            <ChevronRight
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color group-hover:text-text-color_1"
            />
          </PMButton>
        </Link>
      )}
    </div>
  );
};
