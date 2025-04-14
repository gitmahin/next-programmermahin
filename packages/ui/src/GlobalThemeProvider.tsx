import { ThemeProvider } from "next-themes";

export const GlobalThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider attribute={"class"}>{children}</ThemeProvider>;
};
