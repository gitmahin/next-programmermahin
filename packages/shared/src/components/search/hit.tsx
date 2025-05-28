"use client";

import Link from "next/link";
import { Highlight } from "react-instantsearch";
import { AlgoliaIndexType } from "../../services";
import {
  setSearchMobInfoOpen,
  setSearchMetaInfo,
  useSearchMobInfoDispatch,
  useSliceDispatch,
  useSliceSelector,
  searchMetaInfoActiveKeyValue,
} from "../../redux";
import { LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { ChevronRight, Text } from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

interface HitProps {
  hit: {
    label: string;
    slug: string;
    basepath: string
    desc: string;
    onthispage: AlgoliaIndexType[];
    objectID: string;
    __position: number;
    __queryID: string;
  };
}

export default function Hit({ hit }: HitProps) {
  const path_name = usePathname();
  const dispatch = useSliceDispatch();
  const searchMobInfoDispatch = useSearchMobInfoDispatch();
  const searchMetaInfoActiveKey = useSliceSelector(
    searchMetaInfoActiveKeyValue
  );
  const handleMouseHover = (
    title: string,
    desc: string,
    slug: string,
    onThisPageData: AlgoliaIndexType[],
    navigationText: string[],
    activeKey: string
  ) => {
    if (!setSearchMetaInfo) return;
    dispatch(
      setSearchMetaInfo({
        title,
        desc,
        slug,
        onThisPage: onThisPageData,
        navigationText,
        activeKey,
      })
    );
  };

  const handleMobShowSearchMetaInfoClicked = () => {
    if (!setSearchMobInfoOpen) return;
    searchMobInfoDispatch(setSearchMobInfoOpen(true));
  };

  const checkoutCurrentRoute = (slug: string) => {
    if (slug === path_name) {
      toast.message("Already in the same route!");
    }
  };

  return (
    <Link
      href={`${hit.basepath}/${hit.slug}`}
      onClick={() => checkoutCurrentRoute(`/${hit.slug}`)}
      className="w-full"
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) {
          handleMouseHover(
            hit.label,
            hit.desc,
            hit.slug,
            hit.onthispage,
            [
              `${hit.slug.split("/")[0]?.replace(/^\w/, (c) => c.toUpperCase())}`,
              `${hit.slug
                .split("/")[1]
                ?.replace(/^\d+-/, "")
                .replace(/-/g, " ")
                .replace(/^\w/, (c) => c.toUpperCase())}`,
            ],
            hit.objectID.toString()
          );
        }
      }}
    >
      <li
        className={`w-full flex justify-between items-center list-none group p-3 ${searchMetaInfoActiveKey === hit.objectID.toString() && "bg-background-color_800C"} hover:bg-background-color_800C transition-colors rounded-tiny`}
      >
        <div className="flex justify-start items-center gap-3">
          <div className="flex-shrink-0 bg-background-color_925C w-[30px] h-[30px] rounded-tiny flex justify-center items-center">
            <Text
              size={LUCIDE_DEFAULT_ICON_SIZE}
              className="text-text-svg_default_color"
            />
          </div>
          <div>
            <p className="text-read_2 one_line_ellipsis font-medium text-text-color_4">
              <Highlight
                classNames={{
                  highlighted: "bg-transparent text-pm_purple-700",
                }}
                attribute="label"
                hit={hit}
              />
            </p>
            <p className="text-text-color_3 overflow-hidden font-medium text-read_3 mt-1 flex justify-start items-center gap-[2px]">
              <span className="one_line_ellipsis">
                {hit.slug.split("/")[0]?.replace(/^\w/, (c) => c.toUpperCase())}
              </span>
              <ChevronRight size={15} className="text-text-color_3" />
              <span className="one_line_ellipsis">
                {hit.slug
                  .split("/")[1]
                  ?.replace(/^\d+-/, "")
                  .replace(/-/g, " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </span>
            </p>
          </div>
        </div>
        <div
          className="pointer-events-none flex-shrink-0 show_search_meta_info_btn"
          onClick={(e) => {
            handleMobShowSearchMetaInfoClicked();
            handleMouseHover(
              hit.label,
              hit.desc,
              hit.slug,
              hit.onthispage,
              [
                `${hit.slug.split("/")[0]?.replace(/^\w/, (c) => c.toUpperCase())}`,
                `${hit.slug
                  .split("/")[1]
                  ?.replace(/^\d+-/, "")
                  .replace(/-/g, " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}`,
              ],
              hit.objectID.toString()
            );
            e.preventDefault();
          }}
        >
          <ChevronRight
            size={LUCIDE_DEFAULT_ICON_SIZE}
            className="text-text-color_3"
          />
        </div>
      </li>
    </Link>
  );
}
