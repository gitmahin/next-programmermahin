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
import { WHY_LEARN_HERE } from "@/constants/landing_page";

const page = () => {
  const dispatch = useDispatch();

  const handleBrowseTutoClicked = () => {
    if (!setOpenTutoTab || !setLockMouseEnter) return;
    dispatch(setOpenTutoTab(true));
    dispatch(setLockMouseEnter(false));
  };

  return (
    <div className="flex justify-center items-center p-5">
      <div className=" max-w-[950px] w-full py-16 relative bg-gradient-to-t from-background-color_950C to-transparent">
        <div>
          <h1 className="flex justify-start items-center font-semibold text-[40px] gap-2 heading_auto_typed">
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

          <p className="max-w-[550px] text-[20px] font-medium text-text-color_2 mt-5 hero_paragraph">
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
          <div className="w-full grid grid-cols-3 gap-4 mt-5 grid-rows-[150px_150px] why_learn_grid">
            {WHY_LEARN_HERE.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-full p-5 border flex justify-start items-start gap-3 border-border-color_800C rounded bg-background-color_900C hover:bg-background-color_800C"
                >
                  <Image
                    src={`${item.img}`}
                    width={100}
                    height={100}
                    alt="icon"
                    className={`w-[25px] h-[25px] filter brightness-0 dark:invert`}
                  />
                  <div>
                    <h3 className="text-read_2 font-medium">{item.title}</h3>
                    <p className="mt-2 text-text-color_2 text-read_3 font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
