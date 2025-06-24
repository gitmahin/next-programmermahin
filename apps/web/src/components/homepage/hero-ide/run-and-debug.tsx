"use client";
import { useEffect, useRef } from "react";
import { SidebarTitle } from "./sidebar-title";
import { VSButton } from "./ui";


export const RunAndDebugComp = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);
  return (
    <div className="w-full h-full">
      <SidebarTitle label="run and debug" />

      <div
        className="px-2 h-[calc(100%-24px)] border border-transparent focus:!border-blue-600  outline-none"
        tabIndex={0}
        ref={divRef}
      >
        <VSButton>Run and Debug</VSButton>
        <p className="text-pm_zinc-400 text-[9px] leading-[12px] my-2">
          To customize Run and Debug{" "}
          <span className="text-blue-500 ">create a launch.json file.</span>
        </p>
        <VSButton>JavaScript Debug Terminal</VSButton>
        <p className="text-pm_zinc-400 text-[9px] leading-[12px] my-2">
          You can use the JavaScript Debug Terminal to debug Node.js processes
          run on the command line
        </p>
        <VSButton>Debug URL</VSButton>
      </div>
    </div>
  );
};
