"use client";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {observer} from "mobx-react"

import { paginationStore } from "@programmer/shared";

export const  TutoPagination = observer(() => {



  return (
    <div className="mt-10 mb-10 flex justify-center items-center gap-2 pt-2">
      {paginationStore.prev && (
        <Link href={`${paginationStore.prev?.path}`} className="w-full">
          <PMButton
            variant="silent"
            className="w-full p-3 px-4 border group border-border-color_800C transition-colors flex flex-col justify-center items-start"
            radius="primary"
          >
            <div className="flex justify-center w-fit items-center gap-1">
              <ChevronLeft
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color group-hover:text-text-color_1"
              />

              <span className="text-read_2 text-text-color_2 font-medium group-hover:text-text-color_1">
                Previous
              </span>
            </div>
            <p className="text-read_1 pt-2 one_line_ellipsis font-medium">
              {paginationStore.prev?.label}
            </p>
          </PMButton>
        </Link>
      )}

      {paginationStore.next && (
        <Link href={`${paginationStore.next?.path}`} className="w-full">
          <PMButton
            variant="silent"
            className="w-full p-3 px-4 border group border-border-color_800C transition-colors flex flex-col justify-center items-end"
            radius="primary"
          >
            <div className="flex justify-center w-fit items-center gap-1">
              <span className="text-read_2 text-text-color_2 font-medium group-hover:text-text-color_1">
                Next
              </span>
              <ChevronRight
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color group-hover:text-text-color_1"
              />
            </div>
            <p className="text-read_1 pt-2 one_line_ellipsis font-medium">
              {paginationStore.next?.label}
            </p>
          </PMButton>
        </Link>
      )}
    </div>
  );
})
