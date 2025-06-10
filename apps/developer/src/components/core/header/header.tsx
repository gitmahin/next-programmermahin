"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  isSidebarOpenSelector,
  setSidebarOpen,
} from "@/redux/sidebar/sidebarSlice";
import { PMLogo } from "@programmer/ui";
import { PanelLeft, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { RouterNavigation } from "../router-navigation";
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
    <header className="fixed top-0 left-0 w-full h-[50px] border-b z-50 border-border-color_800C bg-white px-5 flex justify-between items-center ">
      <div className="flex justify-center items-center">
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
        <div className="mr-5">
          <RouterNavigation/>
        </div>
        <PMLogo size="sm" />
        <nav className="flex justify-center items-center w-fit gap-3 pl-5 text-read_2 font-medium">
          {HEADER_NAV_LINKS.map((navLink, i) => {
            return (
              <Link href={`${navLink.slug}`} key={i} className="classic_link">
                {navLink.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex justify-center items-center gap-2">
        <button className="classic_button">Search</button>

        <input type="text" placeholder="Search" className="classic_input" />
      </div>
    </header>
  );
};
