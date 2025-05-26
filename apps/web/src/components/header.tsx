"use client"
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton, PMLogo } from "@programmer/ui";
import React from "react";
import { Search, setSearchBoxOpen } from "@programmer/shared";
import { useAppDispatch } from "@/hooks/redux.hook";
import { SearchIcon } from "lucide-react";

export const Header = () => {
  // for dispatch type safety
  const dispatch = useAppDispatch();

  const handleSearchBoxOpen = () => {
    if(!setSearchBoxOpen) return 
    dispatch(setSearchBoxOpen(true))
  }

  return (
    <header className="w-full bg-background-color_925C border-b border-border-color_800C h-[64px] fixed top-0 left-0 px-5">
      <div className="layout_max_1200 mx-auto flex justify-between items-center h-full">
        <PMLogo size="sm" />
        <nav></nav>
        <div className="flex justify-end items-center gap-2">
     
          <PMButton
            variant="silent"
            className="py-1 px-2 rounded-tablet group flex justify-between items-center gap-1"
            onClick={handleSearchBoxOpen}
          >
            <SearchIcon size={LUCIDE_DEFAULT_ICON_SIZE} className="text-text-svg_default_color group-hover:text-text-color_1" />
            <span className="text-text-color_2 font-medium text-read_3">
              Ctrl k
            </span>
          </PMButton>
              <Search showSearchButton={false} />
          <PMButton
            variant="secondary"
            className="px-3 py-1 rounded text-read_1 font-medium"
          >
            Log in
          </PMButton>
          <PMButton
            variant="primary"
            className="px-3 py-1 rounded text-read_1 font-medium"
          >
            Sign up
          </PMButton>
        </div>
      </div>
    </header>
  );
};
