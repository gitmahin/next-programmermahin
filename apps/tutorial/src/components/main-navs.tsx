"use client";
import { MAIN_NAV_TUTORIALS } from "@/constants";
import { TutorialNavItemType } from "@programmer/constants";
import { LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import React, { Suspense } from "react";
import { TutoListPopup } from "./tutorials";
import {
  setLockMouseEnter,
  setOpenTutoTab,
  setTutoTabDetails,
} from "@/redux/tutorials/tutoTabSlice";
import { useAppDispatch } from "@/hooks/redux.hook";
import { getTutorialsByKey, TutorialEnums } from "@programmer/constants";

export default function MainNavs() {
  const dispatch = useAppDispatch();

  const handleTutorialListClick = (tutoType: string, tutoName: string) => {
    if (!setOpenTutoTab || !setTutoTabDetails || !setLockMouseEnter) return;
    dispatch(setOpenTutoTab(true));
    dispatch(
      setTutoTabDetails({
        data: getTutorialsByKey[
          tutoType as TutorialEnums
        ] as TutorialNavItemType,
        activeKey: tutoType,
        tutorialName: tutoName,
      })
    );
    dispatch(setLockMouseEnter(true));
  };
  return (
    <div className="px-4 w-full ">
      <div className=" w-full border-t border-border-color_800C pt-4">
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center border rounded-tiny border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C">
            <GraduationCap
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color"
            />
          </div>
          <span className="text-read_2 text-text-color_3 font-medium">
            Tutorials
          </span>
        </div>
        <ul className="pt-2 leading-8">
          {MAIN_NAV_TUTORIALS.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => handleTutorialListClick(item.key, item.label)}
                className="flex group justify-start items-center gap-3 px-3 py-1  hover:bg-background-color_800C rounded-tiny transition-colors duration-150"
              >
                <div>
                  <Image
                    src={`${item.icon ?? ""}`}
                    width={100}
                    height={100}
                    alt="icon"
                    priority
                    className="w-[18px] h-[18px] select-none 
                      filter grayscale brightness-125 contrast-[5%] 
                      dark:invert 
                      group-hover:grayScaleActiveImage
                      transition-all duration-100"
                  />
                </div>
                <span className="text-read_2 text-text-color_4 group-hover:text-text-color_1 font-medium">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
        <Suspense>
          <TutoListPopup showClickAbleTutoOpenBtn={false} />
        </Suspense>
      </div>
    </div>
  );
}
