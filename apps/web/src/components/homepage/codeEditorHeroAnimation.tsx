"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";

const TERMINAL_BUTTONS: { label: string }[] = [
  { label: "page.tsx" },
  { label: "style.css" },
  { label: "tailwind.config.js" },
  { label: "package.json" },
  { label: "Preview" },
];

const MARQUEE_IMAGES: { [key: string]: { img: string }[] } = {
  MARQUEE_IMAGES_1: [
    { img: "long_code.png" },
    { img: "code_editor.png" },
    { img: "hello_user.png" },
    { img: "bash.png" },
    { img: "addremove.png" },
    { img: "local.jpg" },
  ],
  MARQUEE_IMAGES_2: [
    { img: "local.jpg" },
    { img: "tutorials_popup.png" },
    { img: "code_editor.png" },
    { img: "search.png" },
    { img: "bash.png" },
    { img: "hero_terminal.png" },
  ],
  MARQUEE_IMAGES_3: [
    { img: "laptop_coding.png" },
    { img: "quick_learn.png" },
    { img: "code_editor.png" },
    { img: "focus_mode.png" },
    { img: "error_img.png" },
    { img: "bash.png" },
  ],
};

interface CodeEditorHeroAnimationDisplayPropsTypes {
  pageTsxComponent?: React.ReactNode;
  styleCssComponent?: React.ReactNode;
  packageJsonComponent?: React.ReactNode;
  tailwindComponent?: React.ReactNode;
}

