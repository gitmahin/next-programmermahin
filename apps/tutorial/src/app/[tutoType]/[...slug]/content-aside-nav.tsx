"use client";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { AlignLeft, TableOfContents, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { generateTocFromMdx, useActiveHeading } from "react-mdxutils"

export default function ContentAsideNav({
  mdxContent,
}: {
  mdxContent: string;
}) {
  const anchors = generateTocFromMdx(mdxContent);
  const [openAside, setOpenAside] = useState<boolean>(false);
  const {
    handleActiveHeading,
    activeHeading,
    activeIndicatorRef,
    headingListRefs,
    asideRef,
  } = useActiveHeading(mdxContent);

  return (
    <>
      <PMButton
        variant="silent"
        onClick={() => setOpenAside(!openAside)}
        className="fixed backdrop-blur-lg z-10 top-16 right-4 p-2 border border-border-color_800C hidden justify-center items-center toc_open_btn"
        radius="tiny"
      >
        {openAside ? (
          <X size={LUCIDE_DEFAULT_ICON_SIZE} className="text-text-color_1" />
        ) : (
          <TableOfContents
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className={`text-text-svg_default_color`}
          />
        )}
      </PMButton>
      <aside
        className={`w-[270px] h-screen flex-shrink-0 sticky pt-[70px] overflow-hidden top-0 tuto_cont_aside transition-all ${openAside && "right-[0_!important]"}`}
      >
        <div
          ref={asideRef}
          className="w-full h-full overflow-y-auto custom_scrollbar tuto_toc_main"
        >
          <div className="flex justify-start items-center sticky top-0 pb-4 px-2  bg-background-color_950C z-[3] gap-2">
            <AlignLeft
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-color_1"
            />
            <span className="text-read_1 font-medium ">On this page</span>
          </div>
          <ul className="w-full leading-7 pr-5 relative">
            {anchors.map((item, i: number) => {
              return (
                <Link href={`#${item.slug}`} key={i} className="">
                  <li
                    ref={(el) => {
                      headingListRefs.current[item.slug] = el;
                    }}
                    onClick={() => {
                    
                      handleActiveHeading(
                        headingListRefs.current[item.slug] as HTMLElement, `#${item.slug}`
                      );
                    }}
                    className={`one_line_ellipsis w-fit px-2 text-read_2 ${activeHeading === `#${item.slug}` ? "text-pm_purple-600 font-medium" : "text-text-color_2"}`}
                    style={{ marginLeft: `${(item.level - 2) * 10}px` }}
                  >
                    {item.content}
                  </li>
                </Link>
              );
            })}
            <div
              ref={activeIndicatorRef}
              className="absolute transition-all duration-200 h-[28px] bg-background-color_850C left-0 top-0 rounded-tiny -z-10"
            ></div>
          </ul>
        </div>
      </aside>
    </>
  );
}
