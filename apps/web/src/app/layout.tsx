import type { Metadata } from "next";
import localFont from "next/font/local";
import "@programmer/ui/globalcss";
import { GlobalThemeProvider } from "@programmer/ui";
import { Header } from "@/components";
import { JetBrains_Mono } from "next/font/google";
import ReduxProvider from "@/components/redux-provider";
import "./styles/home.style.css";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
import { Footer } from "@/components/footer";
import Script from "next/script";

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
    default: "ProgrammerMahin",
    template: "%s | ProgrammerMahin",
  },
  description:
    "Learn programming through clear, practical tutorials designed to help you build real-world skills step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js)  */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X485X0KWVC"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X485X0KWVC');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrains_mono.variable}`}
      >
        <ReduxProvider>
          <GlobalThemeProvider>
            <Header />
            {children}
            <Footer />
          </GlobalThemeProvider>
        </ReduxProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "ProgrammerMahin",
              url: "https://programmermahin.com/",
            }),
          }}
        />
      </body>
    </html>
  );
}
