"use client";
import { DEVELOPER_DOCS_DATA } from "@/constants/developer-docs-data";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getDeveloperDocsFlatData } from "@/lib";
import { isSidebarOpenSelector } from "@/redux/sidebar/sidebarSlice";
import { setPagination } from "@programmer/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export const Sidebar = () => {
  const path_name = usePathname();
  const isSidebarOpen = useAppSelector(isSidebarOpenSelector);
  const dispatch = useAppDispatch()

  const dataForPagination = getDeveloperDocsFlatData

  useEffect(() => {
    const currentIndex = dataForPagination.findIndex(
      (navItem) => decodeURIComponent(path_name) === navItem.path
    );
    if(!setPagination) return
    dispatch(setPagination({currentIndex, dataList: dataForPagination}))
  }, [dataForPagination, path_name]);

  return (
    <aside
      className={`w-[300px] border-r max-[1290px]:w-[280px] max-[1290px]:p-2  bg-background-color_925C border-border-color_800C h-[calc(100vh-50px)] fixed bottom-0 left-0 z-30 pt-5 px-5 overflow-y-auto ${isSidebarOpen ? "max-[1290px]:left-0" : "max-[1290px]:left-[-100%]"}`}
    >
      <nav>
        {Object.entries(DEVELOPER_DOCS_DATA).map(([Key, value], i) => {
          return (
            <div key={i} className="mb-8 text-read_1">
              <p className="font-medium one_line_ellipsis text-text-color_3">{Key}</p>
              <div className=" leading-8">
                {value.items.map((item, j) => {
                  return (
                    <div key={j}>
                      <Link
                        href={`/${value.slug}/${item.slug}`}
                        className="text-text-color_2"
                      >
                        <span
                          className={`one_line_ellipsis rounded-tiny pl-4 px-2 ${path_name.endsWith(item.slug) ? "text-white bg-pm_purple-700 font-medium" : ""}`}
                        >
                          {item.label}
                        </span>
                      </Link>
                      <div >
                        {item.siblingOneItems?.map((siblingOneItem, k) => {
                          return (
                            <div key={k}>
                              <Link
                                href={`/${value.slug}/${item.slug}/${siblingOneItem.siblingOneSlug}`}
                                   className="text-text-color_2"
                              >
                                <span
                                  className={`one_line_ellipsis pl-7 rounded-tiny px-2 ${path_name.endsWith(siblingOneItem.siblingOneSlug) ? "text-white bg-pm_purple-700 font-medium" : ""}`}
                                >
                                  {siblingOneItem.siblingOneLabel}
                                </span>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
