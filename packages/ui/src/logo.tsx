import { cn } from "./lib/utils";
import { SizeType } from "./type";

interface PMLogoType {
  size?: SizeType;
  className?: string;
}

const logoSize: { [key in SizeType]: string } = {
  sm: "text-[16px]",
  md: "text-[20px]",
  lg: "text-[25px]",
  xl: "text-[30px]",
};

export const PMLogo = ({ size = "md", className }: PMLogoType) => {
  const tempLogoSize = logoSize[size];
  return (
    <>
      <span
        className={cn(
          "text-pm_purple-700 font-jetbrains_mono font-semibold",
          className,
          tempLogoSize
        )}
      >
        pr0grammerMahin&#x7B;&#x7D;
      </span>
    </>
  );
};
