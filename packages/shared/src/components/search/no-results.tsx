"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useInstantSearch } from "react-instantsearch";
import { useDebounceCallback } from "usehooks-ts";
import {
  CPP_TUTORIALS,
  getTutorialsByKey,
  TutorialEnums,
  TutorialNavItemType,
  TUTORIALS_ICON,
} from "@programmer/constants";
import { capitalizeFirstLetter } from "../../utils";
import { ChevronRight, FileText } from "lucide-react";

interface FullTutorialNavItemType {
  [key: string]: TutorialNavItemType;
}

export default function NoResults() {
  const [tutoPath, setTutoPath] = useState("");
  const [fullTutoList, setFullTutoList] = useState<FullTutorialNavItemType>({});
  const path_name = usePathname();
  const debounced = useDebounceCallback(setTutoPath, 300);
  const { indexUiState } = useInstantSearch();

  useEffect(() => {
    debounced(`${path_name.split("/")[1]}`);
  }, [indexUiState.query]);

  useEffect(() => {
    const oneTutorial = getTutorialsByKey;
    setFullTutoList(oneTutorial);
  }, [tutoPath]);

  return (
    <div className="w-full h-[calc(100%-45px)] overflow-y-auto">
      <div className="pt-10 bg-gradient-to-b from-[#ff49491f]">
        <h3 className="text-wrap text-[20px] font-medium text-center">
          <span className="text-text-color_3">No Results For</span>{" "}
          <span className="text-red-500">{indexUiState.query}</span>
        </h3>
      </div>
      <div className="mt-10 w-full p-3 pt-0">
        <div className="w-full border-border-color_800C rounded-tiny overflow-hidden border">
          <div className="py-2 px-3 w-full bg-background-color_925C border-border-color_800C border-b">
            <span className="text-read_1 font-medium text-text-color_3">
              Navigate to
            </span>
          </div>
          <div>
            <div>
              {Object.entries(fullTutoList || {})
                .sort(([a], [b]) => {
                  if (a === tutoPath) return -1;
                  if (b === tutoPath) return 1;
                  return 0;
                })
                .map(([key, value], i) => {
                  return (
                    <div
                      key={i}
                      className="px-3 py-3 border-b border-border-color_800C"
                    >
                      <div className="flex justify-start items-center gap-2">
                        <Image
                          src={`${TUTORIALS_ICON[key as TutorialEnums]?.svgPath ?? ""}`}
                          width={100}
                          height={100}
                          alt="icon"
                          className={`w-[16px] h-[16px] filter brightness-0 dark:invert`}
                        />
                        <p className="text-text-color_1 text-read_2 font-medium">
                          {capitalizeFirstLetter(key)}
                        </p>
                      </div>
                      <div className="mt-1">
                        {Object.entries(value).map(
                          ([childKey, childValue], j) => {
                            const [eachFirstItem] = childValue.items;
                            return (
                              <>
                                {!eachFirstItem?.dirItems ? (
                                  <Link
                                    href={`/${key}/${childValue.slug}/${eachFirstItem?.slug}`}
                                    key={j}
                                  >
                                    <div className="py-1 px-2 rounded-tiny hover:bg-background-color_900C group transition-all">
                                      <div className="flex justify-start items-center gap-1 pl-4">
                                        <ChevronRight
                                          size={15}
                                          className="hidden group-hover:block group-hover:text-text-color_1 font-medium"
                                        />
                                        <p className="text-text-color_2  text-read_2 font-medium one_line_ellipsis group-hover:text-pm_purple-700">
                                          {eachFirstItem?.label}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ) : (
                                  Object.entries(eachFirstItem?.dirItems).map(
                                    ([dirkey, dirValue], j) => {
                                      return (
                                        <Link
                                          href={`/${key}/${childValue.slug}/${dirValue.slug}`}
                                          key={j}
                                        >
                                          <div className="py-1 px-2 rounded-tiny hover:bg-background-color_900C group transition-all">
                                            <div className="flex justify-start items-center gap-1 pl-4">
                                              <ChevronRight
                                                size={15}
                                                className="hidden group-hover:block group-hover:text-text-color_1 font-medium"
                                              />
                                              <p className="text-text-color_2  text-read_2 font-medium one_line_ellipsis group-hover:text-pm_purple-700">
                                                {dirkey}
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      );
                                    }
                                  )
                                )}
                              </>
                            );
                          }
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
