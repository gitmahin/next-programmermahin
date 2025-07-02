"use client";
import { ChevronDown, Contrast, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { LUCIDE_DEFAULT_ICON_SIZE } from "./constant";

export const ThemeModeToggoler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark" || resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="w-fit h-[30px] overflow-hidden rounded-tablet flex justify-between items-center border border-border-color_800C cursor-pointer">
      <div
        onClick={toggleTheme}
        className="flex-shrink-0 h-full px-[6px] hover:bg-background-color_800C flex justify-center items-center"
      >
        {theme !== "system" ? (
          <>
            <Moon
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color dark:block hidden"
            />
            <Sun
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color dark:hidden"
            />
          </>
        ) : (
          <Contrast
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-svg_default_color"
          />
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="h-full outline-none">
          <div className="px-1 h-full flex justify-center items-center hover:bg-background-color_800C">
            <ChevronDown
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-background-color_850C !border-border-color_800C p-0.5">
          <DropdownMenuItem
            className="group hover:bg-background-color_750C py-1 rounded-tiny"
            onClick={() => setTheme("system")}
          >
            <Contrast
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color group-hover:text-text-color_1"
            />
            <span className="text-text-color_4 text-read_2 group-hover:text-text-color_1">
              System
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
