import {
  AlignLeft,
  CaseSensitive,
  ChevronRight,
  CopyMinus,
  FilePlus,
  FilePlus2,
  ListX,
  LucideIcon,
  Regex,
  RotateCw,
} from "lucide-react";
import { SidebarTitle } from "./sidebar-title";
import { VSInputBox } from "./ui";

const SEARCH_INPUT_OPTIONS_ICON: LucideIcon[] = [CaseSensitive, Regex];

export const SearchComp = () => {
  return (
    <div className="w-full">
      <SidebarTitle label="search">
        <div className="flex justify-end items-center gap-1">
          <RotateCw size={10} className="text-pm_zinc-500" />
          <ListX size={10} className="text-pm_zinc-500" />
          <FilePlus2 size={10} className="text-pm_zinc-200" />
          <AlignLeft size={10} className="text-pm_zinc-500" />
          <CopyMinus size={10} className="text-pm_zinc-500" />
        </div>
      </SidebarTitle>
      <div className="px-1 w-full">
        <div className="w-full flex justify-center items-center gap-1">
          <ChevronRight size={10} className="text-pm_zinc-300 flex-shrink-0" />
          <div className="flex-grow relative flex justify-center items-center">
            <VSInputBox placeholder="Search" autoFocus />
            <div className="absolute z-10 right-1 top-1/2 -translate-y-1/2 flex justify-end items-center gap-0.5">
              {SEARCH_INPUT_OPTIONS_ICON.map((icon, i) => {
                const Icon = icon;
                return (
                  <div className="p-0.5 rounded-[3px] hover:bg-[var(--github-default-background-color-4)] flex justify-center items-center">
                    <Icon size={10} className="text-pm_zinc-300" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
