"use client";
import {
  ErrorIcon,
  InfoIcon,
  NeutralIcon,
  SuccessIcon,
  SvgType,
  WarningIcon,
} from "@programmer/ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";
import { useSwiperManager } from "@programmer/hooks";
import { Autoplay, EffectFade } from "swiper/modules";
import { Pause, Play } from "lucide-react";
import { AirFlowText } from "@/components/framer-motions";
import Image from "next/image";
import { ErrorCodeExample } from "./codes/error";

interface FeaturesTypes {
  label: string;
  title: string;
  desc: string;
  icon?: React.ElementType<SvgType>;
}

const FEATURES_TYPES: FeaturesTypes[] = [
  {
    label: "Error",
    title: "Understand Errors Instantly",
    desc: "Error lines are clearly marked to help you learn what went wrong and why.",
    icon: ErrorIcon,
  },
  {
    label: "Warning",
    title: "Learn from Warnings",
    desc: "Warnings highlight common mistakes and best practices - before they become errors.",
    icon: WarningIcon,
  },
  {
    label: "Add & Remove",
    title: "What's Added, What's Removed",
    desc: "Follow changes in code step-by-step, just like version control.",
    icon: SuccessIcon,
  },
  {
    label: "Highlighted",
    title: "Highlighted to Guide You",
    desc: "Important lines are emphasized so you never miss the key concept in the code.",
    icon: InfoIcon,
  },
  {
    label: "Focus Mode",
    title: "Focus Mode for Distraction-Free Learning",
    desc: "Zoom into just the code with a clean view built for better understanding.",
    icon: NeutralIcon,
  },
];

