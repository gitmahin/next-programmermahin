"use client";

import dynamic from "next/dynamic";

const ImportDynamicHeroIDE = dynamic(
  () => import("./heroIDE").then((mod) => mod.HeroIDE),
  {
    ssr: false,
  }
);

export const DynamicHeroIDE = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ImportDynamicHeroIDE>{children}</ImportDynamicHeroIDE>
    </>
  );
};
