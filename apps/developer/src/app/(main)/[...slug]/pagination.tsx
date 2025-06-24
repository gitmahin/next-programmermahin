"use client";
import { useAppSelector } from "@/hooks";
import { paginationValuesSelector } from "@programmer/shared";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Pagination = () => {
  const { next, prev } = useAppSelector(paginationValuesSelector);
  return (
    <div className="flex justify-between items-center text-read_1 font-medium">
      {prev && (
        <Link
          href={`${prev.path}`}
          className="flex-shrink-0 classic_link flex justify-center items-center w-fit"
        >
          <ChevronsLeft size={18} />
          {prev.label}
        </Link>
      )}
      {next && (
        <Link
          href={`${next.path}`}
          className="flex-shrink-0 classic_link flex justify-center items-center w-fit"
        >
          {next.label}
          <ChevronsRight size={18} />
        </Link>
      )}
    </div>
  );
};