export const CodeEditorHeroAnimationDisplay = ({
  pageTsxComponent,
  styleCssComponent,
  packageJsonComponent,
  tailwindComponent,
}: CodeEditorHeroAnimationDisplayPropsTypes) => {
  const swiperRef = useRef<SwiperTypes>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const terminalTabRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const moveTerminalTabRefTo = (btn: HTMLElement) => {
    if (!terminalTabRef.current) return;
    terminalTabRef.current.style.width = `${btn.offsetWidth}px`;
    terminalTabRef.current.style.left = `${btn.offsetLeft}px`;
  };

  useEffect(() => {
    setTimeout(() => {
      if (!swiperRef.current) return;
      swiperRef.current?.slideTo(4);
    }, 1000);
  }, []);

  return (
    <div className="relative z-10 w-full h-[650px] px-5">
      <div className="absolute max-w-[500px] w-full h-full dark:bg-pm_zinc-600 bg-pm_zinc-300 blur-[100px] rounded-full left-1/2 -translate-x-1/2 -z-[1]"></div>
      <div className=" layout_max_1200 mx-auto w-full h-full ">
        <div className="rounded-[12px] p-1 pt-0 border border-border-color_800C backdrop-blur-[150px] dark:bg-[#11111371] bg-[#f7f7f888] w-full h-full overflow-hidden relative">
          <div className="absolute w-[300px] h-[300px] rounded-[50%] blur-[200px] dark:bg-pm_purple-500 dark:opacity-[70%] bg-pm_purple-400 top-0 left-0 -z-[11]"></div>
          <div className="absolute w-[300px] h-[300px] rounded-[50%] blur-[200px] dark:bg-pm_purple-500 dark:opacity-[70%] bg-pm_purple-400 bottom-0 right-0 -z-[11]"></div>

            <div className="flex justify-start h-fit py-2 px-1 items-center w-fit gap-2">
              {
                Array.from({ length: 3 }).map((_, i) => {
                  return <div key={i} className="w-[13px] h-[13px] rounded-full dark:bg-[#7e22ce5e] bg-[#7e22ce42] border dark:border-pm_purple-800 border-pm_purple-400"></div>
                })
              }
            </div>
          <div className="w-full h-[38px] px-1 py-0 flex justify-start items-center bg-background-color_800C rounded-t-[8px] border border-border-color_800C">
            <div className="flex justify-start items-center gap-2 relative overflow-x-scroll w-full hide-scrollbar">
              <div
                ref={terminalTabRef}
                className="w-[73px] left-5 h-full transition-all duration-500 absolute dark:border-border-color_700C border dark:bg-background-color_700C bg-background-color_750C border-border-color_800C rounded-tiny "
              ></div>
              {TERMINAL_BUTTONS.map((button, i) => {
                return (
                  <React.Fragment key={i}>
                    <button
                      ref={(btn) => {
                        tabRefs.current[i] = btn;
                      }}
                      onClick={() => swiperRef.current?.slideTo(i)}
                      className={`font-medium  px-2 py-1 text-read_3 z-10 relative transition-colors rounded-tiny  ${slideIndex === i ? "dark:text-text-zinc_white text-text-color_1" : "hover:bg-background-color_750C hover:backdrop-blur-lg text-text-color_2"}`}
                    >
                      {button.label}
                    </button>
                    {i < TERMINAL_BUTTONS.length - 1 && (
                      <div className="h-[15px] w-[1px] bg-background-color_700C"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="pt-0 h-[calc(100%-40px)] w-full">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                const idx = swiper.realIndex;
                setSlideIndex(idx);

                const btn = tabRefs.current[idx];
                if (btn) moveTerminalTabRefTo(btn);
              }}
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
              allowTouchMove={false}
              className="h-[calc(100%-28px)] rounded-b-[8px] overflow-hidden "
            >
              <SwiperSlide className="w-full relative z-10">
                <div className="h-[calc(100%-200px)] w-full border border-border-color_800C rounded-b-[8px] overflow-y-auto hide-scrollbar overflow-x-hidden ">
                  {pageTsxComponent}
                </div>
                <div className="h-[200px] w-full border rounded-[8px] overflow-hidden  mt-1 border-border-color_800C bg-background-color_900C ">
                  <div className="flex justify-start bg-background-color_800C items-center text-[11px] text-text-color_3 gap-5 py-2 px-3">
                    <button>PROBLEMS</button>
                    <button>DEBUG CONSOLE</button>
                    <button className="relative text-text-color_4 font-medium">
                      TERMINAL
                      <div className="absolute w-full h-[2px] bg-pm_purple-700 bottom-[-5px] left-0"></div>
                    </button>
                    <button>PORTS</button>
                  </div>
                  <div className="h-[calc(100%-34px)] overflow-y-auto px-3 py-2 text-[14px] hide-scrollbar  text-text-color_4">
                    <p>&gt; next dev --turbopack --port 3000</p>
                    <div className="px-4 py-2">
                      <p>
                        <span className="text-pm_purple-500 font-medium">
                          ▲ Next.js 15.3.1{" "}
                        </span>
                        (Turbopack)
                      </p>
                      <p>
                        {" "}
                        - Local:{" "}
                        <span
                          onClick={() => swiperRef.current?.slideTo(4)}
                          className="hover:underline cursor-pointer"
                          title="Follow link (click)"
                        >
                          http://localhost:3000
                        </span>
                      </p>
                      <p> - Network: http://192.168.0.101:3000</p>
                      <p> - Environments: .env ✓</p>
                    </div>

                    <p>
                      <span className="text-green-500">✓</span> Starting...
                    </p>
                    <p>
                      <span className="text-green-500">✓</span> Ready in 2.1s
                    </p>
                    <p>○ Compiling / ...</p>
                    <p>
                      <span className="text-green-500">✓</span> Compiled / in
                      16.6s
                    </p>
                    <p>
                      GET / <span className="text-green-500">200</span> in
                      17889ms
                    </p>
                    <p>
                      <span className="text-green-500">✓</span> Compiled
                      /favicon.ico in 1300ms
                    </p>
                    <p>GET /favicon.ico?favicon.4716d561.ico 200 in 1640ms</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full h-full ">
                {styleCssComponent}
              </SwiperSlide>
              <SwiperSlide className="w-full h-full overflow-y-auto hide-scrollbar overflow-x-hidden">
                {tailwindComponent}
              </SwiperSlide>
              <SwiperSlide className="w-full h-full overflow-y-auto hide-scrollbar overflow-x-hidden">
                {packageJsonComponent}
              </SwiperSlide>
              <SwiperSlide className="w-full dark:bg-[#111113a3] bg-[#f7f7f888]">
                <div className="terminal_wrapper ">
                  <div className="terminal_canvas grid grid-cols-3">
                    {Object.entries(MARQUEE_IMAGES).map(
                      ([key, value], objIndex) => {
                        return (
                          <div
                            key={objIndex}
                            className="w-full h-full overflow-hidden p-3"
                          >
                            <div
                              className={`w-full ${key === "MARQUEE_IMAGES_2" ? "animate-marquee-vertical-topToBottom" : "animate-marquee-vertical-bottomToTop"} `}
                            >
                              <div>
                                {Array.from({ length: 2 }).map((_, i) => {
                                  return (
                                    <React.Fragment key={i}>
                                      {value.map((item, j) => (
                                        <div
                                          key={`original-${j}`}
                                          className="w-full h-[300px] rounded mb-6 bg-background-color_900C overflow-hidden"
                                        >
                                          <Image
                                            src={`/heroimages/dark/${item.img || "backup.png"}`}
                                            width={900}
                                            height={700}
                                            alt="features"
                                            className="w-full h-full object-cover object-left-top border-none hidden dark:block"
                                          />
                                          <Image
                                            src={`/heroimages/light/${item.img || "backup.png"}`}
                                            width={900}
                                            height={700}
                                            alt="features"
                                            className="w-full h-full object-cover object-left-top border-none dark:hidden block"
                                          />
                                        </div>
                                      ))}
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
