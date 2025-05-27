import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full px-5">
      <div className="layout_max_1200 mx-auto border-l border-r border-border-color_800C h-[2000px]">
        <div className=" w-full pt-24">
          {/* <div className="w-full h-[30px] border-b border-border-color_800C relative">
            <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(225deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
          </div> */}
          <div className="w-full h-[50px] flex justify-center items-center px-2 ">
            <div className="flex justify-center items-center gap-2">
              <span className="py-[0px] px-2 bg-gradient-to-tl dark:from-green-900 dark:to-green-700 border-green-500 border text-read_2 font-medium text-text-color_1 rounded-tablet shadow">
                Free
              </span>
              <p className="font-medium text-read_2 text-text-color_4">
                Practical. Powerful Learning Platform for Developers
              </p>
            </div>
          </div>
          {/* <div className="w-full h-[30px] border-b border-t border-border-color_800C relative">
            <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
          </div> */}
          {/* <div className="flex justify-center items-start w-full">
            <div className="w-full">
              <div className="px-5 py-4 w-full">
                <h1 className="text-[35px] font-semibold ">
                  Where Future Coders Begin
                </h1>
                <p className="text-read_1 mt-2 font-medium  text-text-color_2">
                  Get unlimited access to tutorials, hands-on problem solving, and industry-level development knowledge - all in one powerful platform. Start your journey to level up your career.
                </p>
              </div>
             
            </div>

            <div className="flex-shrink-0 max-w-[650px] h-[400px] border-l border-border-color_800C w-full"></div>
          </div> */}

          <div className="w-full ">
            <div>
              <h1 className="text-[40px] font-semibold text-center ">
                Where Future Coders Begin.
              </h1>
            </div>
          </div>

          <div className="w-full flex justify-center items-center border-b border-t border-border-color_800C mt-5">
            <div className="w-full max-w-[500px] flex-shrink-0 border-r border-border-color_800C ">
              <p className="text-read_1 mt-2 font-medium  text-text-color_2  p-5">
                Get unlimited access to tutorials, hands-on problem solving, and
                industry-level development knowledge - all in one powerful
                platform. Start your journey to level up your career.
              </p>
              <div className="w-full h-[60px] mt-24 bg-background-color_900C px-5 py-3 flex justify-start items-center gap-3">
                <PMButton className="px-5 h-full text-read_1 font-medium rounded">
                  Get started
                </PMButton>
                <PMButton variant="silent" className="px-5 h-full text-read_1 font-medium rounded hover:bg-background-color_800C">
                  Browse Tutorials
                </PMButton>
              </div>
            </div>
            <div className=" w-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
