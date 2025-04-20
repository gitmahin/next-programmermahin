"use client";
import React, { useEffect, useRef } from "react";
import { TutoListPopup } from "./tuto-list-popup";
import {
  TutorialEnums,
  TutorialNavItemType,
  TUTORIALS_ICON,
} from "@/constants";
import Image from "next/image";
import { setPagination } from "@/redux/tutorials/tutoPaginateSlice";
import { FlattenedTutorialChapter } from "@/types/flattened-tutorial-ch";
import { setMobSidebarOpen } from "@/redux/tutorials/mobSidebarOpen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import { setLockMouseEnter } from "@/redux/tutorials/tutoTabSlice";

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
    const lastPath = path_name.split("/").pop();
    localStorage.setItem(MEM_SLUG_NAME_LOCSTRG, lastPath ?? "");

    const el = lessons.current[lastPath ?? ""];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    if (!setPagination) return;

    const flattenDocs = (
      data: TutorialNavItemType
    ): FlattenedTutorialChapter[] => {
      const result: FlattenedTutorialChapter[] = [];

      for (const [, section] of Object.entries(data)) {
        section.items.forEach((item) => {
          result.push({
            label: item.label,
            slug: item.slug,
            path: `/${tutorialType}/${section.slug}/${item.slug}`,
          });
        });
      }

      return result;
    };

    if (!tutoData) return;

    const flatDocList = flattenDocs(tutoData);
    const currentIndex = flatDocList.findIndex(
      (navItem) => decodeURIComponent(path_name) === navItem.path
    );

    dispatch(setPagination({ currentIndex, flatTutoList: flatDocList }));

    // unlock tutoTab sidebar ui if path is in tutorial
    if (!setLockMouseEnter) return;
    dispatch(setLockMouseEnter(false));
  }, [path_name, tutoData]);

  useEffect(() => {
    const storedLastPath = localStorage.getItem(MEM_SLUG_NAME_LOCSTRG);

    const el = lessons.current[storedLastPath ?? ""];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [])

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
              className={`${tutorialType !== TutorialEnums.NEXTJS ? "w-[18px] h-[18px]" : "w-[65px]"}  filter brightness-0 dark:invert`}
            />

            {tutorialType !== TutorialEnums.NEXTJS && (
              <span className="text-read_2 text-pm_purple-700 font-medium ">
                {TUTORIALS_ICON[tutorialType as TutorialEnums]?.name ?? ""}
              </span>
            )}
          </div>
          <TutoListPopup />
        </div>
      </div>

      <div className="px-4 ">
        {Object.entries(tutoData || {}).map(([Key, value], i) => {
          const segments = path_name.split("/");
          return (
            <ul key={i} className="pb-4">
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
                  className={`text-read_2 one_line_ellipsis font-semibold font-geist_mono  uppercase ${path_name.split("/").includes(value.slug) ? "text-text-color_1" : "text-text-color_2"} `}
                >
                  {Key}
                </span>
              </div>
              <div className="leading-8 border-l border-border-color_800C pl-2 mt-4">
                {value.items.map((item, j) => {
                  const isActivePath = segments.includes(item.slug);
                  return (
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
    </>
  );
};
