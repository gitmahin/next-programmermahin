"use client";
import {
  Dialog,
  DialogContent,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
} from "@programmer/ui";
import React, { useEffect, useState } from "react";
import { ChevronRight, PanelRight, SearchIcon, X } from "lucide-react";
import { InstantSearch, SearchBox } from "react-instantsearch";
import { searchAlgolia } from "../../helpers/algolia/search.helper";
import NoResultsBoundary from "./no-results-boundary";
import NoResults from "./no-results";
import DocCustomRefinementList from "./doc-custom-refinement";
import Hit from "./hit";
import { TUTORIAL_INDEX_NAME } from "../../services";
import { InfiniteHits } from "./infinite-hit";
import { usePathname } from "next/navigation";
import {
  useSliceSelector,
  useSearchMobInfoSelector,
  searchMobInfoOpenValue,
  useSearchMobInfoDispatch,
  setSearchMobInfoOpen,
  searchMetaInfoValues,
  setSearchMetaInfo,
  useSliceDispatch,
} from "../../redux";
import Link from "next/link";

export const Search = () => {
  const path_name = usePathname();
  const searchMetaInfo = useSliceSelector(searchMetaInfoValues);
  const dispatch = useSliceDispatch();
  const [open, setOpen] = useState(false);
  const openSearchMobInfo = useSearchMobInfoSelector(searchMobInfoOpenValue);
  const searchMobInfoDispatch = useSearchMobInfoDispatch();

  const clearSearchMetaInfoOnClose = () => {
    if (!setSearchMetaInfo) return;
    dispatch(
      setSearchMetaInfo({
        title: "",
        desc: "",
        slug: "",
        onThisPage: [],
        navigationText: [],
        activeKey: "",
      })
    );
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path_name]);

  useEffect(() => {
    if (!open) {
      if (!setSearchMobInfoOpen) return;
      searchMobInfoDispatch(setSearchMobInfoOpen(false));
      clearSearchMetaInfoOnClose();
    }
  }, [open]);

  return (
    <>
      <PMButton
        onClick={() => setOpen(true)}
        variant="secondary"
        radius="tablet"
        className="px-2 fixed top-5 right-5 z-30 py-1 flex justify-center items-center gap-1 group searchTutorialRoot"
      >
        <SearchIcon
          size={LUCIDE_DEFAULT_ICON_SIZE}
          className="text-text-svg_default_color group-hover:text-text-color_1"
        />
        <span className="text-read_2 text-text-color_3">Search</span>
        <div className="bg-background-color_750C text-[12px] text-text-color_2 px-1 rounded-tiny ml-2 ">
          CTRL+k
        </div>
      </PMButton>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[950px] max-h-[650px] h-full w-full p-2 outline-none">
          <div className="w-full h-full overflow-hidden bg-background-color_950C border-border-color_800C border rounded">
            <InstantSearch
              searchClient={searchAlgolia}
              indexName={TUTORIAL_INDEX_NAME}
            >
              <SearchBox
                placeholder="Search documentation..."
                autoFocus={true}
                className="w-full border-b border-border-color_800C"
                classNames={{
                  form: "bg-transparent flex flex-row-reverse gap-2 w-full h-full pl-2 pr-2 border-none",
                  input:
                    "bg-transparent w-full h-[45px] border-none outline-none fx-flex-cl pr-[35px]",
                  loadingIndicator: "hidden",
                  loadingIcon: "hidden",
                  reset: "hidden",
                  resetIcon: "hidden",
                }}
                submitIconComponent={() => <SearchIcon />}
              />
              <NoResultsBoundary fallback={<NoResults />}>
                <div className="w-full border-b border-border-color_800C sticky top-[0px] left-0 h-[40px] flex justify-center items-center flex-shrink-0 z-10">
                  <DocCustomRefinementList sortBy={["name"]} attribute="type" />
                </div>
                <div className={`h-full`}>
                  <div
                    className={`overflow-y-auto h-[calc(100%-86px)] flex justify-center items-start ${searchMetaInfo.title === "" ? "gap-0" : "gap-2"}  pl-2 bg-transparent border-none search_result_wrapper ${openSearchMobInfo && "search_result_wrapper_opened"}`}
                  >
                    <InfiniteHits
                      hitComponent={Hit}
                      className={`${openSearchMobInfo && "w-0 overflow-hidden"}`}
                    />

                    <div
                      className={`flex-shrink-0 h-full p-2 pl-0 sticky top-0 transition-all duration-300 ${searchMetaInfo.title === "" ? "w-0 overflow-hidden" : "w-[400px]"} search_meta_info_tab ${openSearchMobInfo && "search_meta_info_tab_open"}`}
                    >
                      <div className="w-[30px] z-10 h-[30px] border rounded-tiny border-border-color_800C absolute top-4 left-2 bg-background-color_900C justify-center close_search_meta_info hidden items-center close">
                        <X
                          size={LUCIDE_DEFAULT_ICON_SIZE}
                          className={`text-text-svg_default_color`}
                        />
                      </div>
                      <div
                        className={`w-full h-full rounded bg-background-color_925C overflow-y-auto custom_scrollbar`}
                      >
                        <div className="p-4 pb-0">
                          <div className="w-full flex justify-center items-center">
                            {searchMetaInfo.navigationText.map((item, i) => {
                              return (
                                <p
                                  key={i}
                                  className="flex justify-center items-center gap-1 w-fit "
                                >
                                  <span className="text-text-color_2 text-read_3">
                                    {item}
                                  </span>
                                  {i <
                                    searchMetaInfo.navigationText.length -
                                      1 && (
                                    <ChevronRight
                                      size={15}
                                      className="text-text-color_3"
                                    />
                                  )}
                                </p>
                              );
                            })}
                          </div>
                          <h3 className="text-center text-[20px] font-medium mt-1 two_line_ellipsis">
                            {searchMetaInfo.title}
                          </h3>
                        </div>
                        <div className="text-read_2 text-text-color_4 three_line_ellipsis mt-5 px-4 ">
                          {searchMetaInfo.desc}
                        </div>
                        <div className="px-4 mt-5">
                          <p className="uppercase font-geist_mono font-medium text-read_3 text-text-color_3">
                            On This Page
                          </p>
                          <ul className="mt-2 leading-7 mb-3">
                            {searchMetaInfo.onThisPage.map((item, i) => {
                              return (
                                <Link
                                  href={`/${searchMetaInfo.slug}#${item.slug}`}
                                  key={i}
                                >
                                  <li className="grid grid-cols-[25px_1fr]  text-read_2 group">
                                    <span className="text-text-color_3 group-hover:text-text-color_1">
                                      {i + 1}.
                                    </span>
                                    <span className="text-text-color_2 group-hover:text-pm_purple-700">
                                      {item.label}
                                    </span>
                                  </li>
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NoResultsBoundary>
            </InstantSearch>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
