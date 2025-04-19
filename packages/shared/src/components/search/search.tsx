"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  LUCIDE_DEFAULT_ICON_SIZE,
  PMButton,
} from "@programmer/ui";
import React, { useEffect, useState } from "react";
import {
  Calculator,
  Calendar,
  ChevronRight,
  CreditCard,
  SearchIcon,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { InstantSearch, SearchBox } from "react-instantsearch";
import { searchAlgolia } from "../../helpers/algolia/search.helper";
import NoResultsBoundary from "./no-results-boundary";
import NoResults from "./no-results";
import DocCustomRefinementList from "./doc-custom-refinement";
import Hit from "./hit";
import { IndexTutorialsType, TUTORIAL_INDEX_NAME } from "../../services";
import { InfiniteHits } from "./infinite-hit";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import {
  SearchOnThePageValue,
  SearchOnThePagetitleValue,
  useSliceSelector,
  SearchOnThePageNavigationTextValue,
  SearchOnThePageSlugValue,
} from "../../redux";
import Link from "next/link";

export const Search = () => {
  const path_name = usePathname();
  const searchTitleSelector = useSliceSelector(SearchOnThePagetitleValue);
  const searchDescSelector = useSliceSelector(SearchOnThePagetitleValue);
  const searchOnThePageSelector = useSliceSelector(SearchOnThePageValue);
  const searchSlugSelector = useSliceSelector(SearchOnThePageSlugValue);
  const searchNavigationTextSelector = useSliceSelector(
    SearchOnThePageNavigationTextValue
  );
  const [open, setOpen] = useState(false);
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

  return (
    <div>
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
        <DialogContent className=" max-w-[900px] h-[600px] w-full p-2">
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
                    className={`overflow-y-auto h-[calc(100%-86px)] flex justify-center items-start ${searchTitleSelector === "" ? "gap-0" : "gap-2"}  pl-2 bg-transparent border-none`}
                  >
                    <InfiniteHits hitComponent={Hit} />
                    <div
                      className={`flex-shrink-0 h-full p-2 pl-0 sticky top-0 transition-all duration-300 ${searchTitleSelector === "" ? "w-0 overflow-hidden" : "w-[400px]"}`}
                    >
                      <div
                        className={`w-full h-full rounded bg-background-color_925C`}
                      >
                        <div className="p-4 pb-0">
                          <div className="w-full flex justify-center items-center">
                            {searchNavigationTextSelector.map((item, i) => {
                              return (
                                <p
                                  key={i}
                                  className="flex justify-center items-center gap-1 w-fit "
                                >
                                  <span className="text-text-color_2 text-read_3">
                                    {item}
                                  </span>
                                  {i <
                                    searchNavigationTextSelector.length - 1 && (
                                    <ChevronRight
                                      size={15}
                                      className="text-text-color_3"
                                    />
                                  )}
                                </p>
                              );
                            })}
                          </div>
                          <h3 className="text-center text-[20px] font-medium mt-1 one_line_ellipsis">
                            {searchTitleSelector}
                          </h3>
                        </div>

                        <p className="text-read_2 text-text-color_4 three_line_ellipsis mt-5 px-4 ">
                          {searchDescSelector}
                        </p>
                        <div className="px-4 mt-5">
                          <p className="uppercase font-geist_mono font-medium text-read_3">
                            On This Page
                          </p>
                          <ul className="mt-2 leading-7">
                            {searchOnThePageSelector.map((item, i) => {
                              return (
                                <Link
                                  href={`/${searchSlugSelector}#${item.slug}`}
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
    </div>
  );
};
