"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@programmer/ui";
import { useRouter } from "next/navigation";

export const PopoverDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();
  const handleOpenChange = (state: boolean) => {
    setOpen(state);
    router.back();
  };

  return (
    <Dialog
      defaultOpen={isOpen}
      open={isOpen}
      onOpenChange={(state) => handleOpenChange(state)}
    >
      <DialogContent
        className="max-w-[900px]  w-full h-[calc(100vh-12px)] p-3"
        closeButtonClassName="!top-6 !right-6 !w-[35px] !h-[35px]"
      >
        <div className=" w-full h-full overflow-y-auto custom_scrollbar rounded-[20px] border border-border-color_800C bg-background-color_950C p-24">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
