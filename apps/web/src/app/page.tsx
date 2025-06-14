import { AirFlowText } from "@/components/framer-motions";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  ErrorResolvingComp,
  TrmTailwind,
  SnippetsFeatures,
  TrmPage,
  TrmStyle,
  TrmPackageJson,
  CodeEditorHeroAnimationDisplay,
} from "@/components/homepage";

//  <div className="w-full h-[30px] border-b border-border-color_800C relative">
//           <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(225deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
//         </div>

export default function Home() {
  return (
    <div className="w-full ">
      <div className="hero_image_wrapper">
        <div className="max-w-[700px] w-full h-[50px] dark:bg-zinc-50 bg-zinc-400 blur-[80px] opacity-50 rounded-full -top-[20px] left-[50%] -translate-x-1/2 absolute max-[1168px]:opacity-35 max-[1168px]:max-w-[300px]"></div>

        <div className="hero_canvas overflow-hidden p-1 border-l-0 border-r border-t-0 border-b-0 border-border-color_700C">
          <div className="absolute inset-0 h-full w-full bg-transparent dark:bg-[linear-gradient(to_right,var(--color-zinc-700),transparent_1px),linear-gradient(to_bottom,var(--color-zinc-700),transparent_1px)] bg-[linear-gradient(to_right,var(--color-zinc-300),transparent_1px),linear-gradient(to_bottom,var(--color-zinc-300),transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-background-color_950C"></div>
        </div>
        <div className="absolute w-full bg-gradient-to-b from-transparent to-background-color_950C h-[700px] left-[-10px]"></div>
      </div>

      {/* hero */}
      <div className="layout_max_1200 w-full mx-auto relative z-10 pt-[64px] px-5">
        <div className="flex justify-center items-center w-full mt-16">
          <p className="font-medium text-read_2 text-text-color_1 text-center">
            <span className="bg-gradient-to-br dark:from-green-700 dark:to-green-900 from-green-100 to-green-300 font-medium text-read_2 border border-green-500 px-2 rounded-tablet">
              Free
            </span>
            <span className="pl-2">
              Practical. Powerful Learning Platform for Developers
            </span>
          </p>
        </div>

        <div className="mt-5">
          <AirFlowText initialY={20} duration={0.5}>
            <h1 className="super_heading_sync font-weight_550 text-center text-text-color_1 w-full tracking-tighter">
              Where Future{" "}
              <span className="font-geist_mono text-pm_purple-600">[</span>
              <span className="font-geist_mono">Programmers</span>
              <span className="font-geist_mono text-pm_purple-600">]</span>{" "}
              Begin
              <br />& Code Becomes Confidence.
            </h1>
          </AirFlowText>
          <AirFlowText initialY={25} duration={0.5}>
            <p className="text-[18px] weight_450 mt-4  text-text-color_4 text-center mx-auto max-w-[650px] w-full leading-6 max-[1000px]:text-[16px]">
              Get unlimited access to tutorials, hands-on problem solving, and
              industry-level development knowledge - all in one powerful
              platform. Start your journey to level up your career.
            </p>
          </AirFlowText>
        </div>

        <AirFlowText initialY={30} duration={0.5}>
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
        </AirFlowText>
        {/* <div className="mt-28 flex justify-center items-center relative">
            <Image src={"/hero_dev.svg"} width={1000} height={800} alt="Cpp" className="w-[900px] absolute -z-[1]" />

            <div className="border rounded-[20px] border-border-color_800C w-[80px] h-[80px] flex justify-center items-center bg-gradient-to-tr from-background-color_950C to-background-color_800C relative z-10">
              <div className="text-[30px] font-semibold text-pm_purple-700 font-jetbrains_mono">
                <span>&#x7B;</span> <span>&#x7D;</span>
              </div>
            </div>
          </div> */}
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-16 relative z-[20] mb-2">
        <h3 className="text-read_1 font-medium w-fit text-center text-text-color_1 font-geist_mono">
          Learn by Doing, Not by Guessing.
        </h3>
        <p className="text-read_3 text-text-color_2 text-center">
          Hands-on examples.{" "}
          <span className="text-text-color_4">Zero fluff</span>. Pure skill.
        </p>
      </div>
      <CodeEditorHeroAnimationDisplay
        pageTsxComponent={<TrmPage />}
        styleCssComponent={<TrmStyle />}
        packageJsonComponent={<TrmPackageJson />}
        tailwindComponent={<TrmTailwind />}
      />

      <SnippetsFeatures />

      <ErrorResolvingComp />
      <div className="mt-32"></div>
    </div>
  );
}
