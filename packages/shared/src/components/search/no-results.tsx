"use client";

import Link from "next/link";
import { useInstantSearch } from "react-instantsearch";

export default function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <div className="p-3 w-full h-[calc(100%-50px)] fx-flex-center flex-col">
      <div className="fx-flex-center gap-2 max-w-[500px] w-full ">
        {/* <SadIcon width={24} height={24} className="flex-shrink-0" /> */}
        <p className="text-[20px] font-medium text-text-color_2 one-line-ellipsis">
          No results for <q>{indexUiState.query}</q>.
        </p>
      </div>

      <div className="max-w-[500px] w-full mt-10">
        <p className="text-[14px] text-text-color_3 font-medium">
          Navigate to:
        </p>
        <ul className=" w-full mt-1 border border-border-color_1 overflow-hidden  fx-rounded">
          {/* Fluctux is an advanced open source work and project management platform where users can join both public & private organizations, collaborate in teams, make friends, and share their daily work—all in one place. */}
          <Link href={""}>
            <li className="w-full p-3 fx-flex-between-ic gap-3 border-b border-border-color_1 text-text-color_2 hover:text-[var(--foreground)]  hover:bg-background-color_3">
              <div className="fx-flex-cl gap-2">
                {/* <UserIcon /> */}
                <p>Quickstart for Users</p>
              </div>
              <div className="w-[20px] flex-shrink-0">
                {/* <RightArrowIcon /> */}
              </div>
            </li>
          </Link>
          <Link href={""}>
            <li className="w-full p-3 fx-flex-between-ic gap-3 text-text-color_2 hover:text-[var(--foreground)]  hover:bg-background-color_3">
              <div className="fx-flex-cl gap-2">
                {/* <CodeIcon /> */}
                <p>Quickstart for Developers</p>
              </div>
              <div className="w-[20px] flex-shrink-0">
                {/* <RightArrowIcon /> */}
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
