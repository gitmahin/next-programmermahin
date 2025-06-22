"use client";
import {
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
  PMLogo,
  ThemeModeToggoler,
} from "@programmer/ui";
import React, { useState } from "react";
import { setSearchBoxOpen } from "@programmer/shared";
import { useAppDispatch } from "@/hooks/redux.hook";
import { Equal, SearchIcon } from "lucide-react";
import { MainNav } from "./mainNav";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicSearchBox = dynamic(
  () => import("@programmer/shared").then((module) => module.Search),
  {
    ssr: false,
  }
);

export const Header = () => {
  // for dispatch type safety
  const dispatch = useAppDispatch();

  const handleSearchBoxOpen = () => {
    if (!setSearchBoxOpen) return;

    dispatch(setSearchBoxOpen(true));
  };

  return (
    <header className="w-full bg-background-color_925C border-b border-border-color_800C h-[64px] fixed top-0 left-0 px-5 z-50">
      <div className="layout_max_1200 mx-auto flex justify-center items-center h-full">
        <div className="w-full flex-1">
          <Link href={"/"}>
            <PMLogo size="sm" />
          </Link>
        </div>
        <MainNav />

        <div className="hidden max-[520px]:flex justify-end items-center gap-2 flex-shrink-0">
          <ThemeModeToggoler />
          <PMButton
            variant="silent"
            radius="tablet"
            className="p-1 flex-shrink-0 flex justify-center items-center"
          >
            <Equal
              size={24}
              className="text-text-svg_default_color group-hover:text-text-color_1"
            />
          </PMButton>
        </div>

        <div className="flex justify-end items-center gap-2 w-full flex-1 max-[520px]:hidden">
          <PMButton
            variant="silent"
            className="py-1 px-2 rounded-tablet group flex justify-between items-center gap-1"
            onClick={handleSearchBoxOpen}
          >
            <SearchIcon
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color group-hover:text-text-color_1"
            />
            <span className="text-text-color_2 font-medium text-read_3">
              Ctrl k
            </span>
          </PMButton>

          <DynamicSearchBox showSearchButton={false} />

          <Link href={"/login"}>
            <PMButton
              variant="secondary"
              className="px-3 py-1 rounded text-read_1 font-medium transition-colors"
            >
              Log in
            </PMButton>
          </Link>

          <Link href={"/signup"}>
            <PMButton
              variant="primary"
              className="px-3 py-1 rounded text-read_1 font-medium transition-colors"
            >
              <span className="text-text-zinc_white">Sign up</span>
            </PMButton>
          </Link>
        </div>
      </div>
    </header>
  );
};
