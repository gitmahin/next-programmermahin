import { RadiusType } from "./type";

export const ROUNDED_VARIANTS: { [key in RadiusType]: string } = {
  primary: "rounded-[8px]",
  tablet: "rounded-[50px]",
  circle: "rounded-[50%]",
  tiny: "rounded-[5px]",
};

export const LUCIDE_DEFAULT_ICON_SIZE = 18;
export const ICON_DEFAULT_COLOR = "var(--svg-default-color)";
