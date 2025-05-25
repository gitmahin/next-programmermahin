"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

export const QuickLearnHeader = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftFadeRef = useRef<HTMLDivElement>(null);
  const rightFadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    const bg = bgRef.current;
    const leftFade = leftFadeRef.current;
    const rightFade = rightFadeRef.current;

    if (!slider || !bg || !leftFade || !rightFade) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const updateScrollEnds = () => {
      const isAtStart = slider.scrollLeft <= 0;
      const isAtEnd =
        slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 2;

      leftFade.style.opacity = isAtStart ? "1" : "0";
      rightFade.style.opacity = isAtEnd ? "1" : "0";
    };

    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.cursor = "grabbing";
    };

    const mouseLeave = () => {
      isDown = false;
      slider.style.cursor = "grab";
      leftFade.style.opacity = "0";
      rightFade.style.opacity = "0";
    };

    const mouseUp = () => {
      isDown = false;
      slider.style.cursor = "grab";
      leftFade.style.opacity = "0";
      rightFade.style.opacity = "0";
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;

      bg.style.backgroundPositionX = `-${slider.scrollLeft * 0.5}px`;

      updateScrollEnds();
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 h-[64px] z-[11] border-b border-border-color_800C backdrop-blur-md">
      {/* Infinite background image */}
      <div
        ref={bgRef}
        className="absolute top-[-20px] left-0 h-full w-full opacity-20 pointer-events-none dark:invert"
        style={{
          backgroundImage: "url('/inch_meter.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0 0",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="w-full h-full bg-gradient-to-b from-transparent to-background-color_950C absolute bottom-0 left-0"></div>

      {/* Scroll indicators */}
      <div
        ref={leftFadeRef}
        className="scroll_end_left pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-background-color_750C to-transparent opacity-0 transition-opacity duration-200 z-40"
      />
      <div
        ref={rightFadeRef}
        className="scroll_end_right pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background-color_750C to-transparent opacity-0 transition-opacity duration-200 z-40"
      />

      <div
        ref={scrollRef}
        className="overflow-x-auto cursor-grab [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-full flex justify-start items-end px-2 py-2 relative z-10"
      >
        {Array.from({ length: 20 }).map((_, i) => {
          return (
            <Link href={""} key={i} className="flex-shrink-0">
              <button className="rounded-tiny select-none px-3 py-1 w-fit flex-shrink-0 hover:bg-background-color_800C font-medium text-read_1 text-text-color_2 hover:text-text-color_1">
                What is JSX?
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
