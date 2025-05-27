import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

//  <div className="w-full h-[30px] border-b border-border-color_800C relative">
//           <div className="w-full h-full absolute left-0 top-0 border-none box-border border-border-color_800C border-x border-x-border-color_800C bg-[image:repeating-linear-gradient(225deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10 "></div>
//         </div>

export default function Home() {
  return (
    <div className="w-full">
      <div className="layout_max_1500 border mx-auto grid grid-cols-[20px_1fr_20px] ">
        <div className="w-full h-full border"></div>
        <div className="w-full h-screen">

        </div>
        <div className="w-full h-full border"></div>
      </div>

      <div className="mt-24"></div>
    </div>
  );
}
