"use client";
import { ChevronRight, Ellipsis } from "lucide-react";
import React, { useMemo } from "react";
import { SidebarTitle } from "./sidebar-title";
import { DefaultFolder, GetIconByLanguage, VSsearchSVG } from "@programmer/ui";
import { CodeLanguages, SVGTsxIconType } from "@programmer/types";

interface ProjectFileType {
  name: string;
  id: string;
  type: CodeLanguages;
}

interface ProjectTreeType {
  [key: string]: {
    icon: SVGTsxIconType;
    files?: ProjectFileType[];
    subFolder?: ProjectTreeType;
  };
}

const PROJECT_DETAILS: ProjectTreeType = {
  apps: {
    icon: DefaultFolder,
    subFolder: {
      web: {
        icon: DefaultFolder,
        subFolder: {
          src: {
            icon: DefaultFolder,
            subFolder: {
              redux: {
                icon: DefaultFolder,
                files: [
                  {
                    id: "store",
                    name: "store.ts",
                    type: "ts",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  packages: {
    icon: DefaultFolder,
    subFolder: {
      shared: {
        icon: DefaultFolder,
        subFolder: {
          src: {
            icon: DefaultFolder,
            subFolder: {
              redux: {
                icon: DefaultFolder,
                files: [
                  {
                    id: "searchBoxOpenSlice",
                    name: "searchBoxOpenSlice.ts",
                    type: "ts",
                  },
                  {
                    id: "searchMetaInfoSlice",
                    name: "searchMetaInfoSlice.ts",
                    type: "ts",
                  },
                  {
                    id: "searchMobInfoOpenSlice",
                    name: "searchMobInfoOpenSlice.ts",
                    type: "ts",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
};

const INDENT_SIZE = 4.3;

const ProjecTreeFileView = ({
  project,
  depth = 0,
}: {
  project: ProjectTreeType;
  depth?: number;
}) => {
  const projectEntries = useMemo(() => Object.entries(project), [project]);
  return projectEntries.map(([key, value], i) => {
    const currentPaddingLeft = depth * INDENT_SIZE;
    const FolderIcon = value.icon;
    return (
      <div
        key={`${key}-${depth}`}
        style={{ paddingLeft: `${currentPaddingLeft}px` }}
        className="text-[11px] text-pm_zinc-200 leading-5 "
      >
        {/* folder button */}
        <div className="flex w-full cursor-pointer justify-start items-center gap-1 group relative pl-2.5 " tabIndex={0}>
          <div style={{ left: `-${(currentPaddingLeft === 0 ? 4 : currentPaddingLeft + 1) * 3}px` }}  className="absolute top-0 w-full bg-transparent group-focus:bg-[var(--github-default-background-color-3)] h-full"></div>
          <ChevronRight
            size={10}
            className="text-pm_zinc-300 absolute left-0 top-1/2 -translate-y-1/2"
          />
          <FolderIcon width={13} height={13} className="flex-shrink-0 relative z-10" />
          <span className="one_line_ellipsis relative z-10">{key}</span>
        </div>

        <div>
          {value.subFolder && Object.keys(value.subFolder).length > 0 && (
            <ProjecTreeFileView
              project={value?.subFolder ?? {}}
              depth={depth + 1}
            />
          )}
          {value.files?.map((file, k) => {
            const filePaddingLeft = (depth + 1) * INDENT_SIZE;
            const FileIcon =
              GetIconByLanguage[file.type] ?? GetIconByLanguage["text"];
            return (
              <div
                key={`${file.id}`}
                style={{ paddingLeft: `${filePaddingLeft}px` }}
                className="flex justify-start items-center gap-1"
              >
                <FileIcon width={13} height={13} className="flex-shrink-0" />
                <span className="one_line_ellipsis">{file.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export const FilesComp = () => {
  const MEMOIZED_PROJECT_DETAILS = useMemo(() => PROJECT_DETAILS, []);
  return (
    <div className="h-full w-full ">
      <SidebarTitle label="explorer" />

      <div className="w-full">
        <div
          tabIndex={0}
          className="px-0.5  border border-transparent cursor-pointer focus:!border-blue-600 outline-none flex justify-between items-center"
        >
          <div className="flex justify-start items-center ">
            <ChevronRight size={10} className="text-pm_zinc-300" />
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450">
              open editors
            </span>
          </div>
        </div>

        <div
          tabIndex={0}
          className="px-0.5  border border-transparent cursor-pointer focus:!border-blue-600 outline-none flex justify-between items-center"
        >
          <div className="flex justify-start items-center ">
            <ChevronRight size={10} className="text-pm_zinc-300" />
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450">
              programmermahin
            </span>
          </div>
        </div>

        <div className=" w-full px-2.5">
          <ProjecTreeFileView project={MEMOIZED_PROJECT_DETAILS} />
        </div>
      </div>
    </div>
  );
};
