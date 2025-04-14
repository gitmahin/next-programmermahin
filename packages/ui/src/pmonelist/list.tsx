import { ROUNDED_VARIANTS } from "../constant";
import { cn } from "../lib/utils";
import { getOneListStyling, oneListSize, OneListVariantType } from "./helper";

interface PMOneListPropsType {
  children: React.ReactNode;
  className?: string;
  variant?: OneListVariantType;
  disabled?: boolean;
  size?: keyof typeof oneListSize;
  loading?: boolean;
  radius?: keyof typeof ROUNDED_VARIANTS;
  showActiveIndicator?: boolean;
  isActive?: boolean;
}

export const PMOneList = ({
  children,
  className,
  variant,
  disabled,
  size,
  loading,
  radius,
  showActiveIndicator,
  isActive = false,
  ...props
}: PMOneListPropsType) => {
  const variantStyling = getOneListStyling(
    variant,
    disabled || loading,
    isActive,
    size
  );
  const radiusVariant = radius
    ? ROUNDED_VARIANTS[radius]
    : ROUNDED_VARIANTS["tiny"];
  return (
    <div
      className={cn(variantStyling, radiusVariant, className, "relative")}
      {...props}
    >
      {children}
      {!disabled && showActiveIndicator && isActive && (
        <span className="absolute w-[3.5px] h-[16px] rounded-tablet bg-pm_purple-700 left-0 top-1/2 -translate-y-1/2"></span>
      )}
    </div>
  );
};
