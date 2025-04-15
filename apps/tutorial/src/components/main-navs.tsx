import { MAIN_NAV_TUTORIALS } from "@/constants";
import { LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainNavs() {
  return (
    <nav className="px-4 w-full ">
      <div className=" w-full border-t border-border-color_800C pt-4">
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-center items-center border rounded-tiny border-border-color_800C p-[3px] bg-gradient-to-tr from-background-color_900C to-background-color_800C">
            <GraduationCap
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color"
            />
          </div>
          <span className="text-read_2 text-text-color_3 font-medium">
            Courses
          </span>
        </div>
        <ul className="pt-2 leading-8">
          {MAIN_NAV_TUTORIALS.map((item, i) => {
            return (
              <Link key={i} href={`/${item.slug}`}>
                <li className="flex justify-start items-center gap-3 px-3 py-1  hover:bg-background-color_800C rounded-tiny transition-colors duration-150">
                  <div>
                    <Image
                      src={`${item.icon ?? ""}`}
                      width={100}
                      height={100}
                      alt="icon"
                      className={`w-[18px] h-[18px] filter brightness-0 dark:invert`}
                    />
                  </div>
                  <span className="text-read_2 text-text-color_4 font-medium">
                    {item.label}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
