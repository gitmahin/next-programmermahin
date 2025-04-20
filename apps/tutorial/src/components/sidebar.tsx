"use client";
import {  MAIN_NAV_LINKS } from "@/constants";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton, PMLogo } from "@programmer/ui";
import { ChevronDown, Contrast, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@programmer/ui";

import { setMobSidebarOpen } from "@/redux/tutorials/mobSidebarOpen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";

export const Sidebar = ({ children }: {children: React.ReactNode}) => {
  const path_name = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme();
  const dispatch = useAppDispatch();
  const toggleTheme = () => {
    if (theme === "dark" || resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const mobSidebarOpen = useAppSelector((state) => state.mobSidebarOpen.open);

  const handleSidebarOff = () => {
    if (!setMobSidebarOpen) return;
    dispatch(setMobSidebarOpen(false));
  };

  return (
    <nav
      className={`w-[280px] z-50 transition-[left] border-r border-border-color_800C bg-background-color_900C h-screen fixed left-0 top-0 tutosidebar ${mobSidebarOpen ? "openTutoSidebar" : ""}`}
    >
      <div className="w-[20px] h-screen absolute left-full top-0 border border-solid box-border border-l-0 border-r-1 border-b-0 border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div>

      <div className="w-full relative top-0 border-b z-20 bg-background-color_900C border-border-color_800C px-4 py-3 flex justify-between items-center">
        <PMLogo size="sm" />
        <div className="w-fit h-[30px] overflow-hidden rounded-tablet flex justify-between items-center border border-border-color_800C cursor-pointer">
          <div
            onClick={toggleTheme}
            className="flex-shrink-0 h-full px-[6px] hover:bg-background-color_800C flex justify-center items-center"
          >
            {theme !== "system" ? (
              <>
                <Moon
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color dark:block hidden"
                />
                <Sun
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color dark:hidden"
                />
              </>
            ) : (
              <Contrast
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color"
              />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full outline-none">
              <div className="px-1 h-full flex justify-center items-center hover:bg-background-color_800C">
                <ChevronDown
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="group hover:bg-background-color_800C py-1 rounded-tiny"
                onClick={() => setTheme("system")}
              >
                <Contrast
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color group-hover:text-text-color_1"
                />
                <span className="text-text-color_4 text-read_2 group-hover:text-text-color_1">
                  System
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <PMButton
          onClick={handleSidebarOff}
          variant="secondary"
          className="w-[25px] h-[25px] absolute hidden showSidebarClose justify-center items-center right-[-32px] group hover:border hover:border-border-color_800C top-1/2 -translate-y-1/2"
          radius="tiny"
        >
          <X
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className=" flex justify-center items-center text-text-color_1  "
          />
        </PMButton>
      </div>
      <nav className="w-full h-[calc(100%-55px)] bg-background-color_900C overflow-y-auto overflow-x-hidden">
        <div className="px-4 py-4">
          <ul className="leading-8">
            {MAIN_NAV_LINKS.map((item, i) => {
              const segments = path_name.split("/").filter(Boolean);
              return (
                <Link href={`/${item.slug ?? "#"}`} key={i}>
                  <li className="flex justify-start items-center gap-2 group">
                    <div
                      className={`border rounded-tiny group-hover:text-text-color_1 border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C ${segments.includes(item.slug) ? "bg-gradient-to-tr from-pm_purple-900 to-pm_purple-700 text-text-zinc_white" : "text-text-svg_default_color"}`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`text-read_2 text-text-color_4 font-medium group-hover:text-text-color_1 ${segments.includes(item.slug) && "text-text-color_1"}`}
                    >
                      {item.label}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
            {children}
      </nav>
    </nav>
  );
};
