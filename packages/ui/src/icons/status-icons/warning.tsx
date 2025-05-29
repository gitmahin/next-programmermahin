import React from "react";
import { SvgSizeInSQR, SvgType } from "../type";

export const WarningIcon: React.FC<SvgType> = ({
  width = SvgSizeInSQR.PRIMARY,
  height = SvgSizeInSQR.PRIMARY,
  className,
  color = "var(--svg-default-color)",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <circle cx="8" cy="8" r="8" fill="#facc15"></circle>{" "}
    </g>
  </svg>
);
