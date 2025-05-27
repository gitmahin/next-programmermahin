import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

//  <div className="w-full h-[30px] border-b border-border-color_800C relative">
//           <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(225deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
//         </div>

export default function Home() {
  return (
    <div className="w-full px-5">
      <div className="hero_image_wrapper">
        <div className="hero_canvas overflow-hidden p-1 border-l-0 border-r border-t-0 border-b-0 border-pm_purple-800">
          <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--color-purple-800),transparent_1px),linear-gradient(to_bottom,var(--color-purple-800),transparent_1px)] bg-[size:6rem_6rem]"></div>
        </div>
      </div>
    </div>
  );
}
