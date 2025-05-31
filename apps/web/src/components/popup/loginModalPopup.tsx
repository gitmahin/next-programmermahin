"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  LUCIDE_DEFAULT_ICON_SIZE,
} from "@programmer/ui";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export const LoginModalPopup = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(true);
  const handleOpenChange = (state: boolean) => {
    setOpen(state);
    router.back();
  };
  return (
    <Dialog
      defaultOpen={open}
      open={open}
      onOpenChange={(state) => handleOpenChange(state)}
    >
      <DialogContent className="border border-border-color_800C max-w-[400px] w-full bg-background-color_925C  ">
        <button
          onClick={() => handleOpenChange(false)}
          className="absolute top-3 right-3 outline-none bg-background-color_850C transition-all shadow rounded-full group hover:bg-background-color_800C p-2"
        >
          <X
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-svg_default_color group-hover:text-text-color_1"
          />
        </button>
        <div className="w-full max-h-[600px] h-fit overflow-y-auto custom_scrollbar p-5 ">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
