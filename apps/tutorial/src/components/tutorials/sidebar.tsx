"use client"
import { MAIN_NAV_LINKS } from "@/constants";
import {
  PMLogo,
} from "@programmer/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const path_name = usePathname()
  return (
    <nav className="w-[300px] border-r border-border-color_800C bg-background-color_925C h-screen fixed left-0 top-0">
      <div className="w-full border-b border-border-color_800C px-4 py-3">
        <PMLogo size="sm" />
      </div>
      <div className="px-4 py-4">
        <ul className="leading-8">
          {MAIN_NAV_LINKS.map((item, i) => {
            const segments = path_name.split("/").filter(Boolean);
            return (
              <Link href={item.slug ?? "#"} key={i}>
                <li className="flex justify-start items-center gap-2 group">
                  <div className={`border rounded-tiny text-text-svg_default_color group-hover:text-text-color_1 border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C ${segments.includes(item.slug) && "bg-gradient-to-tr from-pm_purple-900 to-pm_purple-700 text-text-color_1"}`}>
                    {item.icon}
                  </div>
                  <span className={`text-read_2 text-text-color_4 font-medium group-hover:text-text-color_1 ${segments.includes(item.slug) && "text-text-color_1"}`}>
                    {item.label}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
