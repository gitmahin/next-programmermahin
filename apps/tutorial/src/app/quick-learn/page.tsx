import Image from "next/image";
import React from "react";
import Link from "next/link";
import { QUICKLEARN_TUTORIALS } from "@programmer/constants";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { ChevronRight } from "lucide-react";

export default async function QuickLearnHomePage() {
  return (
    <div className="flex justify-center items-center w-full p-5  ">
      <div className="default_page_width my-16">
        <h1 className="heading_default">Quick Learn</h1>
        <p className="text-read_1 font-medium text-text-color_2 mt-5">
          Level up your learning with bite-sized lessons designed to help you
          grasp complex topics quickly. Perfect for curious minds and ambitious
          learners.
        </p>
        <div className="mt-24 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] :grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  gap-3">
          {QUICKLEARN_TUTORIALS.map((blog, i) => {
            return (
              <Link key={i} href={`/quick-learn/${blog.slug}`}>
                <div className="w-full h-[200px] bg-background-color_925C flex flex-col justify-between rounded-[15px] group relative overflow-hidden border border-background-color_850C">
                  <div
                    className={`absolute inset-0 z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--background-color-800C),transparent_1px),linear-gradient(to_bottom,var(--background-color-800C),transparent_1px)] bg-[size:24px_24px]`}
                  ></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-background-color_900C to-background-color_925C z-[11]"></div>
                  <div
                    className={`${blog.color} w-[60px] h-[60px] rounded-full absolute top-0 left-0 blur-[80px] z-10`}
                  ></div>

                  <div className="px-5 pt-5 relative  z-20 flex-shrink-0">
                    <div className="w-[50px] h-[50px] rounded bg-background-color_850C shadow-md flex justify-center items-center">
                      <Image
                        src={`/color/${blog.icon}`}
                        width={100}
                        height={100}
                        alt="icon"
                        className={`w-[30px] h-[30px] group-hover:quick_learn_icon transition-all duration-100`}
                      />
                    </div>
                  </div>
                  <div className=" px-5  relative z-20 h-fit flex-shrink-0 pb-5">
                    <h2 className="text-[25px]  font-medium two_line_ellipsis text-text-color_1">
                      {blog.label}
                    </h2>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-read_1 text-text-color_2 group-hover:text-text-color_1 transition-colors">
                        Learn
                      </p>
                      <ChevronRight
                        size={LUCIDE_DEFAULT_ICON_SIZE}
                        className="text-text-svg_default_color group-hover:text-text-color_1 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
