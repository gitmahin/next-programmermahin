import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "@programmer/ui/globalcss";
import "./styles/globals.css"
import { LayoutProvider } from "@/components/provider";
import { GlobalThemeProvider } from "@programmer/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Developer Docs | ProgrammerMahin",
    template: "%s | ProgrammerMahin",
  },
  description:
    "Official documentation and guides for effectively utilizing the ProgrammerMahin web application's features and APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrains_mono.variable}`}>
          <GlobalThemeProvider >

        <LayoutProvider>
        {children}
        </LayoutProvider>
          </GlobalThemeProvider>
      </body>
    </html>
  );
}
