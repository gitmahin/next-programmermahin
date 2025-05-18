"use client";
import { RootState } from "@/redux/store";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function TutoPagination() {
  const prev = useSelector((state: RootState) => state.tutoPaginate.prev);
  const next = useSelector((state: RootState) => state.tutoPaginate.next);

  return (
    <div className="mt-10 mb-10 flex justify-center items-center gap-2 pt-2">
      {prev && (
        <Link href={`${prev?.path}`} className="w-full">
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
              {prev?.label}
            </p>
          </PMButton>
        </Link>
      )}

      {next && (
        <Link href={`${next?.path}`} className="w-full">
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
              {next?.label}
            </p>
          </PMButton>
        </Link>
      )}
    </div>
  );
}
