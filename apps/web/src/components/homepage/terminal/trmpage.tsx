import { CodeBlock } from "@/components/codeBlock";
import React from "react";

const code = `"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";

const TERMINAL_BUTTONS: { label: string }[] = [
  {
    label: "page.tsx",
  },
  {
    label: "style.css",
  },
  {
    label: "package.json",
  },
  {
    label: "Preview",
  },
];

const MARQUEE_IMAGES: { [key: string]: { img: string }[] } = {
  MARQUEE_IMAGES_1: [
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
  ],
  MARQUEE_IMAGES_2: [
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
  ],
  MARQUEE_IMAGES_3: [
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
    {
      img: "",
    },
  ],
};

interface CodeEditorHeroAnimationDisplayPropsTypes {
  pageTsxComponent?: React.ReactNode;
  styleCssComponent?: React.ReactNode;
  packageJsonComponent?: React.ReactNode;
}

export const CodeEditorHeroAnimationDisplay = ({
  pageTsxComponent,
  styleCssComponent,
  packageJsonComponent,
}: CodeEditorHeroAnimationDisplayPropsTypes) => {
  const swiperRef = useRef<SwiperTypes>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const terminalTabRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const moveTerminalTabRefTo = useCallback(
  //    ^^^
    (btn: HTMLElement) => {
      if (!terminalTabRef.current) return;
    terminalTabRef.current.style.width = \`\${btn.offsetWidth}px\`;
      terminalTabRef.current.style.left = \`\${btn.offsetLeft}px\`;
    },
    [slideIndex]
  );

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current?.slideTo(3);
  }, []);
  return (
    <div className="relative z-10 w-full h-[650px] bg-gradient-to-l from-background-color_950C via-background-color_900C to-background-color_950C">
      <div className="mt-28 layout_max_1200 mx-auto w-full h-full  p-2  ">
        <div className="rounded border border-border-color_800C bg-background-color_925C w-full h-full overflow-hidden">
          <div className="w-full h-[40px] px-3 pt-2 flex justify-start items-center">
            <div className="flex justify-center items-center w-fit gap-2">
              <div className="w-[15px] h-[15px] rounded-full bg-background-color_750C border border-border-color_700C"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-background-color_750C border border-border-color_700C"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-background-color_750C border border-border-color_700C"></div>
            </div>

            <div className="flex justify-start items-center gap-2 pl-5 relative">
              <div
                ref={terminalTabRef}
                className="w-[73px] left-5 h-full transition-all duration-500 absolute bg-background-color_750C rounded-tiny"
              ></div>
              {TERMINAL_BUTTONS.map((button, i) => {
                return (
                  <React.Fragment key={i}>
                    <button
                      ref={(btn) => {
                        tabRefs.current[i] = btn;
                      }}
                      onClick={() => swiperRef.current?.slideTo(i)}
                      className={\`font-medium  px-2 py-1 text-read_2 z-10 relative transition-colors rounded-tiny  \${slideIndex === i ? " text-text-color_1" : "hover:bg-background-color_800C text-text-color_2"}\`}
                    >
                      {button.label}
                    </button>
                    {i < TERMINAL_BUTTONS.length - 1 && (
                      <div className="h-[15px] w-[1px] bg-background-color_750C"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="p-2 h-[calc(100%-40px)] w-full">
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
              className="h-full rounded overflow-hidden border border-border-color_800C"
            >
              <SwiperSlide className="w-full">
                <div className="h-[calc(100%-200px)] w-full">
                  {pageTsxComponent}
                </div>
                <div className="h-[200px] w-full border-t border-border-color_800C bg-background-color_900C">
                  <div className="flex justify-start items-center text-[11px] text-text-color_3 gap-5 py-2 px-3">
                    <button>PROBLEMS</button>
                    <button>DEBUG CONSOLE</button>
                    <button className="relative text-text-color_4 font-medium">
                      TERMINAL
                      <div className="absolute w-full h-[2px] bg-pm_purple-700 bottom-[-5px] left-0"></div>
                    </button>
                    <button>PORTS</button>
                  </div>
                  <div className="h-[calc(100%-34px)] overflow-y-auto px-3 py-2 text-[14px] custom_scrollbar text-text-color_4">
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
                          onClick={() => swiperRef.current?.slideTo(3)}
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
              <SwiperSlide className="w-full h-full ">
                {packageJsonComponent}
              </SwiperSlide>
              <SwiperSlide className="w-full">
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
                              className={\`w-full \${key === "MARQUEE_IMAGES_2" ? "animate-marquee-vertical-topToBottom" : "animate-marquee-vertical-bottomToTop"} \`}
                            >
                              <div>
                                {Array.from({ length: 2 }).map((_, i) => {
                                  return (
                                    <React.Fragment key={i}>
                                      {value.map((item, j) => (
                                        <div
                                          key={\`original-\${j}\`}
                                          className="w-full h-[300px] rounded mb-6 bg-background-color_900C"
                                        ></div>
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

`

export const TrmPage = () => {
  return (
    <CodeBlock lang="tsx" className="text-[14px]">
      {code}
    </CodeBlock>
  );
};
