"use client";
import { useAppSelector } from "@/hooks/redux.hook";
import React from "react";

import { quickLearnNavItems as quickLearnNavItemsSelector } from "@/redux/quicklearn/quickLearnNavItemsSlice";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const QuickLearnNavList = () => {
  const quickLearnNavItems = useAppSelector(quickLearnNavItemsSelector);
  const path_name = usePathname();
  return (
    <>
      {quickLearnNavItems.length > 0 && (
        <div className="px-4 w-full">
          <div className="w-full border-t border-border-color_800C py-4 ">
            <ul className="leading-8 border rounded-tiny bg-background-color_850C border-border-color_800C overflow-hidden">
              {quickLearnNavItems.map((item, i) => {
                const isActivePath = path_name.includes(`${item.slug}`);
                return (
                  <Link key={i} href={`${item.slug}`} className="group">
                    <li
                      className={`list-none relative flex justify-start items-center gap-3 px-3 py-1 transition-colors duration-150 ${
                        isActivePath
                          ? "bg-background-color_800C"
                          : "group-hover:bg-background-color_800C"
                      }`}
                    >
                      <Image
                        src={`${item.icon ?? ""}`}
                        width={100}
                        height={100}
                        alt="icon"
                        className={`w-[18px] h-[18px] filter grayscale brightness-125 contrast-[5%] 
                            dark:invert transition-all duration-100
                            group-hover:grayScaleActiveImage
                            ${isActivePath && "grayScaleActiveImage "}`}
                      />
                      <span
                        className={`text-read_2 font-medium  ${
                          isActivePath
                            ? "text-text-color_1"
                            : "text-text-color_4 group-hover:text-text-color_1"
                        }`}
                      >
                        {item.label}
                      </span>

                      {isActivePath && (
                        <div className="absolute top-1/2 -translate-y-1/2 w-[3.5px] h-[16px] bg-pm_purple-700 left-0 rounded-tablet"></div>
                      )}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
