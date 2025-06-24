"use client";

import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

const ImportDynamicHeroIDE = dynamic(
  () => import("./heroIDE").then((mod) => mod.HeroIDE),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex justify-center items-center relative z-20 mt-5">
        <div className="max-w-[800px] h-[500px] w-full relative">
          <div className="w-[400px] h-[300px]  border overflow-hidden rounded-[12px] bg-background-color_925C border-border-color_800C absolute right-[-250px] bottom-10 rotate-12">
            <Skeleton width={"100%"} height={"100%"} />
          </div>
          <div className="w-[400px] h-[300px] border overflow-hidden rounded-[12px] bg-background-color_925C border-border-color_800C absolute left-[-250px] bottom-10 -rotate-12">
            <Skeleton width={"100%"} height={"100%"} />
          </div>

          <div className="flex justify-start items-center gap-2 pl-5">
            <Skeleton width={"50px"} height={"15px"} />
            <Skeleton width={"20px"} height={"15px"} />
            <Skeleton width={"30px"} height={"15px"} />
            <Skeleton width={"40px"} height={"15px"} />
            <Skeleton width={"60px"} height={"15px"} />
            <Skeleton width={"50px"} height={"15px"} />
            <Skeleton width={"60px"} height={"15px"} />
            <Skeleton width={"30px"} height={"15px"} />
          </div>
          <div className="w-full h-full rounded-[12px] overflow-hidden relative z-20 dark:shadow-[0px_0px_80px_#000000]  bg-background-color_950C shadow-[0px_0px_80px_#d8b4fe]">
            <Skeleton width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
    ),
  }
);

export const DynamicHeroIDE = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ImportDynamicHeroIDE>{children}</ImportDynamicHeroIDE>
    </>
  );
};
