"use client";
import { AlignLeft, Check, ChevronDown, ChevronRight, Ellipsis, RotateCw } from "lucide-react";
import { SidebarTitle } from "./sidebar-title";
import { VSButton } from "./ui";
import { VSInputBox } from "./ui/vs-input";
import { useEffect, useRef } from "react";

export const SourceControlComp = () => {
  return (
    <div className="w-full h-full group">
      <SidebarTitle label="source control" />
      <div className="flex justify-between  items-center">
        <div className="flex justify-start items-center gap-0 px-0.5">
          <ChevronDown size={12} className="text-pm_zinc-300" />
          <span className="text-[9px] uppercase font-weight_450 text-pm_zinc-200">
            Changes
          </span>
        </div>
        <div className=" group-hover:opacity-100 flex justify-end items-center gap-1.5 pr-2">
             <AlignLeft  size={10} className="text-pm_zinc-400" />
<Check size={12} className="text-pm_zinc-400" />
  <RotateCw size={10} className="text-pm_zinc-400" />
  <Ellipsis size={12} className="text-pm_zinc-400" />
        </div>
      </div>
      <div
        className="w-full h-[calc(100%-55px)] px-2 border border-transparent focus:!border-blue-600 outline-none"
        tabIndex={0}
      >
        <VSInputBox placeholder={`Message (Ctrl+Enter to commit on "main")`} />
        <div className="mt-1.5 bg-[var(--github-default-button-color-1)] flex justify-center items-center rounded-[2px] overflow-hidden">
          <VSButton className="flex justify-center items-center gap-1 text-pm_zinc-200 w-full">
            <Check size={12} className="text-pm_zinc-200" />
            Commit
          </VSButton>

          <VSButton className="flex justify-center items-center gap-1 text-pm_zinc-200 flex-shrink-0 !w-[20px] border-l !border-pm_zinc-400">
            <ChevronDown size={12} className="text-pm_zinc-200" />
          </VSButton>
        </div>
        <div className="mt-2 w-full">
          <div className="h-full w-full">
            <div className="flex justify-start items-center gap-1">
              <ChevronDown size={12} className="text-pm_zinc-300" />
              <span className="text-[9px] text-pm_zinc-200">Changes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-1 px-0.5  py-[1px]">
        <ChevronRight size={12} className="text-pm_zinc-300" />
        <span className="text-[9px] text-pm_zinc-200 uppercase">Graph</span>
      </div>
    </div>
  );
};
