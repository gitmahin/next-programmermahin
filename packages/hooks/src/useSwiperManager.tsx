import React, { useRef, useState } from "react";
import { Swiper as SwiperTypes } from "swiper/types";

export const useSwiperManager = () => {
  const swiperRef = useRef<SwiperTypes>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const slidingTabRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  return {
    slidingTabRef,
    btnRefs,
    swiperRef,
    slideIndex,
    setSlideIndex,
  };
};
