"use client";
import {
  getTutorialsByKey,
  MAIN_NAV_TUTORIALS,
  TutorialEnums,
} from "@/constants";
import { TutorialNavItemType } from "@/constants/tutorials/type";
import { RootState } from "@/redux/store";
import {
  setLockMouseEnter,
  setOpenTutoTab,
  setTutoTabDetails,
} from "@/redux/tutorials/tutoTabSlice";
import {
  Dialog,
  DialogContent,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@programmer/ui";
import {
  ArrowRight,
  BookOpenCheck,
  ChevronRight,
  LockIcon,
  LockKeyholeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

interface TutoListPopupPropsType {
  showClickAbleTutoOpenBtn?: boolean;
}

export const TutoListPopup = ({
  showClickAbleTutoOpenBtn = true,
}: TutoListPopupPropsType) => {
  const path_name = usePathname();
  const [learningButtonURL, setLearningButtomURL] = useState("");

  // redux values
  const data = useSelector((state: RootState) => state.tutoTab.data);
  const activeKey = useSelector((state: RootState) => state.tutoTab.activeKey);
  const tutorialName = useSelector(
    (state: RootState) => state.tutoTab.tutorialName
  );
  const lockMouseEnter = useSelector((state: RootState) => state.tutoTab.lock);
  const open = useSelector((state: RootState) => state.tutoTab.open);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const firstEntry = Object.entries(data)[0];

    if (firstEntry) {
      const [key, value] = firstEntry;
      const firstItemSlug = value.items?.[0]?.slug;

      if (key && value.slug && firstItemSlug) {
        setLearningButtomURL(`/${activeKey}/${value.slug}/${firstItemSlug}`);
      }
    }
  }, [data, activeKey, handleMouseEnter]);

  const handleOpenChange = (value: boolean) => {
    if (!setOpenTutoTab) return;
    dispatch(setOpenTutoTab(value));
  };

  const handleOpenTutoTab = () => {
    if (!setOpenTutoTab) return;
    dispatch(setOpenTutoTab(true));
  };

  const handleStartLrnButtonClicked = () => {
    if (!setOpenTutoTab) return;
    if (path_name === learningButtonURL) {
      dispatch(setOpenTutoTab(false));
    }
  };

  useEffect(() => {
    if (!setOpenTutoTab) return;
    dispatch(setOpenTutoTab(false));
  }, [path_name]);

  const UnlockOnMouseEnter = () => {
    if (!setLockMouseEnter) return;
    dispatch(setLockMouseEnter(false));
    toast.success("UI Unlocked")
  }

  return (
    <>
      {showClickAbleTutoOpenBtn && (
        <div
          onClick={handleOpenTutoTab}
          className="flex justify-center items-center w-[25px] h-[25px] active:border-pm_purple-700 active:border flex-shrink-0 hover:bg-background-color_800C rounded-tiny cursor-pointer"
        >
          <ChevronRight
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-svg_default_color"
          />
        </div>
      )}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="bg-background-color_950C outline-none overflow-hidden border-border-color_800C border max-w-[700px] h-[500px] w-full">
          <div className="w-full h-full overflow-hidden flex justify-center items-center">
            <div className="flex-shrink-0 w-[240px] h-full border-r bg-background-color_925C border-border-color_800C p-4 relative">
              <div className="w-[15px] h-full absolute left-full top-0 border border-solid box-border border-l-0 border-r-1 border-b-0 border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div>

              <ul className="leading-10">
                {MAIN_NAV_TUTORIALS.map((item, i) => {
                  return (
                    <li
                      onMouseEnter={() =>
                        handleMouseEnter(item.key, item.label)
                      }
                      key={i}
                      className={`flex relative transition-colors duration-150 select-none rounded-tiny justify-start items-center gap-3 px-3 py-1 ${activeKey === item.key && item.bg_color}`}
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src={`${item.icon ?? ""}`}
                          width={250}
                          height={250}
                          alt="icon"
                          className={`w-[20px] h-[20px] select-none filter brightness-0 dark:invert`}
                        />
                      </div>
                      <span className="text-read_1 text-text-color_4 font-medium">
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
                  <div onClick={UnlockOnMouseEnter} className="w-fit px-[5px] pl-[8px] h-full hover:bg-background-color_800C flex justify-center items-center">

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
            <div className="w-full h-full overflow-y-auto  pl-[15px]">
              <div className=" h-full">
                <div className="sticky z-[1] p-4 top-0 backdrop-blur-lg">
                  <span className="flex justify-center items-center px-2 py-[1px] font-medium font-geist_mono rounded-tablet bg-background-color_900C border border-border-color_800C w-fit text-[12px] text-text-color_2 ">
                    Course Overview
                  </span>
                </div>
                <div className="px-4">
                  <div className="mt-1">
                    <h2 className="font-medium text-[25px] text-text-color_1">
                      {tutorialName} Tutorial
                    </h2>
                    <div className="mt-5 flex justify-start items-center">
                      <div className="border-r flex flex-col items-center w-fit pr-3 border-border-color_800C">
                        <span className="text-[25px]">
                          {Object.keys(data).length}
                        </span>
                        <span className="text-[12px] text-text-color_2">
                          Chapters
                        </span>
                      </div>
                      <div className=" flex flex-col items-center w-fit pl-3">
                        <span className="text-[25px]">
                          {Object.values(data).reduce((acc, val) => {
                            return acc + (val.items?.length || 0);
                          }, 0)}
                        </span>
                        <span className="text-[12px] text-text-color_2">
                          Lessons
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-read_1 text-text-color_2 flex justify-start items-center gap-2 mt-5">
                    <div>
                      <BookOpenCheck
                        size={LUCIDE_DEFAULT_ICON_SIZE}
                        className="text-text-svg_default_color"
                      />
                    </div>
                    <span>What will you learn?</span>
                  </div>
                  <div className="pb-16">
                    {Object.entries(data).map(([key, value], i) => {
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
                      className="px-3 py-1 text-read_2 outline-none font-medium absolute bottom-3 right-6"
                    >
                      Start Learning
                    </PMButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
