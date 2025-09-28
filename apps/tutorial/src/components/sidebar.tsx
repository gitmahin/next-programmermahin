"use client";
import { MAIN_NAV_LINKS } from "@/constants";
import {
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
  PMLogo,
  ThemeModeToggoler,
} from "@programmer/ui";
import { Braces, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { sidebarStore } from "@/services/store";
import { observer } from "mobx-react";


export const Sidebar = observer(({ children }: { children: React.ReactNode }) => {
  // const path_name = usePathname();

  const handleSidebarOff = () => {
    sidebarStore.setIsOpenMobSidebar(false)
  };

  return (
    <aside
      className={`w-[320px] z-50 transition-[left] border-r border-border-color_800C bg-background-color_900C h-screen fixed left-0 top-0 tutosidebar ${sidebarStore.isOpenMobSidebar ? "openTutoSidebar" : ""}`}
    >
      {/* <div className="w-[20px] h-screen absolute left-full top-0 border border-solid box-border border-l-0 border-r-1 border-b-0 border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 max-[1114px]:backdrop-blur-3xl"></div> */}

      <div className="w-full relative top-0 border-b z-20 bg-background-color_900C border-border-color_800C px-4 py-3 flex justify-between items-center">
        <PMLogo size="sm" />
        <ThemeModeToggoler />
        <PMButton
          onClick={handleSidebarOff}
          variant="secondary"
          className="w-[25px] h-[25px] hidden showSidebarClose justify-center items-center group hover:border hover:border-border-color_800C "
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
          <div className="border-b border-border-color_800C pb-4">
            <Link href={`https://programmermahin.com`}>
              <li className="flex justify-start items-center gap-2 group">
                <div
                  className={`border rounded-tiny border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C text-text-svg_default_color group-hover:text-pm_zinc-950 dark:group-hover:text-text-zinc_white"}`}
                >
                  <Braces
                    size={LUCIDE_DEFAULT_ICON_SIZE}
                    className="group-hover:text-text-color_1"
                  />
                </div>
                <div className="leading-none">
                  <span
                    className={`text-read_2 font-medium  "text-text-color_4 group-hover:text-text-color_1`}
                  >
                    Root
                  </span>
                  <p className="text-[11px] text-text-color_3 mt-[2px]">
                    programmermahin.com
                  </p>
                </div>
              </li>
            </Link>
          </div>

          {/* <ul className="leading-9 pt-3">
            {MAIN_NAV_LINKS.map((item, i) => {
              const Icon = item.icon;
              const segments = path_name.split("/").filter(Boolean);
              return (
                <Link href={`/${item.slug ?? "#"}`} key={i}>
                  <li className="flex justify-start items-center gap-2 group">
                    <div
                      className={`border rounded-tiny border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C ${segments.includes(item.slug ?? "") || (segments.length === 0 && path_name.includes(item.slug)) ? "bg-gradient-to-tr from-pm_purple-900 to-pm_purple-400 text-text-zinc_white group-hover:text-text-zinc_white" : "text-text-svg_default_color group-hover:text-pm_zinc-950 dark:group-hover:text-text-zinc_white"}`}
                    >
                      <Icon size={LUCIDE_DEFAULT_ICON_SIZE} />
                    </div>
                    <span
                      className={`text-read_2 font-medium ${segments.includes(item.slug ?? "") || segments.length === 0 ? "text-text-color_1 " : "text-text-color_4 group-hover:text-text-color_1"}`}
                    >
                      {item.label}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul> */}
        </div>
        <div className="pb-5">

        {children}
        </div>
      </nav>
    </aside>
  );
});
