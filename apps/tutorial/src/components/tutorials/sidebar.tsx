"use client";
import { TUTORIALS_ICON, MAIN_NAV_LINKS, TutorialEnums } from "@/constants";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton, PMLogo } from "@programmer/ui";
import { ChevronDown, Contrast, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@programmer/ui";
import { TutorialNavItemType } from "@/constants/tutorials/type";
import MainNavs from "../main-navs";
import { TutoListPopup } from "./tuto-list-popup";
import { FlattenedTutorialChapter } from "@/types/flattened-tutorial-ch";
import { setPagination } from "@/redux/tutorials/tutoPaginateSlice";
import { setMobSidebarOpen } from "@/redux/tutorials/mobSidebarOpen";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";

export const Sidebar = () => {
  const path_name = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [tutoData, setTutoData] = useState<TutorialNavItemType | null>(null);
  const [isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const mobSidebarOpen = useAppSelector((state) => state.mobSidebarOpen.open)
  

    const handleSidebarOff = () => {
      if(!setMobSidebarOpen) return
      dispatch(setMobSidebarOpen(false))
    }
  // get the tutorial chapter data from redux
  const TUTORIAL_CHAPTERS = useAppSelector(
    (state) => state.tutoChapters.value
  );
  // get tutorial type from redux
  const tutorialType = useAppSelector(
    (state) => state.tutoChapters.type
  );

  const toggleTheme = () => {
    if (theme === "dark" || resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const hasMatch = Object.values(TutorialEnums).some((enumValue) =>
    path_name.includes(enumValue)
  );

  useEffect(() => {
    if (!TUTORIAL_CHAPTERS && !hasMatch) return;
    startTransition(() => {
      setTutoData(TUTORIAL_CHAPTERS);
    });
  }, [TUTORIAL_CHAPTERS]);

  useEffect(() => {
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

    console.log(flattenDocs(tutoData));

    const flatDocList = flattenDocs(tutoData);
    const currentIndex = flatDocList.findIndex(
      (navItem) => decodeURIComponent(path_name) === navItem.path
    );

    dispatch(setPagination({ currentIndex, flatTutoList: flatDocList }));
  }, [path_name, tutoData]);

  return (
    <nav className={`w-[280px] z-50 transition-all border-r border-border-color_800C bg-background-color_900C h-screen fixed left-0 top-0 tutosidebar ${mobSidebarOpen ? "openTutoSidebar": ""}`}>
      <div className="w-[20px] h-screen absolute left-full top-0 border border-solid box-border border-l-0 border-r-1 border-b-0 border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div>

      <div className="w-full border-b relative border-border-color_800C px-4 py-3 flex justify-between items-center">
        <PMLogo size="sm" />
        <div className="w-fit h-[30px] overflow-hidden rounded-tablet flex justify-between items-center border border-border-color_800C cursor-pointer">
          <div
            onClick={toggleTheme}
            className="flex-shrink-0 h-full px-[6px] hover:bg-background-color_800C flex justify-center items-center"
          >
            {theme !== "system" ? (
              <>
                <Moon
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color dark:block hidden"
                />
                <Sun
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color dark:hidden"
                />
              </>
            ) : (
              <Contrast
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color"
              />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full outline-none">
              <div className="px-1 h-full flex justify-center items-center hover:bg-background-color_800C">
                <ChevronDown
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="group hover:bg-background-color_800C py-1 rounded-tiny"
                onClick={() => setTheme("system")}
              >
                <Contrast
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className="text-text-svg_default_color group-hover:text-text-color_1"
                />
                <span className="text-text-color_4 text-read_2 group-hover:text-text-color_1">
                  System
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <PMButton onClick={handleSidebarOff} variant="secondary" className="w-[25px] h-[25px] absolute hidden showSidebarClose justify-center items-center right-[-32px] group hover:border hover:border-border-color_800C top-1/2 -translate-y-1/2" radius="tiny">
        <X size={LUCIDE_DEFAULT_ICON_SIZE} className=" flex justify-center items-center text-text-color_1  " />
        </PMButton>
      </div>
      <div className="px-4 py-4">
        <ul className="leading-8">
          {MAIN_NAV_LINKS.map((item, i) => {
            const segments = path_name.split("/").filter(Boolean);
            return (
              <Link href={`/${item.slug ?? "#"}`} key={i}>
                <li className="flex justify-start items-center gap-2 group">
                  <div
                    className={`border rounded-tiny group-hover:text-text-color_1 border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C ${segments.includes(item.slug) ? "bg-gradient-to-tr from-pm_purple-900 to-pm_purple-700 text-text-zinc_white" : "text-text-svg_default_color"}`}
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
      </div>

      {hasMatch ? (
        <>
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <>
              {tutoData !== null && (
                <>
<div className="w-full px-4 ">

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
                          {TUTORIALS_ICON[tutorialType as TutorialEnums]
                            ?.name ?? ""}
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
              )}
            </>
          )}
        </>
      ) : (
        <MainNavs />
      )}
    </nav>
  );
};
