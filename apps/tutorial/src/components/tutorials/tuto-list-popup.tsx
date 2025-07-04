"use client";
import { MAIN_NAV_TUTORIALS } from "@/constants";
import { DEVOPS_TUTORIALS } from "@programmer/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  setLockMouseEnter,
  setOpenTutoTab,
  setTutoTabDetails,
} from "@/redux/tutorials/tutoTabSlice";
import { getTutorialsByKey, TutorialEnums } from "@programmer/constants";
import {
  Dialog,
  DialogContent,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@programmer/ui";
import {
  BookOpenCheck,
  ChevronRight,
  Library,
  LockKeyholeIcon,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { TutorialNavItemType } from "@programmer/types";

interface TutoListPopupPropsType {
  showClickAbleTutoOpenBtn?: boolean;
}

export const TutoListPopup = ({
  showClickAbleTutoOpenBtn = true,
}: TutoListPopupPropsType) => {
  const path_name = usePathname();
  const [learningButtonURL, setLearningButtomURL] = useState("");
  const [openTutoNavSize, setOpenTutoNavSide] = useState(false);
  const queryParams = useSearchParams();
  const isOpenTutoTab = queryParams.get("tutoTab");
  const tutoTab = useAppSelector((state) => state.tutoTab);
  const lockMouseEnter = tutoTab.lock;
  const open = tutoTab.open;
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (isOpenTutoTab === "1") {
        handleOpenTutoTab();
      }
    }, 300);
  }, []);

  const handleMouseEnter = (tutorialtype: string, tutoName: string) => {
    if (!lockMouseEnter) {
      if (!setTutoTabDetails) return;
      dispatch(
        setTutoTabDetails({
          data: getTutorialsByKey[
            tutorialtype as TutorialEnums
          ] as TutorialNavItemType,
          activeKey: tutorialtype,
          tutorialName: tutoName,
        })
      );
    }
  };

  // getting the first key from the data object, so that on click start learning user can go to the intro of the course
  useEffect(() => {
    const firstEntry = Object.entries(tutoTab.data)[0];

    if (firstEntry) {
      const [key, value] = firstEntry;
      const firstItemSlug = value.items?.[0]?.slug;

      if (key && value.slug && firstItemSlug) {
        setLearningButtomURL(
          `/${tutoTab.activeKey}/${value.slug}/${firstItemSlug}`
        );
      }
    }
  }, [tutoTab, handleMouseEnter]);

  // This function handles changes in the open state of a tutorial tab for dialog onOpenChange
  const handleOpenChange = (value: boolean) => {
    if (!setOpenTutoTab) return;
    // Dispatch an action to update the open state in Redux
    dispatch(setOpenTutoTab(value));
  };

  // open tutorial selector tab on click
  const handleOpenTutoTab = () => {
    if (!setOpenTutoTab) return;
    dispatch(setOpenTutoTab(true));
  };

  // if start learning button clicked close the tutorial selector tab
  const handleStartLrnButtonClicked = () => {
    if (!setOpenTutoTab) return;
    if (path_name === learningButtonURL) {
      dispatch(setOpenTutoTab(false));
    }
  };

  // on path change close the tutorial selector tab
  useEffect(() => {
    if (!setOpenTutoTab) return;
    dispatch(setOpenTutoTab(false));
  }, [path_name]);

  // unlock mouse enter if locked
  const UnlockOnMouseEnter = () => {
    if (!setLockMouseEnter) return;
    dispatch(setLockMouseEnter(false));
    toast.success("UI Unlocked");
  };

  useEffect(() => {
    setOpenTutoNavSide(false);
  }, [tutoTab.activeKey]);

  const countLessonsInChapter = (chapter: TutorialNavItemType[string]) => {
    return (
      chapter.items?.reduce((total, item) => {
        // If this item has dirItems, it's a subchapter — sum up lessons inside each dir
        if (item.dirItems) {
          const dirLessons = Object.values(item.dirItems).reduce(
            (dirTotal, dirItem) => {
              return dirTotal + (dirItem.items?.length || 0);
            },
            0
          );
          return total + dirLessons;
        }
        // Otherwise, it's a normal lesson
        return total + 1;
      }, 0) || 0
    );
  };

  const countChapters = (tutorials: typeof DEVOPS_TUTORIALS) => {
    let count = 0;

    for (const chapterKey in tutorials) {
      count++; // count top-level chapter

      const chapter = tutorials[chapterKey];

      if (chapter?.items) {
        chapter.items.forEach((item) => {
          if (item.dirItems) {
            count += Object.keys(item.dirItems).length; // add nested chapters count
          }
        });
      }
    }

    return count;
  };

  return (
    <>
      {showClickAbleTutoOpenBtn && (
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={handleOpenTutoTab}
              className="flex justify-center items-center w-[25px] h-[25px] active:border-pm_purple-700 active:border flex-shrink-0 hover:bg-background-color_800C rounded-tiny cursor-pointer"
            >
              <Library
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Library</p>
          </TooltipContent>
        </Tooltip>
      )}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="p-2 outline-none overflow-hidden  max-w-[700px] h-[500px] w-full">
          <div className="w-full h-full overflow-hidden flex justify-center items-center bg-background-color_950C border-border-color_800C relative border rounded">
            <PMButton
              onClick={() => setOpenTutoNavSide(!openTutoNavSize)}
              variant="secondary"
              className="w-[30px] h-[30px] justify-center items-center hidden open_tuto_nav_btn absolute z-[999] top-1 left-1"
              radius="tiny"
            >
              {/* fix the typo it should be Side not Size */}
              {openTutoNavSize ? (
                <PanelRightOpen
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className={` ${openTutoNavSize ? "text-text-color_1" : "text-text-svg_default_color"}`}
                />
              ) : (
                <PanelRightClose
                  size={LUCIDE_DEFAULT_ICON_SIZE}
                  className={`text-text-svg_default_color`}
                />
              )}
            </PMButton>
            <div
              className={`flex-shrink-0 transition-all w-[240px] h-full border-r bg-background-color_900C border-border-color_800C p-4 relative tuto_popup_tab_navbar ${openTutoNavSize && "tuto_popup_tab_navbar_open"}`}
            >
              {/* <div className="w-[15px] h-full absolute left-full top-0 border border-solid box-border border-l-0 border-r-1 border-b-0 border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div> */}

              <ul className="leading-8 tuto_side_nav_list">
                {MAIN_NAV_TUTORIALS.map((item, i) => {
                  return (
                    <li
                      onClick={() => handleMouseEnter(item.key, item.label)}
                      key={i}
                      className={`flex cursor-pointer  relative group transition-colors duration-150 select-none rounded-tiny justify-start items-center gap-3 px-3 py-1 ${tutoTab.activeKey === item.key ? item.bg_color : "hover:bg-background-color_800C"}`}
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src={`${item.icon ?? ""}`}
                          width={250}
                          height={250}
                          alt="icon"
                          priority
                          className={`w-[20px] h-[20px] select-none 
                            filter grayscale brightness-125 contrast-[5%] 
                            dark:invert
                            transition-all duration-100
                            ${
                              tutoTab.activeKey === item.key &&
                              "grayScaleActiveImage group-hover:grayScaleActiveImage"
                            }
                            `}
                        />
                      </div>
                      <span
                        className={`text-read_1  ${tutoTab.activeKey === item.key ? "group-hover:text-text-color_1" : "text-text-color_4"}  font-medium`}
                      >
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {lockMouseEnter && (
                <PMButton
                  variant="secondary"
                  className="overflow-hidden bg-background-color_900C hover:bg-background-color_900C  w-fit outline-none absolute bottom-4 cursor-pointer rounded-tablet h-[25px] flex justify-center items-center"
                >
                  <div
                    onClick={UnlockOnMouseEnter}
                    className="w-fit px-[5px] pl-[8px] h-full hover:bg-background-color_800C flex justify-center items-center"
                  >
                    <LockKeyholeIcon
                      size={15}
                      className="text-text-svg_default_color"
                    />
                  </div>
                  <div className="text-[12px] h-full pr-[8px] px-1 hover:bg-background-color_800C font-medium text-text-color_2 flex justify-center items-center">
                    UI Locked
                  </div>
                </PMButton>
              )}
            </div>
            {tutoTab.activeKey ? (
              <div className="w-full h-full overflow-y-auto tuto_tab_content  overflow-x-hidden">
                <div className=" h-full">
                  <div className="sticky z-[1] py-4 px-5 top-0 backdrop-blur-lg course_ovw rounded-tr-[7px]">
                    <span className="flex justify-center items-center px-2 py-[1px] font-medium font-geist_mono rounded-tablet bg-background-color_900C border border-border-color_800C w-fit text-[12px] text-text-color_2 ">
                      Course Overview
                    </span>
                  </div>
                  <div>
                    <div className="mt-1 px-5">
                      <h2 className="font-medium text-[25px] text-text-color_1">
                        {tutoTab.tutorialName} Tutorial
                      </h2>
                      <div className="mt-5 flex justify-start items-center">
                        <div className="border-r flex flex-col items-center w-fit pr-3 border-border-color_800C">
                          <span className="text-[25px]">
                            {countChapters(tutoTab.data)}
                          </span>
                          <span className="text-[12px] text-text-color_2">
                            Chapters
                          </span>
                        </div>
                        <div className=" flex flex-col items-center w-fit pl-3">
                          <span className="text-[25px]">
                            {Object.values(tutoTab.data).reduce(
                              (acc, chapter) =>
                                acc + countLessonsInChapter(chapter),
                              0
                            )}
                          </span>
                          <span className="text-[12px] text-text-color_2">
                            Lessons
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-read_1 px-5 border-t border-border-color_800C pt-5  flex justify-start items-center gap-2 mt-5">
                      <div>
                        <BookOpenCheck
                          size={LUCIDE_DEFAULT_ICON_SIZE}
                          className="text-text-svg_default_color"
                        />
                      </div>
                      <span className="text-text-color_3">
                        What will you learn?
                      </span>
                    </div>
                    <div className="pb-16 px-5">
                      {Object.entries(tutoTab.data).map(([key, value], i) => {
                        return (
                          <Accordion type="single" collapsible key={i}>
                            <AccordionItem
                              value="item-1"
                              className="border-border-color_800C"
                            >
                              <AccordionTrigger className="text-read_2 ">
                                {key}
                              </AccordionTrigger>
                              {value.items.map((item, vi) => {
                                return (
                                  <AccordionContent
                                    className="pl-5 one_line_ellipsis  text-read_2"
                                    key={vi}
                                  >
                                    <span className="text-text-color_4">
                                      {item.label}
                                    </span>
                                    {item.dirItems &&
                                      Object.entries(item.dirItems).map(
                                        ([dirKey, childValue], di) => {
                                          return (
                                            <div>
                                              <Accordion
                                                type="single"
                                                collapsible
                                                key={di}
                                              >
                                                <AccordionItem
                                                  value="item-1"
                                                  className="border-border-color_800C"
                                                >
                                                  <AccordionTrigger className="text-read_2 text-text-color_1 pt-0">
                                                    {dirKey}
                                                  </AccordionTrigger>

                                                  {childValue.items.map(
                                                    (childItem, j) => {
                                                      return (
                                                        <AccordionContent
                                                          className="pl-5  one_line_ellipsis  text-read_2"
                                                          key={j}
                                                        >
                                                          <span className="text-text-color_4">
                                                            {childItem.label}
                                                          </span>
                                                        </AccordionContent>
                                                      );
                                                    }
                                                  )}
                                                </AccordionItem>
                                              </Accordion>
                                            </div>
                                          );
                                        }
                                      )}
                                  </AccordionContent>
                                );
                              })}
                            </AccordionItem>
                          </Accordion>
                        );
                      })}
                    </div>
                    <Link href={`${learningButtonURL}`}>
                      <PMButton
                        onClick={handleStartLrnButtonClicked}
                        radius="tiny"
                        className="px-3 py-1  outline-none text-text-zinc_white font-medium absolute bottom-3 right-3 transition-colors"
                      >
                        <span className="text-read_2">Start Learning</span>
                      </PMButton>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setOpenTutoNavSide(true)}
                className="w-full h-full flex justify-center items-center"
              >
                <p className="text-text-color_2">Choose a Tutorial To start</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
