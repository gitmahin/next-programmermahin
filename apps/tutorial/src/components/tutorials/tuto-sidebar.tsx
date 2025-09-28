"use client";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TutoListPopup } from "./tuto-list-popup";
import { TUTORIALS_ICON } from "@programmer/constants";
import Image from "next/image";

import { FlattenedTutorialChapter } from "@/types/flattened-tutorial-ch";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TutorialEnums } from "@programmer/constants";
import { LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import {  ChevronRight } from "lucide-react";
import {
  TutorialNavCoreItemsType,
  TutorialNavItemType,
} from "@programmer/types";
import { PaginateStoreDataType, paginationStore } from "@programmer/shared";
import { tutoTabStore } from "@/services/store";

export const TutoSidebar = ({
  tutoData,
  tutorialType,
}: {
  tutoData: TutorialNavItemType;
  tutorialType: TutorialEnums;
}) => {
  const path_name = usePathname();
  const lessons = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const dirChildRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const openDirChild = useCallback(
    (slug: string, onlyOpen: boolean = false) => {
      const el = dirChildRef.current[slug];
      if (!el) return;

      const opened = isOpen[slug];

      if (onlyOpen) {
        // Only open if not already open
        if (!opened) {
          el.style.height = "100%";
          setIsOpen((prev) => ({
            ...prev,
            [slug]: true,
          }));
        }
      } else {
        // Toggle open/close
        el.style.height = opened ? "0px" : "100%";
        setIsOpen((prev) => ({
          ...prev,
          [slug]: !opened,
        }));
      }
    },
    [isOpen]
  );

  useEffect(() => {
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
          if (item.slug) {
            result.push({
              label: item.label,
              path: currentPath,
            });
          }
          // If there are dirItems, push them too before recursing
          if (item.dirItems) {
            for (const [dirKey, dir] of Object.entries(item.dirItems)) {
              const typedDir = dir as TutorialNavCoreItemsType;
              const dirPath = `${parentPath}/${typedDir.slug}`;

              // Push the dir-level node (e.g., "k8s-pods")
              result.push({
                label: dirKey, // or use a separate "label" if it exists
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
    const currentIndex = flatDocList.findIndex(
      (navItem) => decodeURIComponent(path_name) === navItem.path
    );

    paginationStore.setPagination(
      currentIndex,
      flatDocList as PaginateStoreDataType[]
    );

    // unlock tutoTab sidebar ui if path is in tutorial
    tutoTabStore.setLockMouseEnter(false)
  }, [path_name, tutoData, tutorialType]);

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

  useEffect(() => {
    const lastPath = path_name.split("/").slice(-2, -1).toString();
    openDirChild(lastPath ?? "", true);
  }, [path_name, openDirChild]);

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

            <span className="text-read_2 text-pm_purple-600 font-medium ">
              {TUTORIALS_ICON[tutorialType as TutorialEnums]?.name ?? ""}
            </span>
          </div>
          <Suspense>
            <TutoListPopup />
          </Suspense>
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
                    className={`w-[18px] h-[18px] filter grayscale brightness-125 contrast-[5%] 
                            dark:invert transition-all duration-100
                            ${
                              path_name.split("/").includes(value.slug) &&
                              "grayScaleActiveImage group-hover:grayScaleActiveImage"
                            }`}
                  />
                )}
                <span
                  className={`text-read_3 one_line_ellipsis font-semibold font-geist_mono uppercase ${path_name.split("/").includes(value.slug) ? "text-text-color_1" : "dark:text-text-color_2 text-text-color_3"} `}
                >
                  {Key}
                </span>
              </div>
              <div
                className={`leading-8 border-l ${path_name.split("/").includes(value.slug) ? "border-purple-700" : "border-border-color_800C"} pl-2 mt-2`}
              >
                {value.items.map((item, j) => {
                  const isActivePath =
                    segments.slice(-1).toString() === item.slug;
                  return (
                    <React.Fragment key={j}>
                      <Link
                        key={j}
                        ref={(el) => {
                          lessons.current[item.slug ?? ""] = el;
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
                              className={`w-[3.5px] h-[16px] bg-pm_purple-600 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
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
                              <div key={`${i}-${j}`}>
                                <Link
                                  ref={(el) => {
                                    lessons.current[childValue.slug] = el;
                                  }}
                                  href={`/${tutorialType}/${value.slug}/${childValue.slug}`}
                                  className="group"
                                >
                                  <li
                                    onClick={() =>
                                      openDirChild(childValue.slug, true)
                                    }
                                    className={`flex justify-between items-center text-read_2 font-medium group-hover:text-text-color_1 pl-3 rounded-tiny py-0 ${isActivePathDir ? "bg-background-color_800C font-semibold relative text-text-color_1" : `${path_name.split("/").includes(childValue.slug) ? "text-text-color_1 font-semibold" : "text-text-color_4"}`}`}
                                  >
                                    <span className="one_line_ellipsis">
                                      {dirKey}
                                    </span>

                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        openDirChild(childValue.slug);
                                      }}
                                      className={` h-[25px] rounded-[5px] w-[25px] mr-1 transition-colors  ${isActivePathDir ? "hover:bg-background-color_900C" : "hover:bg-background-color_800C"} flex justify-center items-center`}
                                    >
                                      <ChevronRight
                                        size={LUCIDE_DEFAULT_ICON_SIZE}
                                        className={`transition-all duration-300 ${isOpen[childValue.slug] ? "text-text-color_1 rotate-90" : "text-text-svg_default_color"}`}
                                      />
                                    </button>

                                    {isActivePathDir && (
                                      <div
                                        className={`w-[3.5px] h-[16px] bg-pm_purple-600 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
                                      ></div>
                                    )}
                                  </li>
                                </Link>

                                <div
                                  ref={(el) => {
                                    dirChildRef.current[childValue.slug] = el;
                                  }}
                                  style={{ height: "0px" }}
                                  className={`ml-3 pl-2 border-l overflow-hidden  ${
                                    path_name
                                      .split("/")
                                      .includes(childValue.slug) &&
                                    !isActivePathDir
                                      ? "border-pm_purple-600"
                                      : "border-border-color_800C"
                                  }`}
                                >
                                  {childValue.items.map((subItem, k) => {
                                    const isActivePathSubItem =
                                      segments.slice(-1).toString() ===
                                      subItem.slug;
                                    return (
                                      <Link
                                        href={`/${tutorialType}/${value.slug}/${childValue.slug}/${subItem.slug}`}
                                        key={`${i}-${j}-${k}`}
                                        className="group"
                                        ref={(el) => {
                                          lessons.current[subItem.slug ?? ""] =
                                            el;
                                        }}
                                      >
                                        <li
                                          className={`px-3 py-0 relative one_line_ellipsis rounded-tiny text-read_2  ${isActivePathSubItem ? "text-text-color_1 font-semibold bg-background-color_800C" : "font-medium text-text-color_4"}`}
                                        >
                                          <span>{subItem.label}</span>
                                          {isActivePathSubItem && (
                                            <div
                                              className={`w-[3.5px] h-[16px] bg-pm_purple-600 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
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

                      {item.group &&
                        Object.entries(item.group).map(([gKey, gValue], gi) => {
                          return (
                            <div key={`${i}-${gi}`}>
                              <span className="text-read_3 font-medium text-text-color_2 pl-3 uppercase one_line_ellipsis">
                                {gKey}
                              </span>
                              <div className="pl-5">
                                {gValue.dirItems &&
                                  Object.entries(gValue.dirItems).map(
                                    ([dKey, dvalue], di) => {
                                      const isActivePathDir =
                                        segments.slice(-1).toString() ===
                                        dvalue.slug;
                                      return (
                                        <div key={`${gi}-${di}`}>
                                          <Link
                                            ref={(el) => {
                                              lessons.current[dvalue.slug] = el;
                                            }}
                                            href={`/${tutorialType}/${value.slug}/${dvalue.slug}`}
                                            className="group"
                                          >
                                            <li
                                              onClick={() =>
                                                openDirChild(dvalue.slug, true)
                                              }
                                              className={`flex justify-between items-center text-read_2 font-medium group-hover:text-text-color_1 pl-3 rounded-tiny py-0 ${isActivePathDir ? "bg-background-color_800C font-semibold relative text-text-color_1" : `${path_name.split("/").includes(dvalue.slug) ? "text-text-color_1 font-semibold" : "text-text-color_4"}`}`}
                                            >
                                              <span className="one_line_ellipsis">
                                                {dKey}
                                              </span>

                                              <button
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  openDirChild(dvalue.slug);
                                                }}
                                                className={` h-[25px] rounded-[5px] w-[25px] mr-1 transition-colors  ${isActivePathDir ? "hover:bg-background-color_900C" : "hover:bg-background-color_800C"} flex justify-center items-center`}
                                              >
                                                <ChevronRight
                                                  size={
                                                    LUCIDE_DEFAULT_ICON_SIZE
                                                  }
                                                  className={`transition-all duration-300 ${isOpen[dvalue.slug] ? "text-text-color_1 rotate-90" : "text-text-svg_default_color"}`}
                                                />
                                              </button>

                                              {isActivePathDir && (
                                                <div
                                                  className={`w-[3.5px] h-[16px] bg-pm_purple-600 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
                                                ></div>
                                              )}
                                            </li>
                                          </Link>

                                          <div
                                            ref={(el) => {
                                              dirChildRef.current[dvalue.slug] =
                                                el;
                                            }}
                                            style={{ height: "0px" }}
                                            className={`ml-3 pl-2 border-l overflow-hidden  ${
                                              path_name
                                                .split("/")
                                                .includes(dvalue.slug) &&
                                              !isActivePathDir
                                                ? "border-pm_purple-600"
                                                : "border-border-color_800C"
                                            }`}
                                          >
                                            {dvalue.items.map((subItem, ki) => {
                                              const isActivePathSubItem =
                                                segments
                                                  .slice(-1)
                                                  .toString() === subItem.slug;
                                              return (
                                                <Link
                                                  href={`/${tutorialType}/${value.slug}/${dvalue.slug}/${subItem.slug}`}
                                                  key={`${i}-${gi}-${ki}`}
                                                  className="group"
                                                  ref={(el) => {
                                                    lessons.current[
                                                      subItem.slug ?? ""
                                                    ] = el;
                                                  }}
                                                >
                                                  <li
                                                    className={`px-3 py-0 relative one_line_ellipsis rounded-tiny text-read_2  ${isActivePathSubItem ? "text-text-color_1 font-semibold bg-background-color_800C" : "font-medium text-text-color_4"}`}
                                                  >
                                                    <span>{subItem.label}</span>
                                                    {isActivePathSubItem && (
                                                      <div
                                                        className={`w-[3.5px] h-[16px] bg-pm_purple-600 rounded-tablet transition-all duration-300 absolute left-0 top-1/2 -translate-y-1/2`}
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
                              </div>
                            </div>
                          );
                        })}
                    </React.Fragment>
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
