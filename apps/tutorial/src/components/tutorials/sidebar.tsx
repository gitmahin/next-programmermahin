"use client";
import { COURSES_ICONS, MAIN_NAV_LINKS } from "@/constants";
import { DEVOPS_TUTORIALS } from "@/constants/tutorials/devops";
import { LUCIDE_DEFAULT_ICON_SIZE, PMLogo } from "@programmer/ui";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = () => {
  const path_name = usePathname();
  return (
    <nav className="w-[280px] border-r border-border-color_800C bg-background-color_925C h-screen fixed left-0 top-0">
      <div className="w-full border-b border-border-color_800C px-4 py-3 flex justify-between items-center">
        <PMLogo size="sm" />
        <div className="border border-border-color_700C w-[60px] h-[25px] rounded-tablet flex justify-between items-center px-[3px]">
        <Search size={LUCIDE_DEFAULT_ICON_SIZE} className="text-text-svg_default_color" />
        </div>
      </div>
      <div className="px-4 py-4">
        <ul className="leading-8 pb-6">
          {MAIN_NAV_LINKS.map((item, i) => {
            const segments = path_name.split("/").filter(Boolean);
            return (
              <Link href={item.slug ?? "#"} key={i}>
                <li className="flex justify-start items-center gap-2 group">
                  <div
                    className={`border rounded-tiny  group-hover:text-text-color_1 border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C ${segments.includes(item.slug) ?"bg-gradient-to-tr from-pm_purple-900 to-pm_purple-700 text-text-color_1" : "text-text-svg_default_color"}`}
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
        <div className="flex justify-start items-center gap-2">
          <Image
            src={`${COURSES_ICONS["devops"]?.svgPath ?? ""}`}
            width={100}
            height={100}
            alt="icon"
            className="w-[20px] h-[20px] filter brightness-0 dark:invert"
          />
          <span className="text-read_2 text-pm_purple-700 font-medium ">
            {COURSES_ICONS["devops"]?.name ?? ""}
          </span>
        </div>
      </div>
      <div className="px-4">
        {Object.entries(DEVOPS_TUTORIALS).map(([Key, value], i) => {
          const segments = path_name.split("/");
          return (
            <ul key={i} className="pb-4">
              <div className="flex justify-start items-center gap-2">
                {
                  value.icon &&

                <Image
                src={`${value.icon ?? ""}`}
                width={100}
                height={100}
                alt="icon"
                className="w-[18px] h-[18px] filter brightness-0 dark:invert"
                />
              }
                <span
                  className={`text-read_2 one_line_ellipsis font-semibold font-geist_mono  uppercase ${path_name.split("/").includes(value.slug) ? "text-text-color_1" : "text-text-color_3"} `}
                >
                  {Key}
                </span>
              </div>
              <div className="leading-8 border-l border-border-color_800C pl-2 mt-4">
                {value.items.map((item, i) => {
                  const isActivePath = segments.includes(item.slug);
                  return (
                    <Link
                      key={i}
                      href={`/${value.slug}/${item.slug}`}
                      className="group"
                    >
                      <li
                        className={`relative px-3 py-0 rounded-tiny ${isActivePath && "bg-background-color_800C"} `}
                      >
                        <span
                          className={`one_line_ellipsis text-read_2 font-medium group-hover:text-text-color_1 ${isActivePath ? "text-text-color_1" : "text-text-color_4"}`}
                        >
                          {item.label}
                        </span>
                        {isActivePath && (
                          <div
                            className={`w-[3.5px] h-[15px] bg-pm_purple-700 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
                          ></div>
                        )}
                      </li>
                    </Link>
                  );
                })}
              </div>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};
