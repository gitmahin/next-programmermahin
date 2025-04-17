"use client";
import { RootState } from "@/redux/store";
import { useGetAnchors, useProcessMDX } from "@programmer/hooks";
import { LUCIDE_DEFAULT_ICON_SIZE, PMButton } from "@programmer/ui";
import { AlignLeft, TableOfContents, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toc from "toc";
import slugify from "slugify";

interface AnchorsType {
  level: number;
  text: string;
  anchor: string;
}

export default function ContentAsideNav() {
  const [anchors, setAnchors] = useState<AnchorsType[]>([]);
  const [activeHash, setActiveHash] = useState<string>("");
  const [openAside, setOpenAside] = useState<boolean>(false);

  const htmlContent = useSelector(
    (state: RootState) => state.processedContent.content
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
            }
          }
        },
        {
          rootMargin: "0px 0px -70% 0px", // Triggers earlier when scrolling down
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
        <PMButton variant="silent" onClick={() => setOpenAside(!openAside)} className="fixed backdrop-blur-lg z-10 top-16 right-4 p-2 border border-border-color_800C flex justify-center items-center" radius="tiny">
          {
            openAside ? <X size={LUCIDE_DEFAULT_ICON_SIZE} className="text-text-color_1" /> :
          <TableOfContents size={LUCIDE_DEFAULT_ICON_SIZE} className={`text-text-svg_default_color`} />
          }
        </PMButton>
    <aside className={`w-[300px] h-[calc(100vh-70px)] overflow-y-auto sticky top-[70px] tuto-aside-nav tuto_cont_aside transition-all ${openAside && "right-[0_!important]"}`}>
      <div className="w-full">
        <div className="flex justify-start items-center sticky top-0 pb-4 bg-background-color_950C gap-2">
          <AlignLeft
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-color_1"
            />
          <span className="text-read_1 font-medium">On this page</span>
        </div>
        <ul className="w-full leading-7 pr-5">
          {anchors.map((item, i: number) => {
            return (
              <Link href={`#${item.anchor}`} key={i} className="">
                <li
                  onClick={() => handleHashClick(`#${item.anchor}`)}
                  className={`one_line_ellipsis text-read_2 ${activeHash === `#${item.anchor}` ? "text-pm_purple-700 font-medium" : "text-text-color_2"}`}
                  style={{ marginLeft: `${(item.level - 2) * 10}px` }}
                  >
                  {item.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </aside>
          </>
  );
}
