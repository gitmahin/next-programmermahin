"use client";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { TableOfContents, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { generateTocFromMdx, useActiveHeading } from "react-mdxutils";

export const QuickLearnAsideNav = ({
  matterContent,
}: {
  matterContent: string;
}) => {

  const anchors = generateTocFromMdx(matterContent);
  const [openAside, setOpenAside] = useState<boolean>(false);
  // const nestedAnchors = nestAnchors(anchors);
  // console.log(nestedAnchors);
  const {
    handleActiveHeading,
    activeHeading,
    activeIndicatorRef,
    headingListRefs,
    asideRef,
  } = useActiveHeading(matterContent);

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
          <div></div>
          <ul className=" leading-7 relative pb-16">
            {anchors.map((anchor, i) => {
              return (
                <Link href={`#${anchor.slug}`} key={i}>
                  <li
                    ref={(el) => {
                      headingListRefs.current[anchor.slug] = el;
                    }}
                    onClick={() => {
                      handleActiveHeading(
                        headingListRefs.current[anchor.slug] as HTMLElement,
                        `#${anchor.slug}`
                      );
                    }}
                    className={`one_line_ellipsis px-3 w-fit text-read_2 ${activeHeading === `#${anchor.slug}` ? "text-pm_purple-600 font-medium" : "text-text-color_2"}`}
                    style={{ marginLeft: `${(anchor.level - 2) * 10}px` }}
                  >
                    {anchor.content}
                  </li>
                </Link>
              );
            })}
            <div
              ref={activeIndicatorRef}
              className="absolute transition-all duration-200 h-[28px] bg-background-color_850C  top-0 rounded-tiny -z-10"
            ></div>
          </ul>
        </div>
      </aside>
    </>
  );
};
