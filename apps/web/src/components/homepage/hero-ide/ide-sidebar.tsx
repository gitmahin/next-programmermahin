"use client"
import { useState } from "react";
import { PLayDebug, SourceControlSVG, VSsearchSVG } from "@programmer/ui";
import { Files } from "lucide-react";
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
    icon: <SourceControlSVG width={15} height={15} />,
  },
  {
    id: "run_debug",
    icon: <PLayDebug width={15} height={15} />,
  },
];
export const IdeSidebar = () => {
     const [activeNavById, setActiveNavById] = useState<IDENavigationCategoryType>("files");
    return <div className="flex flex-col items-center justify-start w-full">
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
}