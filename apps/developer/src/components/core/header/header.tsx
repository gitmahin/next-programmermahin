"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  isSidebarOpenSelector,
  setSidebarOpen,
} from "@/redux/sidebar/sidebarSlice";
import { PMLogo, ThemeModeToggoler } from "@programmer/ui";
import { PanelLeft, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { HEADER_NAV_LINKS } from "@/constants";

export const Header = () => {
  const path_name = usePathname();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(isSidebarOpenSelector);

  useEffect(() => {
    if (!setSidebarOpen) return;
    dispatch(setSidebarOpen(false));
  }, [path_name]);

  return (
    <header className="fixed top-0 left-0 w-full h-[50px] border-b z-50 border-border-color_800C bg-background-color_925C px-5 flex justify-between items-center ">
      <div className="flex justify-center items-center flex-shrink-0">
        <div
          onClick={() => {
            if (!setSidebarOpen) return;

            dispatch(setSidebarOpen(!isSidebarOpen));
          }}
          className=" mr-2 hidden max-[1290px]:flex "
        >
          {!isSidebarOpen && <PanelLeft size={16} />}
          {isSidebarOpen && <X size={16} />}
        </div>
        <PMLogo size="sm" />
        <h1 className="ml-2 border-l border-border-color_800C pl-2 font-medium text-read_16">
          Developer Docs
        </h1>
      </div>
      <nav className="flex justify-end items-center w-full gap-3 pr-5 text-read_2 font-medium">
        {HEADER_NAV_LINKS.map((navLink, i) => {
          return (
            <Link
              href={`${navLink.slug}`}
              key={i}
              className="text-text-color_2 hover:text-text-color_1 transition-colors"
            >
              {navLink.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-0.5 bg-background-color_900C border border-border-color_800C rounded-tiny placeholder:text-text-color_3"
        />
        <ThemeModeToggoler />
      </div>
    </header>
  );
};
