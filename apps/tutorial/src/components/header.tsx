"use client";
import { setMobSidebarOpen } from "@/redux/tutorials/mobSidebarOpen";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton, PMLogo } from "@programmer/ui";
import { PanelRightClose } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function MobileHeader() {
  const dispatch = useDispatch();
  const path_name = usePathname();

  const handleOpenSidebar = () => {
    if (!setMobSidebarOpen) return;
    dispatch(setMobSidebarOpen(true));
  };

  useEffect(() => {
    if (!setMobSidebarOpen) return;
    dispatch(setMobSidebarOpen(false));
  }, [path_name]);

  return (
    <header className="fixed p-5 py-0 z-20 top-0 w-full left-0 h-[50px] mob-header-tuto backdrop-blur-lg border-b border-border-color_800C hidden justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        <PMButton
          variant="silent"
          className="group w-[25px] h-[25px] hover:border hover:border-border-color_800C flex justify-center items-center"
          radius="tiny"
          onClick={handleOpenSidebar}
        >
          <PanelRightClose
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-svg_default_color group-hover:text-text-color_1"
          />
        </PMButton>
        <PMLogo size="sm" className="mob_logo" />
      </div>
    </header>
  );
}
