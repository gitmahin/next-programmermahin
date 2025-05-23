import type { Metadata } from "next";
import localFont from "next/font/local";
import "@programmer/ui/globalcss";
import { GlobalThemeProvider } from "@programmer/ui";
import { JetBrains_Mono } from "next/font/google";
import ReduxProvider from "@/components/redux-provider";
import "./styles/tutorial.style.css";
import "./styles/home.style.css";
import { Search } from "@programmer/shared";
import MobileHeader from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Tutorial | ProgrammerMahin",
    template: "%s | ProgrammerMahin",
  },
  description:
    "Learn programming through clear, practical tutorials designed to help you build real-world skills step by step.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrains_mono.variable} `}
      >
        <ReduxProvider>
          <GlobalThemeProvider>
            <div className="pl-[300px] main-content">
              <Search />
              <MobileHeader />
              {children}
            </div>
          </GlobalThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
