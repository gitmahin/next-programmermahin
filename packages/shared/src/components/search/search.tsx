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
import {
  SearchOnThePageOnValue,
  SearchOnThePagetitleValue,
  useSliceSelector,
} from "../../redux";

export const Search = () => {
  const searchTitleSelector = useSliceSelector(SearchOnThePagetitleValue);
  const searchDescSelector = useSliceSelector(SearchOnThePagetitleValue);
  const searchOnThePageSelector = useSliceSelector(SearchOnThePageOnValue);
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
                <div className="h-full">
                  <div className="overflow-y-auto h-[calc(100%-86px)] flex justify-center items-start gap-2 pl-2 bg-transparent border-none">
                    <InfiniteHits hitComponent={Hit} />
                    <div className="w-[400px] flex-shrink-0 h-full border bg-red-500 sticky top-0">
                      {searchTitleSelector}
                      {searchDescSelector}
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
