import { AirFlowText } from "@/components/framer-motions";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { HeroHeading, SnippetsFeatures } from "@/components/homepage";
import { DynamicErrorResolveShowupSection } from "@/components/dynamics";
import { DynamicHeroIDE } from "@/components/homepage/hero-ide";
import { getFileContentCompById } from "@/components/homepage/hero-ide/files";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ filetype: string | undefined }>;
}) {
  const filetype = (await searchParams).filetype;
  const fileCode =
    getFileContentCompById[(filetype ? filetype : "root-readme") as FileId];
  return (
    <div className="w-full ">
      <div className="hero_image_wrapper">
        <div className="max-w-[700px] w-full h-[50px] dark:bg-zinc-50 bg-zinc-400 blur-[80px] opacity-50 rounded-full -top-[20px] left-[50%] -translate-x-1/2 absolute max-[1168px]:opacity-35 max-[1168px]:max-w-[300px]"></div>

        <div className="hero_canvas overflow-hidden p-1 border-l-0 border-r border-t-0 border-b-0 border-border-color_700C">
          <div className="absolute inset-0 h-full w-full bg-transparent dark:bg-[linear-gradient(to_right,var(--color-zinc-700),transparent_1px),linear-gradient(to_bottom,var(--color-zinc-700),transparent_1px)] bg-[linear-gradient(to_right,var(--color-zinc-300),transparent_1px),linear-gradient(to_bottom,var(--color-zinc-300),transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-background-color_950C"></div>
        </div>
        <div className="absolute w-full bg-gradient-to-b from-transparent to-background-color_950C h-[700px] left-[-10px]"></div>
      </div>

      {/* hero */}
      <div className="layout_max_1200 w-full mx-auto relative z-10 pt-[64px] px-5">
        <div className="flex justify-center items-center w-full mt-16">
          <p className="font-medium text-read_2 text-text-color_1 text-center">
            <span className="bg-gradient-to-br dark:from-green-700 dark:to-green-900 from-green-100 to-green-300 font-medium text-read_2 border border-green-500 px-2 rounded-tablet">
              Free
            </span>
            <span className="pl-2">
              Practical. Powerful Learning Platform for Developers
            </span>
          </p>
        </div>


      <HeroHeading/>
{/* keep comment out it */}
        {/* <div className="mt-28 flex justify-center items-center relative">
            <Image src={"/hero_dev.svg"} width={1000} height={800} alt="Cpp" className="w-[900px] absolute -z-[1]" />

            <div className="border rounded-[20px] border-border-color_800C w-[80px] h-[80px] flex justify-center items-center bg-gradient-to-tr from-background-color_950C to-background-color_800C relative z-10">
              <div className="text-[30px] font-semibold text-pm_purple-700 font-jetbrains_mono">
                <span>&#x7B;</span> <span>&#x7D;</span>
              </div>
            </div>
          </div> */}
      </div>
      <div className="w-full flex justify-center items-center flex-col mt-16 relative z-[20] mb-2">
        <h3 className="text-read_1 font-medium w-fit text-center text-text-color_1 font-geist_mono">
          Learn by Doing, Not by Guessing.
        </h3>
        <p className="text-read_3 text-text-color_2 text-center">
          Hands-on examples.{" "}
          <span className="text-text-color_4">Zero fluff</span>. Pure skill.
        </p>
      </div>
      {/* <DynamicHeroIDE>{fileCode ? fileCode : "No file found"}</DynamicHeroIDE> */}

      <SnippetsFeatures />
      <DynamicErrorResolveShowupSection />
      <div className="mt-32"></div>
    </div>
  );
}