const IMAGE_FOLDER_NAME = "snippets-features";
export const FeaturesSlider = ({
  errorCodeExample,
  warningCodeExample,
  addRemoveCodeExample,
  highlightCodeExample,
  focusCodeExample,
}: {
  errorCodeExample?: React.ReactNode;
  warningCodeExample?: React.ReactNode;
  addRemoveCodeExample?: React.ReactNode;
  highlightCodeExample?: React.ReactNode;
  focusCodeExample?: React.ReactNode;
}) => {
  const { swiperRef, setSlideIndex, btnRefs, slideIndex, slidingTabRef } =
    useSwiperManager();

  const [slideInfo, setSlideInfo] = useState<FeaturesTypes | undefined>(
    undefined
  );

  const [isAutoPlayStopped, setIsAutoPlayStopped] = useState<boolean>(false);

  const moveSlidingTabTo = useCallback((btn: HTMLElement) => {
    if (!slidingTabRef.current) return;
    slidingTabRef.current.style.width = `${btn.offsetWidth}px`;
    slidingTabRef.current.style.height = `${btn.offsetHeight}px`;
    slidingTabRef.current.style.left = `${btn.offsetLeft}px`;
    slidingTabRef.current.style.top = `${btn.offsetTop}px`;
  }, []);

  return (
    <div className="w-full mt-44 px-5">
      <div className="layout_max_1200 mx-auto flex justify-between items-start max-[1210px]:flex-col max-[1210px]:items-center">
          <h2 className="main_hero_heading_sync font-weight_530  flex-shrink-0 max-[1210px]:text-center">Extended IDE <br /> Into Codeblock</h2>
          <p className="text-read_1 max-w-[500px] w-full font-medium text-text-color_2 max-[1210px]:mt-2 max-[550]:max-w-[100%] max-[1210px]:text-center">Turn complex lessons into simplified, interactive Codeblocks - designed to boost understanding and make learning to code more intuitive.</p>
      </div>
      <div className="layout_max_1200   mx-auto flex justify-center items-start gap-8  max-[1137px]:gap-3 max-[1137px]:flex-col max-[1137px]:items-center mt-16">
        <div className="w-full">
          {slideInfo && (
            <AirFlowText keyIndex={slideIndex} duration={0.3}>
              <h2 className="text-read_24 text-text-color_1 font-weight_530  max-[1137px]:text-center">
                {slideInfo.title}
              </h2>
            </AirFlowText>
          )}

          {slideInfo && (
            <AirFlowText keyIndex={slideIndex} duration={0.3}>
              <p className="text-read_16 text-text-color_2 max-w-[400px] w-full mt-1 max-[1137px]:text-center max-[1137px]:max-w-[100%]">
                {slideInfo.desc}
              </p>
            </AirFlowText>
          )}

          <div className="flex w-full flex-col justify-start items-start mt-8 max-w-[200px] max-[1137px]:max-w-[100%] max-[1137px]:flex-row max-[1137px]:flex-wrap max-[1137px]:justify-center  relative">
            <div
              ref={slidingTabRef}
              className="bg-gradient-to-tr w-full transition-all duration-500 absolute -z-[1] from-background-color_900C to-background-color_800C rounded"
            ></div>
            {FEATURES_TYPES.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  ref={(el) => {
                    btnRefs.current[i] = el;
                  }}
                  onClick={() => {
                    swiperRef.current?.slideToLoop(i);
                    swiperRef.current?.autoplay.stop();
                  }}
                  className={`py-2 px-3 gap-2 flex justify-start items-center flex-shrink-0  ${i === slideIndex ? "text-text-color_1 " : "text-text-color_3"}`}
                >
                  {Icon && <Icon width={12} height={12} />}
                  <span className="text-read_1 font-medium transition-colors duration-300">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-5 max-[1137px]:mt-0">
            <button
              onClick={() => {
                if (isAutoPlayStopped) {
                  swiperRef.current?.autoplay.start();
                } else {
                  swiperRef.current?.autoplay.stop();
                }
              }}
              className="w-[30px] h-[30px] rounded-full border border-background-color_900C flex-shrink-0 bg-background-color_925C flex justify-center items-center"
            >
              {isAutoPlayStopped ? (
                <Play className="text-text-svg_default_color" size={16} />
              ) : (
                <Pause className="text-text-svg_default_color" size={16} />
              )}
            </button>
          </div>
        </div>

        <div className="max-w-[530px] flex-shrink-0 relative z-10 h-[380px] border w-full border-background-color_900C backdrop-blur-[100px] rounded-[15px] ">
          <div className="w-full h-[40px] flex justify-between items-center px-3">
            <div className="flex justify-center w-fit items-center gap-2 ">
              {Array.from({ length: 3 }).map((item, i) => {
                return (
                  <div
                    className="w-[13px] h-[13px] rounded-full dark:bg-background-color_800C bg-background-color_850C"
                    key={i}
                  ></div>
                );
              })}
            </div>
            <div className="flex justify-center items-center w-fit gap-2">
              {slideInfo?.icon && <slideInfo.icon width={10} height={10} />}
              <span className="text-read_3 font-geist_mono text-text-color_2">
                {slideInfo?.label}
              </span>
            </div>
          </div>
          <div className=" w-full h-[calc(100%-40px)]">
            <div className="w-full h-full  p-1 pt-0 rounded-[14px]">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={useCallback(
                  (swiper: SwiperTypes) => {
                    const idx = swiper.realIndex;
                    setSlideIndex(idx);
                    setSlideInfo(FEATURES_TYPES[idx]);
                    const btn = btnRefs.current[idx];
                    if (btn) moveSlidingTabTo(btn);
                  },
                  [moveSlidingTabTo]
                )}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                loop={true}
                effect={"fade"}
                modules={[Autoplay, EffectFade]}
                className="h-full w-full border border-border-color_800C rounded-[12px]"
                allowTouchMove={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onAutoplayStop={() => setIsAutoPlayStopped(true)}
                onAutoplayStart={() => setIsAutoPlayStopped(false)}
              >
                <SwiperSlide>{errorCodeExample}</SwiperSlide>
                <SwiperSlide>{warningCodeExample}</SwiperSlide>
                <SwiperSlide>{addRemoveCodeExample}</SwiperSlide>
                <SwiperSlide>{highlightCodeExample}</SwiperSlide>
                <SwiperSlide>{focusCodeExample}</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
