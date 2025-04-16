import { PMLogo } from "@programmer/ui";
import React from "react";

export default function MobileHeader() {
  return (
    <header className="fixed p-5 z-10 top-0 w-full left-0 h-[64px] backdrop-blur-lg border-b border-border-color_800C flex justify-between items-center">
      <PMLogo />
    </header>
  );
}
