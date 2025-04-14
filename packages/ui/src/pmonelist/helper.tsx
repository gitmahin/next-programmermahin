import { SizeType } from "../type";

export type OneListVariantType = "primary";

interface OneListStylingType {
  [key: string]: {
    default: string;
    hover: string;
    disabled: string;
    active: string;
  };
}

export const oneListSize: { [key in SizeType]: string } = {
  sm: "",
  md: "",
  lg: "",
  xl: "",
};

const oneListStyling: OneListStylingType = {
  primary: {
    default: "*:text-read_1 text-text-color_4 font-medium select-none ",
    hover: "hover:bg-[var(--background-color-5)]",
    disabled:
      "text-text-color_2 *:cursor-not-allowed opacity-60 border border-border-color_2 *:pointer-events-none",
    active:
      "text-text-indigo-color_1 bg-[var(--purple-transparent-2)] hover:bg-[var(--purple-transparent-1)] ",
  },
};

export const getOneListStyling = (
  variant: OneListVariantType = "primary",
  disabled: boolean = false,
  active: boolean = false,
  size?: SizeType
) => {
  const tempVariant = oneListStyling[variant];
  const tempSize = (size && oneListSize[size]) || "";
  const tempOneListStyling = `${tempVariant?.default} ${disabled ? tempVariant?.disabled : tempVariant?.hover} ${tempSize} ${!disabled && active ? tempVariant?.active : ""}`;
  return tempOneListStyling;
};
