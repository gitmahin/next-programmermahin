import { MAIN_NAV_LINKS } from "@/constants";
import {
  ICON_DEFAULT_COLOR,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMLogo,
  PMOneList,
} from "@programmer/ui";
import { BookOpen, GraduationCap, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <nav className="w-[300px] border-r border-border-color_800C bg-background-color_925C h-screen fixed left-0 top-0">
      <div className="w-full border-b border-border-color_800C px-4 py-3">
        <PMLogo size="sm" />
      </div>
      <div className="px-4 py-4">
        <ul className="leading-8">
          {MAIN_NAV_LINKS.map((item, i) => {
            return (
              <Link href={item.slug ?? "#"} key={i}>
                <li className="flex justify-start items-center gap-2">
                  <div className="border rounded-tiny border-border-color_800C p-1 bg-gradient-to-tr from-background-color_900C to-background-color_800C">
                    {item.icon}
                  </div>
                  <span className="text-read_2 text-text-color_4 font-medium ">
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
