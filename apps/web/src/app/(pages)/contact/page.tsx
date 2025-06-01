import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[9999999999] overflow-hidden bg-background-color_950C flex justify-center items-center">
      <div className="max-w-[500px] p-5 w-full h-full overflow-y-auto border-r border-border-color_800C"></div>
      <div className="absolute top-0 left-0 w-full h-[45px] border-b border-border-color_800C"></div>
      <div className="absolute bottom-0 left-0 w-full h-[45px] border-t border-border-color_800C"></div>
      <div className="w-full h-full overflow-hidden relative p-5 pr-0">
        <div className="w-[120px] h-full absolute left-10 top-0 border-solid box-border border-l border-r border-border-color_800C bg-[image:repeating-linear-gradient(315deg,_var(--border-color-800C)_0,_var(--border-color-800C)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--border-color-800C)]/5 md:block dark:[--pattern-fg:var(--border-color-800C)]/10"></div>

        <div className="h-full ">

        </div>
      </div>
    </div>
  );
}
