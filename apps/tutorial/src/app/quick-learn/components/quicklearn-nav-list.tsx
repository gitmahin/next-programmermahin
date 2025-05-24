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
          <div className="w-full border-t border-border-color_800C py-4">
            {quickLearnNavItems.map((item, i) => {
              return (
                <Link key={i} href={`${item.slug}`} className="group">
                  <li className="list-none flex justify-start items-center gap-2 px-4 group-hover:bg-background-color_800C py-1 rounded-tiny transition-colors duration-150">
                    <Image
                      src={`${item.icon ?? ""}`}
                      width={100}
                      height={100}
                      alt="icon"
                      className={`w-[18px] h-[18px] filter grayscale brightness-125 contrast-[5%] 
                        dark:invert transition-all duration-100
                        group-hover:grayScaleActiveImage
                        ${
                            path_name
                            .split("/")
                            .includes(
                                `${item.slug}`
                            ) &&
                            "grayScaleActiveImage "
                        }`}
                    />
                    <span
                      className={`text-read_2 font-medium text-text-color_4 group-hover:text-text-color_1`}
                    >
                      {item.label}
                    </span>
                  </li>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
