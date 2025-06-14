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
      <DialogContent
        className=" !rounded-none overflow-hidden p-3 max-h-[600px] h-full max-w-[400px] w-full "
        closeButtonClassName="!top-4 !right-4"
      >
        <div className="overflow-y-auto p-5  border !rounded-[15px] h-full border-border-color_800C custom_scrollbar   bg-background-color_925C">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};
