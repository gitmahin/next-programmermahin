"use client";
import { getTutorialsByKey, QUICKLEARN_TUTORIALS } from "@programmer/constants";
import { PMButton, ThemeModeToggoler } from "@programmer/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterLinkType {
  label: string;
  slug: string;
}

const TUTORIAL_BASE_PATH = `${process.env.NEXT_PUBLIC_TUTORIAL_BASE_PATH}`;

const SUPPORTS: FooterLinkType[] = [
  {
    label: "Developer Docs",
    slug: "https://developer.programmermahin.com",
  },
  {
    label: "Community",
    slug: "/community",
  },
  {
    label: "Discord",
    slug: "https://discord.com/invite/yDjXa9hu2P",
  },
];

const FOOTER_LABELS: FooterLinkType[] = [
  {
    label: "Privacy Policy",
    slug: "legals/privacy-policy",
  },
  {
    label: "Terms",
    slug: "legals/terms",
  },
  {
    label: "DMCA",
    slug: "legals/dmca",
  },
  {
    label: "Contact",
    slug: "contact",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-fit">
      <div className="w-full h-[300px] bg-background-color_950C border-t border-border-color_800C pt-8 px-5">
        <div className="layout_max_1200 mx-auto">
          <div className="w-full flex justify-between items-center pt-3 pb-5">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <Image
                src={"/my_pic_cartoon.jpg"}
                width={300}
                height={300}
                alt="programmermahin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex justify-center w-fit items-center gap-3 max-[460px]:flex-col max-[460px]:items-start ">
              <h5 className="text-read_2 font-medium text-text-color_2">
                THE DEVELOPER NEWSLETTER
              </h5>
              <PMButton className="px-5 py-1 rounded transition-colors">
                <span className="text-read_1 text-text-zinc_white font-medium">
                  Subscribe
                </span>
              </PMButton>
            </div>
          </div>
          <div className=" pt-5 pb-5">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8">
              <div>
                <h6 className="text-read_2 text-text-color_3 font-medium">
                  TUTORIALS
                </h6>
                <ul className="mt-4 leading-7">
                  {Object.entries(getTutorialsByKey).map(
                    ([tutorialKey, tutorialValue], i) => {
                      // Get all chapters (chapter objects)
                      const chapters = Object.values(tutorialValue);
                      if (chapters.length === 0) return null;

                      const firstChapter = chapters[0];
                      const chapterSlug = firstChapter?.slug;

                      // Handle flat or nested dirItems in first chapter
                      const firstItem = firstChapter?.items?.[0];
                      let lessonSlug = firstItem?.slug;

                      if (!lessonSlug) return null;

                      return (
                        <li
                          key={i}
                          className="text-read_2 text-text-color_2 font-medium hover:text-text-color_1 transition-colors"
                        >
                          <Link
                            href={`${TUTORIAL_BASE_PATH}/${tutorialKey}/${chapterSlug}/${lessonSlug}`}
                            key={i}
                            className="text-text-color_2  hover:text-text-color_1 transition-colors"
                          >
                            {tutorialKey.charAt(0).toUpperCase() +
                              tutorialKey.slice(1)}
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>

              <div>
                <h6 className="text-read_2 text-text-color_3 font-medium">
                  QUICK LEARNS
                </h6>
                <ul className="mt-4 leading-7">
                  {QUICKLEARN_TUTORIALS.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="text-read_2 text-text-color_2 font-medium hover:text-text-color_1 transition-colors"
                      >
                        <Link
                          href={`${TUTORIAL_BASE_PATH}/quick-learn/${item.slug}`}
                          className="text-text-color_2  hover:text-text-color_1 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h6 className="text-read_2 text-text-color_3 font-medium">
                  SUPPORT
                </h6>
                <ul className="mt-4 leading-7">
                  {SUPPORTS.map((item, i) => {
                    return (
                      <li key={i} className="text-read_2 font-medium ">
                        <Link
                          href={`${item.slug}`}
                          className="text-text-color_2  hover:text-text-color_1 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className=" pb-8 pt-5 flex justify-between items-center footer-bottom ">
            <p className="text-read_2 font-medium text-text-color_3">
              programmermahin.com © <span>{currentYear}</span>
            </p>
            <div className="flex justify-center items-center w-fit gap-5 ">
              <ul className="flex justify-center w-fit items-center gap-5 flex-shrink-0 max-[530px]:flex-wrap ">
                {FOOTER_LABELS.map((item, i) => {
                  return (
                    <li key={i} className="text-read_2">
                      <Link
                        href={`/${item.slug}`}
                        className="text-text-color_3 font-medium text-read_3 hover:text-text-color_1 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="max-[520px]:hidden">
                <ThemeModeToggoler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
