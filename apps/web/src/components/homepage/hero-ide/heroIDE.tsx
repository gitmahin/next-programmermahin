"use client";
import { cva } from "class-variance-authority";
import {
  Bug,
  BugPlay,
  BugPlayIcon,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Code2,
  CodeSquare,
  DotIcon,
  Ellipsis,
  File,
  FileIcon,
  Files,
  GemIcon,
  LucideIcon,
  Menu,
  PanelBottom,
  PanelLeft,
  PanelRight,
  Search,
  Settings,
  Settings2,
  SettingsIcon,
} from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable-panel";
import { PLayDebug, SourceControlSVG, VSsearchSVG } from "@programmer/ui";
import { useState } from "react";
import { FilesComp } from "./files-comp";
import { SearchComp } from "./search-comp";
import { RunAndDebugComp } from "./run-and-debug";
import { SourceControlComp } from "./source-control";
import Image from "next/image";

const IDE_HEADER_NAV_MENUS = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

type IDENavigationCategoryType =
  | "files"
  | "search"
  | "source_control"
  | "run_debug";

const IDE_LEFT_SIDE_NAVIGATION_IOCNS: {
  id: IDENavigationCategoryType;
  icon: React.ReactElement<SVGSVGElement>;
}[] = [
  {
    id: "files",
    icon: <Files size={16} />,
  },
  {
    id: "search",
    icon: <VSsearchSVG width={15} height={15} className="rotate-90" />,
  },
  {
    id: "source_control",
    icon: <SourceControlSVG width={15} height={15}/>
  },
  {
    id: "run_debug",
    icon: <PLayDebug width={15} height={15}/>
  }
];

const IDE_SIDEBAR_ACTIVE_TAB: {[key in IDENavigationCategoryType]: React.ReactNode} = {
  files: <FilesComp/>,
  search: <SearchComp/>,
  run_debug: <RunAndDebugComp/>,
  source_control: <SourceControlComp/>,
}

export const HeroIDE = () => {
  const [activeNavById, setActiveNavById] =
    useState<IDENavigationCategoryType>("files");
  return (
    <div className="w-full flex justify-center items-center relative z-20 mt-5">
      <div className="max-w-[800px] h-[500px] w-full relative">
        <div className="w-[400px] h-[300px] border overflow-hidden rounded-[12px] bg-background-color_925C border-border-color_800C absolute right-[-250px] bottom-10 rotate-12">
          <Image 
          src={"/heroimages/quicklearn.png"}
          width={1000}
          height={1000}
          alt="tutorial"
          className="object-cover object-right-top w-full h-full"
          />
        </div>
        <div className="w-[400px] h-[300px] border overflow-hidden rounded-[12px] bg-background-color_925C border-border-color_800C absolute left-[-250px] bottom-10 -rotate-12">
 <Image 
          src={"/hero_black.png"}
          width={1000}
          height={1000}
          alt="tutorial"
          className="object-cover object-left-top w-full h-full"
          />

        </div>

        <div className="w-full flex justify-start items-center gap-2 mb-1 pl-5">
          <span className="text-[10px] font-weight_530">Code</span>
          <ul className="flex justify-start items-center gap-0.5">
            {IDE_HEADER_NAV_MENUS.map((item, i) => {
              return (
                <li
                  key={i}
                  className="text-[10px] px-1 hover:bg-background-color_800C cursor-pointer rounded-[3px] transition-colors text-text-color_4 font-weight_450"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full h-full rounded-[12px] overflow-hidden relative z-20 shadow-[0px_0px_80px_#000000] border border-border-color_800C bg-background-color_950C">
          <div className="w-full h-[25px] bg-[var(--github-default-background-color-2)] border-b border-[var(--github-default-border-color-1)] flex justify-between items-center">
            <div className="flex justify-start items-center gap-2 pl-2 w-full">
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <div
                    className={`w-[12px] h-[12px] rounded-full ${i === 0 ? "bg-[#ef4444]" : i === 1 ? "bg-[#facc15]" : "bg-[#a3e635]"} `}
                  ></div>
                );
              })}
            </div>
            <div className="text-[11px] font-weight_450 text-text-color_2 flex-grow">
              programmermahin
            </div>
            <div className="flex justify-end items-center gap-2 w-full pr-2">
              <PanelLeft size={12} className="text-text-svg_default_color" />
              <PanelBottom size={12} className="text-text-svg_default_color" />
              <PanelRight size={12} className="text-text-svg_default_color" />
            </div>
          </div>
          <div className="h-[calc(100%-41px)] ">
            <div className="flex justify-center items-center h-full w-full">
              <div className="h-full w-[30px] bg-[var(--github-default-background-color-2)] flex flex-col items-center justify-between gap-2">
                <div className="flex flex-col items-center justify-start w-full">
                  {IDE_LEFT_SIDE_NAVIGATION_IOCNS.map((item, i) => {
                    return (
                      <div
                        onClick={() => {
                          setActiveNavById(item.id);
                        }}
                        className={`w-full h-[28px] border-l border-transparent text-pm_zinc-500 hover:text-pm_zinc-200  ${activeNavById === item.id && "!text-pm_zinc-200 !border-[var(--github-default-active-bar-color-1)]"} flex justify-center items-center   `}
                      >
                        {item.icon}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col justify-end items-center pb-1.5 gap-2 w-full">
                  <CircleUser
                    size={16}
                    className="text-pm_zinc-500 hover:text-pm_zinc-200"
                  />
                  <SettingsIcon
                    size={16}
                    className="text-pm_zinc-500 hover:text-pm_zinc-200"
                  />
                </div>
              </div>
              <ResizablePanelGroup
                direction="horizontal"
                className="w-full h-full "
              >
                <ResizablePanel
                  defaultSize={18}
                  maxSize={60}
                  minSize={20}
                  className="bg-[var(--github-default-background-color-1)] border-l border-[var(--github-default-border-color-1)]"
                >
                  {IDE_SIDEBAR_ACTIVE_TAB[activeNavById]}
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel
                  defaultSize={50}
                  className="bg-[var(--github-default-background-color-2)]"
                ></ResizablePanel>
              </ResizablePanelGroup>
            </div>
            <div className="w-full h-[16px] border-t border-[var(--github-default-border-color-1)] bg-[var(--github-default-background-color-2)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
