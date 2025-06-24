import { PanelBottom, PanelLeft, PanelRight } from "lucide-react";

export const VsHeader = () => {
  return (
    <div className="w-full h-[25px] bg-[var(--github-default-background-color-2)] border-b border-[var(--github-default-border-color-1)] flex justify-between items-center">
      <div className="flex justify-start items-center gap-2 pl-2 w-full">
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <div
              key={i}
              className={`w-[10px] h-[10px] rounded-full ${i === 0 ? "bg-[#ef4444]" : i === 1 ? "bg-[#facc15]" : "bg-[#a3e635]"} `}
            ></div>
          );
        })}
      </div>
      <div className="text-[11px] font-weight_450 text-pm_zinc-200 flex-grow">
        programmermahin
      </div>
      <div className="flex justify-end items-center gap-2 w-full pr-2">
        <PanelLeft size={12} className="text-text-svg_default_color" />
        <PanelBottom size={12} className="text-text-svg_default_color" />
        <PanelRight size={12} className="text-text-svg_default_color" />
      </div>
    </div>
  );
};
