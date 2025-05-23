"use client";
import { RootState } from "@/redux/store";
import { useActiveAnchor, useAnchorize } from "@programmer/hooks";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { AlignLeft, TableOfContents, X } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


export default function ContentAsideNav() {

  const [openAside, setOpenAside] = useState<boolean>(false);
  const htmlContent = useSelector(
    (state: RootState) => state.processedContent.content
  );
  const { anchors } = useAnchorize(htmlContent);
  const { activeHash, handleHashChange, moveTabToAnchor, handleHashClick, anchorListsRef, tabRef } = useActiveAnchor(htmlContent);

 





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
        <div className="w-full h-full overflow-y-auto custom_scrollbar tuto_toc_main">
          <div className="flex justify-start items-center sticky top-0 pb-4 px-2  bg-background-color_950C gap-2">
            <AlignLeft
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-color_1"
            />
            <span className="text-read_1 font-medium ">On this page</span>
          </div>
          <ul className="w-full leading-7 pr-5 relative">
            {anchors.map((item, i: number) => {
              return (
                <Link href={`#${item.anchor}`} key={i} className="">
                  <li
                    ref={(el) => {
                      anchorListsRef.current[item.anchor] = el;
                    }}
                    onClick={() => {
                      handleHashClick(`#${item.anchor}`);
                      moveTabToAnchor(
                        anchorListsRef.current[item.anchor] as HTMLElement
                      );
                    }}
                    className={`one_line_ellipsis px-2 text-read_2 ${activeHash === `#${item.anchor}` ? "text-pm_purple-700 font-medium" : "text-text-color_2"}`}
                    style={{ marginLeft: `${(item.level - 2) * 10}px` }}
                  >
                    {item.text}
                  </li>
                </Link>
              );
            })}
            <div
              ref={tabRef}
              className="absolute w-full transition-all duration-200 h-[28px] bg-background-color_850C left-0 top-0 rounded-tiny -z-10"
            ></div>
          </ul>
        </div>
      </aside>
    </>
  );
}
