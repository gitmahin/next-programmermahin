"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useInstantSearch } from "react-instantsearch";
import { useDebounceCallback } from 'usehooks-ts'
import { CPP_TUTORIALS, getTutorialsByKey, TutorialEnums, TutorialNavItemType } from '@programmer/constants'

export default function NoResults() {
  const [tutoPath, setTutoPath] = useState("")
  const [tutoList, setTutoList] = useState<TutorialNavItemType>({})
  const path_name = usePathname()
  const debounced = useDebounceCallback(setTutoPath, 300)
  const { indexUiState } = useInstantSearch();

  useEffect(() => {
    debounced(`${path_name.split("/")[1]}`)
  }, [indexUiState.query])

  useEffect(() => {
    const oneTutorial = getTutorialsByKey[tutoPath as TutorialEnums]
    setTutoList(oneTutorial)
  }, [tutoPath])

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="pt-10 bg-gradient-to-b from-background-color_925C">

        <h3 className="text-wrap text-[20px] font-medium text-center">
          
          <span className="text-text-color_2">
           <span className="text-text-color_3">
            No Results For
          </span> "{indexUiState.query}"
          </span>
        </h3>
      </div>
      <div className="mt-10 w-full p-3 pt-0">
        <div className="w-full border-border-color_800C rounded-tiny overflow-hidden border">
          <div className="py-2 px-3 w-full bg-background-color_925C">
            <span className="text-read_1 font-medium text-text-color_3">Navigate to</span>
          </div>
          <div>
            <div>
              {
                Object.entries(tutoList || {}).map(([key, value], i) => {
                  const [firstItem] = value.items
                  return <div key={i}>
                    <p>{key}</p>
                    <div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
