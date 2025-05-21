"use client";
import { RootState } from "@/redux/store";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { AlignLeft, TableOfContents, X } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import toc from "toc";
import slugify from "slugify";
import { AnchorsType } from "@programmer/types";

export default function ContentAsideNav() {
  const [anchors, setAnchors] = useState<AnchorsType[]>([]);
  const [activeHash, setActiveHash] = useState<string>("");
  const [openAside, setOpenAside] = useState<boolean>(false);
  const anchorListsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const tabRef = useRef<HTMLDivElement | null>(null);

  const htmlContent = useSelector(
    (state: RootState) => state.processedContent.content
  );

  const moveTabToAnchor = useCallback(
    (btn: HTMLElement) => {
      if (!tabRef.current) return;
      tabRef.current.style.height = `${btn.offsetHeight}px`;
      tabRef.current.style.top = `${btn.offsetTop}px`;
    },
    [activeHash]
  );

  useEffect(() => {
    if (htmlContent) {
      const { headers } = toc.anchorize(htmlContent, []);
      const parsedAnchors = headers.map((header: AnchorsType) => ({
        ...header,
        anchor: slugify(header.text || "", {
          replacement: "-",
          lower: true,
          strict: true,
          trim: true,
        }),
      }));
      setAnchors(parsedAnchors);
    } else {
      setAnchors([]);
    }
  }, [htmlContent]);

  const handleHashChange = () => {
    setActiveHash(window.location.hash);
  };

  useEffect(() => {
    // Initialize the active hash when the component mounts
    handleHashChange();

    // Listen for hash change events
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (!htmlContent) return;

    const observerTimeout = setTimeout(() => {
      const headings = document.querySelectorAll(
        "h2[id], h3[id], h4[id], h5[id], h6[id]"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleHeadings = entries.filter(
            (entry) => entry.isIntersecting
          );
          if (visibleHeadings.length > 0) {
            const sorted = visibleHeadings.sort(
              (a, b) =>
                a.target.getBoundingClientRect().top -
                b.target.getBoundingClientRect().top
            );
            const activeId = sorted?.[0]?.target.id;
            if (activeId) {
              setActiveHash(`#${activeId}`);
              if (anchorListsRef.current) {
                moveTabToAnchor(
                  anchorListsRef.current[activeId] as HTMLElement
                );
              }
            }
          }
        },
        {
          rootMargin: "0px 0px -90% 0px", // Triggers earlier when scrolling down
          threshold: 0.2,
        }
      );

      headings.forEach((heading) => observer.observe(heading));

      return () => {
        headings.forEach((heading) => observer.unobserve(heading));
      };
    }, 100); // slight delay to ensure DOM is painted

    return () => clearTimeout(observerTimeout);
  }, [htmlContent]); // Re-run when htmlContent changes

  const handleHashClick = (hash: string) => {
    setActiveHash(hash);
  };

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
