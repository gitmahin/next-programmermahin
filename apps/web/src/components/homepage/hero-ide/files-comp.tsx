import { ChevronRight, Ellipsis } from "lucide-react";
import React from "react";
import { SidebarTitle } from "./sidebar-title";

export const FilesComp = () => {
  return (
    <div className="h-full w-full ">
      <SidebarTitle label="explorer"/>

      <div className="w-full">
        <div tabIndex={0}  className="px-0.5  border border-transparent cursor-pointer focus:!border-blue-600 outline-none flex justify-between items-center">
          <div className="flex justify-start items-center ">
            <ChevronRight size={10} className="text-pm_zinc-300" />
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450">
              open editors
            </span>
          </div>
        </div>

        <div tabIndex={0} className="px-0.5  border border-transparent cursor-pointer focus:!border-blue-600 outline-none flex justify-between items-center">
          <div className="flex justify-start items-center ">
            <ChevronRight size={10} className="text-pm_zinc-300" />
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450">
              programmermahin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
