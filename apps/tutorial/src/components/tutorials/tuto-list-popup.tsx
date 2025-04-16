"use client";
import { getTutorialsByKey, MAIN_NAV_TUTORIALS, TutorialEnums } from "@/constants";
import { TutorialNavItemType } from "@/constants/tutorials/type";
import {
  Dialog,
  DialogContent,
  LUCIDE_DEFAULT_ICON_SIZE,
} from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const TutoListPopup = () => {
  const [open, setOpen] = useState(false);
  const [hoverData, setHoverData] = useState<TutorialNavItemType>({})

  const handleMouseEnter = (tutorialtype: TutorialEnums) => {
    const data = getTutorialsByKey[tutorialtype]
    setHoverData(data)
  }

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex justify-center items-center w-[25px] h-[25px] active:border-pm_purple-700 active:border flex-shrink-0 hover:bg-background-color_800C rounded-tiny cursor-pointer"
      >
        <ChevronRight
          size={LUCIDE_DEFAULT_ICON_SIZE}
          className="text-text-svg_default_color"
        />
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background-color_950C border-border-color_800C border max-w-[700px] h-[500px] w-full">
          <div className="w-full flex justify-center items-center">
            <div className="flex-shrink-0 w-[240px] h-full border-r border-border-color_800C p-4 relative">
            <div className="w-[15px] h-full absolute left-full top-0 border border-solid box-border border-l-0 border-r-1 border-b-0 border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div>
              
              <ul className="leading-8">
                {MAIN_NAV_TUTORIALS.map((item, i) => {
                  return (
                    <li onMouseEnter={() => handleMouseEnter(item.key as TutorialEnums)} key={i} className={`flex transition-colors duration-150  ${item.hover_color} rounded-tiny justify-start items-center gap-3 px-3 py-1`}>
                      <div className="flex justify-center items-center">
                        <Image
                          src={`${item.icon ?? ""}`}
                          width={250}
                          height={250}
                          alt="icon"
                          className={`w-[20px] h-[20px] filter brightness-0 dark:invert`}
                        />
                      </div>
                      <span className="text-read_1 text-text-color_4">{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full h-full">
              {
                Object.entries(hoverData).map(([key, value], i) => {
                  return <ul>
                    <li>{value.slug}</li>
                  </ul>
                })
              }
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
