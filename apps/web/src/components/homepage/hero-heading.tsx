"use client";
import React from "react";
import Link from "next/link";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicAirFlowHeading = dynamic(
  () => import("../framer-motions").then((module) => module.AirFlowText),
  {
    ssr: false,
    loading: () => (
      <>
        <div className="mt-5">
          <h1 className="super_heading_sync animate-fadeLoading font-weight_550 text-center text-text-color_1 w-full tracking-tighter">
            Where Future{" "}
            <span className="font-geist_mono text-pm_purple-600">[</span>
            <span className="font-geist_mono">Programmers</span>
            <span className="font-geist_mono text-pm_purple-600">]</span> Begin
            <br />& Code Becomes Confidence.
          </h1>
        </div>
      </>
    ),
  }
);

const DynamicAirFlowText = dynamic(
  () => import("../framer-motions").then((module) => module.AirFlowText),
  {
    ssr: false,
    loading: () => (
      <>
        <p className="text-[18px] weight_450 mt-4 animate-fadeLoading  text-text-color_4 text-center mx-auto max-w-[650px] w-full leading-6 [@media(max-width:1000px)]:text-[16px]">
          Get unlimited access to tutorials, hands-on problem solving, and
          industry-level development knowledge - all in one powerful platform.
          Start your journey to level up your career.
        </p>
      </>
    ),
  }
);

const DynamicAirFlowButtons = dynamic(
  () => import("../framer-motions").then((module) => module.AirFlowText),
  {
    ssr: false,
    loading: () => (
      <>
        <div className="flex justify-center items-center gap-2 mt-6 animate-fadeLoading">
          <PMButton
            variant="primary"
            className="px-4 py-2 font-medium text-read_1 rounded transition-colors "
          >
            <span className="text-text-zinc_white ">Get Started</span>
          </PMButton>

          <PMButton
            variant="silent"
            className="px-4 py-2  rounded group flex justify-center items-center gap-2 transition-colors"
          >
            <span className="font-medium text-read_1 text-text-color_1 transition-colors">
              Browse Courses
            </span>
            <ChevronRight
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color transition-colors group-hover:text-text-color_1"
            />
          </PMButton>
        </div>
      </>
    ),
  }
);

export const HeroHeading = () => {
  return (
    <>
      <div className="mt-5">
        <DynamicAirFlowHeading initialY={20} duration={0.5} delay={0.2}>
          <h1 className="super_heading_sync font-weight_550 text-center text-text-color_1 w-full tracking-tighter">
            Where Future{" "}
            <span className="font-geist_mono text-pm_purple-600">[</span>
            <span className="font-geist_mono">Programmers</span>
            <span className="font-geist_mono text-pm_purple-600">]</span> Begin
            <br />& Code Becomes Confidence.
          </h1>
        </DynamicAirFlowHeading>
        <DynamicAirFlowText initialY={25} duration={0.5} delay={0.2}>
          <p className="text-[18px] weight_450 mt-4  text-text-color_4 text-center mx-auto max-w-[650px] w-full leading-6 [@media(max-width:1000px)]:text-[16px]">
            Get unlimited access to tutorials, hands-on problem solving, and
            industry-level development knowledge - all in one powerful platform.
            Start your journey to level up your career.
          </p>
        </DynamicAirFlowText>
      </div>

      <DynamicAirFlowButtons initialY={30} duration={0.5} delay={0.2}>
        <div className="flex justify-center items-center gap-2 mt-6 ">
          <Link href={"/login"}>
            <PMButton
              variant="primary"
              className="px-4 py-2 font-medium text-read_1 rounded transition-colors "
            >
              <span className="text-text-zinc_white ">Get Started</span>
            </PMButton>
          </Link>

          <Link href={"https://tutorial.programmermahin.com/?tutoTab=1"}>
            <PMButton
              variant="silent"
              className="px-4 py-2  rounded group flex justify-center items-center gap-2 transition-colors"
            >
              <span className="font-medium text-read_1 text-text-color_1 transition-colors">
                Browse Courses
              </span>
              <ChevronRight
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color transition-colors group-hover:text-text-color_1"
              />
            </PMButton>
          </Link>
        </div>
      </DynamicAirFlowButtons>
    </>
  );
};
