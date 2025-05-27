import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

//  <div className="w-full h-[30px] border-b border-border-color_800C relative">
//           <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(225deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
//         </div>

export default function Home() {
  return (
    <div className="w-full ">
      <div className="hero_image_wrapper">
        <div className="max-w-[700px] w-full h-[50px] bg-zinc-50 blur-[80px] opacity-50 rounded-full -top-[20px] left-[50%] -translate-x-1/2 absolute max-[1168px]:opacity-35 max-[1168px]:max-w-[300px]"></div>
        <div className="hero_canvas overflow-hidden p-1 border-l-0 border-r border-t-0 border-b-0 border-border-color_700C">
          <div className="absolute inset-0 h-full w-full bg-transparent dark:bg-[linear-gradient(to_right,var(--color-zinc-700),transparent_1px),linear-gradient(to_bottom,var(--color-zinc-700),transparent_1px)] bg-[size:6rem_6rem]"></div>
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-background-color_950C"></div>
        </div>
        <div className="absolute w-full bg-gradient-to-b from-transparent to-background-color_950C h-[700px] left-[-10px]"></div>

        {/* hero */}
        <div className="layout_max_1200 w-full mx-auto h-[500px] relative z-10 pt-[64px] ">
          <div className="flex justify-center items-center w-full gap-2 mt-16">
            <span className="bg-gradient-to-br dark:from-green-700 to-green-900 font-medium text-read_2 border border-green-500 px-2 rounded-tablet">
              Free
            </span>
            <p className="font-medium text-read_2 text-text-color_4">
              Practical. Powerful Learning Platform for Developers
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-[40px] font-semibold text-center text-text-color_1 w-full leading-[3rem]">
              Where Future{" "}
              <span className="font-geist_mono text-pm_purple-700">[</span>
              <span className="font-geist_mono">Programmers</span>
              <span className="font-geist_mono text-pm_purple-700">]</span>{" "}
              Begin.
            </h1>
            <p className="text-[18px] font-medium mt-4 text-text-color_2 text-center mx-auto max-w-[650px] w-full leading-6">
              Get unlimited access to tutorials, hands-on problem solving, and
              industry-level development knowledge - all in one powerful
              platform. Start your journey to level up your career.
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6 ">
            <PMButton
              variant="primary"
              className="px-4 py-2 font-medium text-read_1 rounded transition-colors"
            >
              Get Started
            </PMButton>
            <PMButton
              variant="silent"
              className="px-4 py-2  rounded group transition-colors flex justify-center items-center gap-2"
            >
              <span className="font-medium text-read_1">Browse Courses</span>
              <ChevronRight
                size={LUCIDE_DEFAULT_ICON_SIZE}
                className="text-text-svg_default_color transition-colors group-hover:text-text-color_1"
              />
            </PMButton>
          </div>
        </div>
      </div>
    </div>
  );
}
