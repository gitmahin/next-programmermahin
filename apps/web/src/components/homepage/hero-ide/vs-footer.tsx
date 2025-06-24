import { VSRemoteSVG, SourceControlSVG, GitHubCopilot } from "@programmer/ui";
import {
  TriangleAlert,
  CircleX,
  RefreshCw,
  Braces,
  BellDot,
} from "lucide-react";

export const VsFooter = () => {
  return (
    <div className="w-full h-[16px] border-t border-[var(--github-default-border-color-1)] bg-[var(--github-default-background-color-2)] flex justify-between items-center px-2 font-light">
      <div className="text-[9px] font-light text-pm_zinc-200">
        <div className="flex justify-start items-center gap-5">
          <VSRemoteSVG width={10} height={10} />
          <div className="flex justify-start items-center gap-0.5">
            <SourceControlSVG width={10} height={10} />
            <span>main*</span>
            <RefreshCw size={10} className="ml-1" />
            <CircleX size={10} className=" ml-3" />
            <span>0</span>
            <TriangleAlert size={10} className=" ml-0.5" />
            <span>15</span>
          </div>
        </div>
      </div>

      <div className="flex text-[9px] font-light text-pm_zinc-200 justify-end items-center gap-3">
        <span>
          <span>Ln</span>
          <span> 185,</span>
          <span>Col</span>
          <span> 30</span>
        </span>

        <span>Spaces: 2</span>

        <span>UTF-8</span>

        <span>CRLF</span>

        <span className="flex justify-center items-center gap-0.5">
          <Braces size={10} />
          TypeScript JSX
        </span>
        <span>
          <GitHubCopilot width={11} height={11} />
        </span>
        <span>apps/web/tsconfig.json</span>
        <span>
          <BellDot size={10} />
        </span>
      </div>
    </div>
  );
};
