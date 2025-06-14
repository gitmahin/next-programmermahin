"use client";
import React, { useState, useEffect } from "react";
import { LetterSwapForward } from "../framer-motions";
const ERROR_WORDS = ["Errors", "Bugs", "Exceptions", "Failures"];

const ErrorChildElement = ({
  title,
  desc,
  image,
  className,
}: {
  title: string;
  desc: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={`max-w-[500px] w-full ${className}`}>
      <h4 className="text-read_24 font-weight_530 leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sint!
      </h4>
      <p className="text-read_1 leading-5 font-weight_450 text-text-color_2 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam
        earum consectetur quisquam atque esse, rerum ad rem optio eveniet?
      </p>
      <div className="p-1.5 bg-gradient-to-tl from-background-color_950C via-background-color_900C to-background-color_700C h-[350px] max-[970px]:h-[300px]  rounded-[15px] mt-8">
        <div className="bg-background-color_950C w-full h-full rounded-[12px]"></div>
      </div>
    </div>
  );
};

export const ErrorResolvingComp = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % ERROR_WORDS.length);
    }, 1500); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="  mt-44  w-full px-5 ">
      <div className="layout_max_1200  mx-auto ">
        <div className="flex justify-between items-start max-[1210px]:flex-col">
          <div className="flex-shrink-0">
            <h2 className=" main_hero_heading_sync font-weight_530 transition-all duration-300 ">
              <span className="flex justify-start items-center  ">
                Tired of{" "}
                <span className="border ml-3 mr-1 px-2 border-red-600 bg-[#dc262639]">
                  <LetterSwapForward
                    key={currentWordIndex}
                    label={`${ERROR_WORDS[currentWordIndex]}`}
                    currentWordIndex={currentWordIndex}
                  />
                </span>
                ?
              </span>
              <span className=" text-text-color_4">
                We’ve Got the <span className="text-emerald-500">Fix.</span>
              </span>
            </h2>
          </div>
          <p className="text-read_1 max-w-[500px] w-full font-medium text-text-color_2 max-[1210px]:mt-2 max-[550]:max-w-[100%]">
            From cryptic console messages to broken UI elements — our fix guides
            are built to save your time and sanity. Discover how to resolve
            common errors quickly, efficiently, and with confidence.
          </p>
        </div>

        <div className="grid relative grid-cols-2 grid-rows-2  w-full mt-16 gap-y-20 max-[1140px]:gap-x-24 max-[900px]:grid-cols-1 max-[900px]:grid-rows-[auto] max-[900px]:justify-items-center">
            <div className="absolute w-[1px] bg-background-color_900C h-full top-0 left-1/2 -translate-x-1/2 max-[900px]:hidden"></div>
            <div className="absolute h-[1px] bg-background-color_900C w-full top-1/2 left-0 -translate-y-1/2 max-[900px]:hidden"></div>
            <ErrorChildElement
            title={""} 
            desc={""}
            image={""}
            />
            <ErrorChildElement
            title={""}
            desc={""}
            image={""}
            className="ml-auto max-[900px]:ml-0"
            />
            <ErrorChildElement
            title={""}
            desc={""}
            image={""}
            />
            <ErrorChildElement
            title={""}
            desc={""}
            image={""}
                   className="ml-auto max-[900px]:ml-0"
            />
        </div>
      </div>
    </div>
  );
};
