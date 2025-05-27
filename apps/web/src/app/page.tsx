import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full px-5">
      <div className="layout_max_1200 mx-auto border-l border-r border-border-color_800C h-[2000px]">
        <div className=" w-full mt-[64px]">
          <div className="w-full h-[30px] border-b border-border-color_800C relative">
            <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
          </div>
          <div className="w-full h-[50px] flex justify-start items-center gap-2 px-2 ">
            <span className="px-2 py-[1px] border-pm_purple-900 rounded-tablet font-medium text-read_2 border bg-gradient-to-tl from-pm_purple-900 to-pm_purple-700">
              Explore
            </span>
            <p className="font-medium text-read_2 ">Interactive Tutorials</p>
            <ChevronRight
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color"
            />
          </div>
          <div className="w-full h-[30px] border-b border-t border-border-color_800C relative">
            <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
          </div>
          <div className="flex justify-center items-start w-full">
            <div className="w-full">
              <div className="px-5 py-4 w-full">
                <h1 className="text-[35px] font-semibold ">
                  Where Future Coders Begin
                </h1>
                <p className="text-read_1 font-medium  text-text-color_2">
                  Free. Practical. Powerful Learning Platform for Developers
                </p>
              </div>
              <div className="border-t border-b border-border-color_800C bg-background-color_900C h-[50px] w-full px-4 py-2">
                <PMButton variant="primary" className="h-full text-read_1 font-medium rounded  px-5 ">
                  Get Started
                </PMButton>
              </div>
            </div>

            <div className="flex-shrink-0 max-w-[600px] h-[400px] border-l border-border-color_800C w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
