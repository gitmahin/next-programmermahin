"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
} from "@programmer/ui";
import React, { useEffect, useState } from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  SearchIcon,
  Settings,
  Smile,
  User,
} from "lucide-react";

export const Search = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      <PMButton
        onClick={() => setOpen(true)}
        variant="secondary"
        radius="tablet"
        className="px-2 fixed top-5 right-5 py-1 flex justify-center items-center gap-1 group searchTutorialRoot"
      >
        <SearchIcon
          size={LUCIDE_DEFAULT_ICON_SIZE}
          className="text-text-svg_default_color group-hover:text-text-color_1"
        />
        <span className="text-read_2 text-text-color_3">Search</span>
        <div className="bg-background-color_750C text-[12px] text-text-color_2 px-1 rounded-tiny ml-2 ">
          CTRL+k
        </div>
      </PMButton>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className=" max-w-[700px] h-[500px] w-full p-2">
          <div className="w-full h-full overflow-hidden bg-background-color_950C border-border-color_800C border rounded">

          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
