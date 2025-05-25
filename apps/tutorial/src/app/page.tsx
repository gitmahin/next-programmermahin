"use client";
import { ReactTyped } from "react-typed";
import React from "react";
import { PMButton } from "@programmer/ui";
import { useDispatch } from "react-redux";
import {
  setLockMouseEnter,
  setOpenTutoTab,
} from "@/redux/tutorials/tutoTabSlice";
import Image from "next/image";
import { GETTING_STARTED, WHY_LEARN_HERE } from "@/constants/landing_page";
import MainNavs from "@/components/main-navs";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";

const page = () => {
  const dispatch = useDispatch();

  const handleBrowseTutoClicked = () => {
    if (!setOpenTutoTab || !setLockMouseEnter) return;
    dispatch(setOpenTutoTab(true));
    dispatch(setLockMouseEnter(false));
  };

  return (
    <>
      <Sidebar>
        <MainNavs />
      </Sidebar>

      <div className="flex justify-center items-center p-5">
        <div className="default_page_width py-16 relative bg-gradient-to-t from-background-color_950C to-transparent">
          <div>
            <h1 className="flex justify-start items-center font-semibold text-[40px] gap-2 heading_auto_typed leading-[44px]">
              <span>Learn</span>
              <ReactTyped
                className="text-pm_purple-700"
                strings={[
                  "C++",
                  "Devops",
                  "Web Development",
                  "Microservice",
                  "React",
                  "Nextjs",
                  "Git",
                ]}
                typeSpeed={40}
                loop
                backSpeed={50}
              />
            </h1>

            <p className="max-w-[550px] text-[18px] leading-6 font-medium text-text-color_2 mt-5 hero_paragraph">
              Learn faster, build smarter, and level up your skills with
              structured content that actually makes sense.
            </p>
            <PMButton
              onClick={handleBrowseTutoClicked}
              variant="primary"
              radius="primary"
              className="px-5 py-2 mt-5 font-medium text-text-zinc_white hero_button_brw"
            >
              <span className="text-read_1">Browse Tutorials</span>
            </PMButton>
          </div>

          <div className="mt-16">
            <h2 className="text-[22px] font-semibold text-text-color_1">
              Why Learn Here?
            </h2>
            <div className="w-full grid grid-cols-3 gap-4 mt-5 grid-rows-[150px_150px] max-[1250px]:grid-rows-[165px_165px] why_learn_grid">
              {WHY_LEARN_HERE.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="w-full h-full p-5 border flex justify-start items-start gap-3 border-border-color_800C rounded-[15px] bg-gradient-to-br from-background-color_900C via-background-color_800C to-background-color_900C"
                  >
                    <Image
                      src={`${item.img}`}
                      width={100}
                      height={100}
                      alt="icon"
                      className={`w-[25px] h-[25px] select-none filter grayscale brightness-125 contrast-[5%] 
                            dark:invert`}
                    />
                    <div>
                      <h3 className="text-read_2 font-medium">{item.title}</h3>
                      <p className="mt-2 text-text-color_2  text-read_3 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-[22px] font-semibold text-text-color_1">
              Getting Started
            </h2>
            <div className="grid mt-5  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 max-[350px]:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
              {GETTING_STARTED.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="h-[300px] group w-full border border-border-color_800C rounded-[15px] overflow-hidden grid grid-rows-[1fr_110px]"
                  >
                    <div className="h-full bg-background-color_900C p-5 relative overflow-hidden">
                      <Image
                        src={`${item.img ?? ""}`}
                        width={100}
                        height={100}
                        alt="icon"
                        className={`w-[50px] h-[50px] relative z-10`}
                      />
                      <div className="absolute w-[100px] h-[100px] top-0 left-0 rounded-tablet blur-[30px] dark:bg-background-color_750C"></div>

                      <Image
                        src={`${item.img ?? ""}`}
                        width={100}
                        height={100}
                        alt="icon"
                        className={`w-[180px] h-[180px] absolute opacity-[5%] group-hover:opacity-[25%] transition-all duration-300 blur-[2px]`}
                      />
                    </div>
                    <Link href={`${item.link}`}>
                    <div className="h-full border-t border-border-color_800C w-full p-5 group-hover:bg-background-color_800C transition-colors">
                      <h3 className="text-[18px] font-medium text-text-color_1">
                        {item.title}
                      </h3>
                      <p className="two_line_ellipsis text-read_2 text-text-color_2">
                        {item.desc}
                      </p>
                    </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
