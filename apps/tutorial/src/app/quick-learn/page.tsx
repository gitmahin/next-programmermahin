"use client";
import { useAppDispatch } from "@/hooks/redux.hook";
import { setQuickLearnNavitems } from "@/redux/quicklearn/quickLearnNavItemsSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function QuickLearnHomePage() {
  const path_name = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!setQuickLearnNavitems) return;
    dispatch(setQuickLearnNavitems([]));
  }, [path_name]);
  return (
    <div className="flex justify-center items-center w-full p-5  ">
      <div className="default_page_width my-16">
        <h1 className="heading_default">Quick Learn</h1>
        <p className="text-read_1 font-medium text-text-color_2 mt-5">
          Level up your learning with bite-sized lessons designed to help you
          grasp complex topics quickly. Perfect for curious minds and ambitious
          learners.
        </p>
        <div className="mt-24 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-3">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-full h-[250px] bg-background-color_925C rounded group relative overflow-hidden border border-background-color_900C"
              >
                
                  <div className="absolute inset-0 z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--border-color-800C),transparent_1px),linear-gradient(to_bottom,var(--border-color-800C),transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="absolute w-full h-full bg-gradient-to-br from-transparent via-background-color_900C to-background-color_925C z-10"></div>

              
                <div className="px-5 pt-5 relative z-20">
                  <div className="w-[50px] h-[50px] rounded bg-background-color_900C shadow-md flex justify-center items-center">
                    <Image
                      src={"/color/html.svg"}
                      width={100}
                      height={100}
                      alt="icon"
                      className={`w-[30px] h-[30px] group-hover:quick_learn_icon transition-all duration-100`}
                    />
                  </div>
                </div>
                <div className="mt-8 px-5  relative z-20">
                  <h2 className="text-[18px]  font-medium two_line_ellipsis text-text-color_1">Learn HTML Basic to Advance</h2>
                  <p className="three_line_ellipsis text-read_2 mt-2 text-text-color_2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eligendi. Atque molestiae vel quis fuga, tenetur dicta ipsa tempora maiores vitae minus, voluptates temporibus ex iste facere. Aperiam, id voluptatibus!</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
