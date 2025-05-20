"use client";
import React, { useEffect, useRef } from "react";
import { TutoListPopup } from "./tuto-list-popup";
import {
  TutorialChildNavItemType,
  TutorialDirChildNavItemType,
  TutorialNavItemType,
  TUTORIALS_ICON,
} from "@programmer/constants";
import Image from "next/image";
import { setPagination } from "@/redux/tutorials/tutoPaginateSlice";
import { FlattenedTutorialChapter } from "@/types/flattened-tutorial-ch";
import { setMobSidebarOpen } from "@/redux/tutorials/mobSidebarOpen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { setLockMouseEnter } from "@/redux/tutorials/tutoTabSlice";
import { TutorialEnums } from "@programmer/constants";
import { Accordion, AccordionItem } from "@programmer/ui";

const MEM_SLUG_NAME_LOCSTRG = "slug";
export const TutoSidebar = ({
  tutoData,
  tutorialType,
}: {
  tutoData: TutorialNavItemType;
  tutorialType: TutorialEnums;
}) => {
  const path_name = usePathname();
  const dispatch = useAppDispatch();
  const lessons = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    if (!setPagination) return;

    const flattenDocs = (
      data: TutorialNavItemType,
      basePath: string = `/${tutorialType}`
    ): FlattenedTutorialChapter[] => {
      const result: FlattenedTutorialChapter[] = [];

      const traverse = (
        items: any[],
        sectionSlug: string,
        parentPath: string
      ) => {
        for (const item of items) {
          const currentPath = `${parentPath}/${item.slug}`;

          // Always push the item (even if it only has dirItems)
          result.push({
            label: item.label,
            slug: item.slug,
            path: currentPath,
          });

          // If there are dirItems, push them too before recursing
          if (item.dirItems) {
            for (const [dirKey, dir] of Object.entries(item.dirItems)) {
              const typedDir = dir as TutorialDirChildNavItemType;
              const dirPath = `${currentPath}/${typedDir.slug}`;

              // Push the dir-level node (e.g., "k8s-pods")
              result.push({
                label: dirKey, // or use a separate "label" if it exists
                slug: typedDir.slug,
                path: dirPath,
              });

              // Traverse its items
              traverse(typedDir.items, typedDir.slug, dirPath);
            }
          }
        }
      };

      for (const [, section] of Object.entries(data)) {
        traverse(section.items, section.slug, `${basePath}/${section.slug}`);
      }

      return result;
    };

    if (!tutoData) return;

    const flatDocList = flattenDocs(tutoData);
    console.log("flatDocList", flatDocList);
    const currentIndex = flatDocList.findIndex(
      (navItem) => decodeURIComponent(path_name) === navItem.path
    );

    dispatch(setPagination({ currentIndex, flatTutoList: flatDocList }));

    // unlock tutoTab sidebar ui if path is in tutorial
    if (!setLockMouseEnter) return;
    dispatch(setLockMouseEnter(false));
  }, [path_name, tutoData]);

  useEffect(() => {
    const lastPath = path_name.split("/").pop();

    const el = lessons.current[lastPath ?? ""];
    setTimeout(() => {
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 300);
  }, [path_name, lessons, tutoData]);

  return (
    <>
      <div className="w-full px-4">
        <div className="flex justify-between items-center pb-4 border-t pt-4 border-border-color_800C">
          <div className="flex justify-start items-center gap-2">
            <Image
              src={`${TUTORIALS_ICON[tutorialType as TutorialEnums]?.svgPath ?? ""}`}
              width={100}
              height={100}
              alt="icon"
              className={`w-[18px] h-[18px] filter brightness-0 dark:invert`}
            />

            <span className="text-read_2 text-pm_purple-700 font-medium ">
              {TUTORIALS_ICON[tutorialType as TutorialEnums]?.name ?? ""}
            </span>
          </div>
          <TutoListPopup />
        </div>
      </div>

      <div className="px-4 ">
        {Object.entries(tutoData || {}).map(([Key, value], i) => {
          const segments = path_name.split("/");
          return (
            <ul key={i} className="pb-8">
              <div className="flex justify-start items-center gap-2">
                {value.icon && (
                  <Image
                    src={`${value.icon ?? ""}`}
                    width={100}
                    height={100}
                    alt="icon"
                    className="w-[18px] h-[18px] filter brightness-0 dark:invert"
                  />
                )}
                <span
                  className={`text-read_3 one_line_ellipsis font-semibold font-geist_mono uppercase ${path_name.split("/").includes(value.slug) ? "text-text-color_1" : "dark:text-text-color_2 text-text-color_3"} `}
                >
                  {Key}
                </span>
              </div>
              <div className={`leading-8 border-l  ${path_name.split("/").includes(value.slug) ? "border-purple-700":"border-border-color_800C"} pl-2 mt-2`}>
                {value.items.map((item, j) => {
                  const isActivePath =
                    segments.slice(-1).toString() === item.slug;
                  return (
                    <>
                      <Link
                        key={j}
                        ref={(el) => {
                          lessons.current[item.slug] = el;
                        }}
                        href={`/${tutorialType}/${value.slug}/${item.slug}`}
                        className="group"
                      >
                        <li
                          className={`relative px-3 py-0 rounded-tiny ${isActivePath && "bg-background-color_800C"} `}
                        >
                          <span
                            className={`one_line_ellipsis text-read_2 font-medium group-hover:text-text-color_1 ${isActivePath ? "text-text-color_1 font-semibold" : "text-text-color_4"}`}
                          >
                            {item.label}
                          </span>
                          {isActivePath && (
                            <div
                              className={`w-[3.5px] h-[16px] bg-pm_purple-700 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
                            ></div>
                          )}
                        </li>
                      </Link>

                      {item.dirItems &&
                        Object.entries(item.dirItems).map(
                          ([dirKey, childValue], j) => {
                            const isActivePathDir =
                              segments.slice(-1).toString() === childValue.slug;
                            return (
                              <div key={j}>
                                <Link
                                  ref={(el) => {
                                    lessons.current[childValue.slug] = el;
                                  }}
                                  href={`/${tutorialType}/${value.slug}/${item.slug}/${childValue.slug}`}
                                  className="group"
                                >
                                  <li
                                    className={`one_line_ellipsis text-read_2 font-medium group-hover:text-text-color_1 px-3 rounded-tiny py-0 ${isActivePathDir ? "bg-background-color_800C font-semibold relative text-text-color_1" : `${path_name.split("/").includes(childValue.slug) ? "text-text-color_1 font-semibold" : "text-text-color_4"}`}`}
                                  >
                                    <span>{dirKey}</span>
                                    {isActivePathDir && (
                                      <div
                                        className={`w-[3.5px] h-[16px] bg-pm_purple-700 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
                                      ></div>
                                    )}
                                  </li>
                                </Link>

                                <div
                                  className={`ml-3 pl-2 border-l ${
                                    path_name
                                      .split("/")
                                      .includes(childValue.slug) && !isActivePathDir
                                      ? "border-pm_purple-700"
                                      : "border-border-color_800C"
                                  }`}
                                >
                                  {childValue.items.map((subItem, k) => {
                                    const isActivePathSubItem =
                                      segments.slice(-1).toString() ===
                                      subItem.slug;
                                    return (
                                      <Link
                                        href={`/${tutorialType}/${value.slug}/${item.slug}/${childValue.slug}/${subItem.slug}`}
                                        key={k}
                                        className="group"
                                        ref={(el) => {
                                          lessons.current[subItem.slug] = el;
                                        }}
                                      >
                                        <li
                                          className={`px-3 py-0 relative rounded-tiny text-read_2  ${isActivePathSubItem ? "text-text-color_1 font-semibold bg-background-color_800C" : "font-medium text-text-color_4"}`}
                                        >
                                          <span>{subItem.label}</span>
                                          {isActivePathSubItem && (
                                            <div
                                              className={`w-[3.5px] h-[16px] bg-pm_purple-700 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
                                            ></div>
                                          )}
                                        </li>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          }
                        )}
                    </>
                  );
                })}
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
};
