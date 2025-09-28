"use client";
import { paginationStore } from "@programmer/shared";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { observer } from "mobx-react";
import Link from "next/link";
import React from "react";

export const QuickLearnPagination = observer(() => {

  return (
    <div className="flex justify-between items-center gap-10 my-16">
      {paginationStore.prev && (
        <Link href={paginationStore.prev?.path || ""}>
          <PMButton
            variant="secondary"
            className="py-1 px-5 rounded group flex justify-center items-center gap-1"
          >
            <ChevronLeft
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color group-hover:text-text-color_1"
            />
            <span className="text-read_1 font-medium text-text-color_2 group-hover:text-text-color_1">
              {paginationStore.prev?.label}
            </span>
          </PMButton>
        </Link>
      )}

      {paginationStore.next && (
        <Link href={paginationStore.next?.path || ""}>
          <PMButton
            variant="secondary"
            className="py-1 px-5 rounded group flex justify-center items-center gap-1"
          >
            <span className="text-read_1 font-medium text-text-color_2 group-hover:text-text-color_1">
              {paginationStore.next?.label}
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
});
