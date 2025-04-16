"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";

export const GlobalThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme = "system" } = useTheme();
  return (
    <ThemeProvider attribute={"class"}>
      {children}
      <Toaster
        richColors
        position="bottom-center"
        theme={theme as ToasterProps["theme"]}
        closeButton
      />
    </ThemeProvider>
  );
};
