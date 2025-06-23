"use client";
import { ChevronRight, Ellipsis } from "lucide-react";
import React, { useMemo } from "react";
import { SidebarTitle } from "./sidebar-title";
import { DefaultFolder, GetIconByLanguage, VSsearchSVG } from "@programmer/ui";
import { CodeLanguages, SVGTsxIconType } from "@programmer/types";

interface ProjectFileType {
  name: string;
  id: string;
  ext: CodeLanguages;
}

interface ProjectTreeType {
  [key: string]: {
    icon?: SVGTsxIconType ;
    type?: "folder" | "file";
    ext?: CodeLanguages;
    id?: string;
    files?: ProjectFileType[];
    subFolder?: ProjectTreeType;
  };
}

const PROJECT_DETAILS: ProjectTreeType = {
  apps: {
    icon: DefaultFolder,
    type: "folder",
    subFolder: {
      web: {
        icon: DefaultFolder,
        type: "folder",
        subFolder: {
          src: {
            icon: DefaultFolder,
            type: "folder",
            subFolder: {
              redux: {
                icon: DefaultFolder,
                type: "folder",
                files: [
                  {
                    id: "store",
                    name: "store.ts",
                    ext: "ts",
                  },
                ],
              },
            },
          },
          "tsconfig.json": {
            id: "tsconfig",
            ext: "json",
            type: "file"
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
                    ext: "ts",
                  },
                  {
                    id: "searchMetaInfoSlice",
                    name: "searchMetaInfoSlice.ts",
                    ext: "ts",
                  },
                  {
                    id: "searchMobInfoOpenSlice",
                    name: "searchMobInfoOpenSlice.ts",
                    ext: "ts",
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

const INDENT_SIZE = 5;

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
        className="text-[11px] text-pm_zinc-200 leading-5"
      >
        {/* folder button */}
        <div
          style={{ paddingLeft: `${currentPaddingLeft}px` }}
          className=" w-full cursor-pointer "
          tabIndex={0}
        >
          <div className="relative pl-[20px] flex justify-start items-center gap-1">
            <ChevronRight
              size={10}
              className="text-pm_zinc-300 absolute left-2.5 top-1/2 -translate-y-1/2"
            />
            {FolderIcon && (
              <FolderIcon
                width={13}
                height={13}
                className="flex-shrink-0 relative z-10"
              />
            )}
            <span className="one_line_ellipsis relative z-10">{key}</span>
          </div>
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
              GetIconByLanguage[file.ext] ?? GetIconByLanguage["text"];
            return (
              <div
                key={`${file.id}`}
                style={{ paddingLeft: `${filePaddingLeft}px` }}
                className="cursor-pointer"
              >
                <div className="pl-[22px] flex justify-start items-center gap-1">
                  <FileIcon width={13} height={13} className="flex-shrink-0" />
                  <span className="one_line_ellipsis">{file.name}</span>
                </div>
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

        <div className=" w-full">
          <ProjecTreeFileView project={MEMOIZED_PROJECT_DETAILS} />
        </div>
      </div>
    </div>
  );
};
