import React from "react";
import {
  ErrorIcon,
  InfoIcon,
  NeutralIcon,
  SuccessIcon,
  WarningIcon,
} from "./icons/status-icons";

export type StatusTypes =
  | "warning"
  | "error"
  | "success"
  | "info"
  | "neutral";

export const statusIcons: Record<StatusTypes, React.ElementType> = {
  warning: WarningIcon,
  error: ErrorIcon,
  success: SuccessIcon,
  info: InfoIcon,
  neutral: NeutralIcon,
};

interface StatusBoxType {
  status: StatusTypes;
  tag: string;
  statusCode: number;
  message: string | React.ReactElement<HTMLParagraphElement>;
}

export const StatusBox = ({
  status = "neutral",
  tag = "Undefined Tag",
  statusCode = 0,
  message = "No message provided",
}: StatusBoxType) => {
  const GetStatusIcon = statusIcons[status];
  return (
    <div className="layout_max_330 mx-auto">
      <div className="w-full h-fit border border-border-color_800C rounded overflow-hidden ">
        <div className="px-2 flex justify-between items-center py-2 border-b border-border-color_800C bg-background-color_900C">
          <div className="px-3 py-1 rounded bg-background-color_850C h-fit flex justify-center items-center w-fit gap-2 border-background-color_800C border ">
            <GetStatusIcon width={10} height={10} />
            <span className="text-read_1 font-medium text-text-color_1">
              {statusCode.toString()}
            </span>
          </div>
          <span className="font-medium text-read_1 text-text-color_2 mr-3">
            {tag}
          </span>
        </div>

        <div className="p-2 bg-background-color_925C">
          <div className="text-text-color_3 text-read_3">{message}</div>
        </div>
      </div>
    </div>
  );
};
