"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { QUICKLEARN_TUTORIALS } from "@programmer/constants";
import { PaginateStoreDataType, paginationStore } from "@programmer/shared";
import { GeneralNavItemType } from "@programmer/types";

export const QuickLearnNavList = () => {
  const [quickLearnNavItems, setQuickLearnNavitems] = useState<GeneralNavItemType[]>([])
  const path_name = usePathname();

  useEffect(() => {

    if (path_name.endsWith("/quick-learn")) {
      setQuickLearnNavitems([])
    } else {
     setQuickLearnNavitems(QUICKLEARN_TUTORIALS)
    }

    const data = QUICKLEARN_TUTORIALS.map((item, _) => {
      return {
        label: item.label,
        path: item.slug,
      };
    });

    const quickLearnPathName = path_name.split("/").pop();

    const currentIndex = data.findIndex((navItem) =>
      quickLearnPathName !== undefined
        ? decodeURIComponent(quickLearnPathName) === navItem.path
        : -1
    );

    paginationStore.setPagination(currentIndex, data as PaginateStoreDataType[])
  }, [path_name]);

  return (
    <>
      {quickLearnNavItems.length > 0 && (
        <div className="px-4 w-full">
          <div className="w-full border-t border-border-color_800C py-4 ">
            <ul className="leading-8">
              {quickLearnNavItems.map((item, i) => {
                const isActivePath = path_name.includes(`${item.slug}`);
                return (
                  <Link key={i} href={`${item.slug}`} className="group">
                    <li
                      className={`list-none relative flex justify-start items-center gap-3 px-3 py-1 transition-colors duration-150 `}
                    >
                      <div className={`border rounded-tiny  border-border-color_800C w-[40px] h-[40px] bg-background-color_800C flex justify-center items-center ${isActivePath && "bg-background-tsp-purple_650C"} flex-shrink-0`}>

                      <Image
                        src={`/icons/${item.icon ?? ""}`}
                        width={100}
                        height={100}
                        alt="icon"
                        className={`w-[18px] h-[18px] filter grayscale brightness-125 contrast-[5%] 
                          dark:invert transition-all duration-100
                          group-hover:grayScaleActiveImage
                          ${isActivePath && "grayScaleActiveImage "}`}
                          />
                          </div>
                      <div
                        className={`text-read_2 font-medium leading-normal  ${
                          isActivePath
                            ? "text-text-color_1"
                            : "text-text-color_4 group-hover:text-text-color_1"
                        }`}
                      >
                        {item.label}
                        <p className="two_line_ellipsis w-full text-[11px] text-text-color_3 leading-tight">
                        {item.desc}

                        </p>
                      </div>

                      {isActivePath && (
                        <div className="absolute top-1/2 -translate-y-1/2 w-[3.5px] h-[16px] bg-pm_purple-600 left-0 rounded-tablet"></div>
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
