import * as React from "react";

import { cn } from "./lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border-color_800C placeholder:text-muted-foreground focus-visible:border-ring focus-visible:border-text-color_4 dark:focus-visible:ring-background-color_700C focus-visible:ring-background-color_750C focus-visible:text-text-color_1 focus-visible:ring-[3px] aria-invalid:ring-destructive-20 dark:aria-invalid:ring-destructive-40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
