"use client";
import { ChevronDown, ChevronRight, Ellipsis } from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";
import { SidebarTitle } from "./sidebar-title";
import {
  DefaultFolder,
  DefaultFolderOpen,
  GetIconByLanguage,
} from "@programmer/ui";
import { FileType, SVGTsxIconType } from "@programmer/types";

type FileId = "turbo.json" | "package.json" | "tsconfig.json" | "gitignore" | "prettierignore" | "prettierrc" | "web-redux-store" | "searchBoxOpenSlice" | "searchMetaInfoSlice" | "searchMobInfoOpenSlice" | "package.json-shared" | "root-readme"


interface ProjectFileType {
  name: string;
  id: FileId;
  ext: FileType;
}

interface ProjectTreeType {
  [key: string]: {
    icon?: SVGTsxIconType;
    type?: "folder" | "file";
    ext?: FileType;
    id?: FileId;
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
                    id: "web-redux-store",
                    name: "store.ts",
                    ext: "ts",
                  },
                ],
              },
            },
          },
          "tsconfig.json": {
            id: "tsconfig.json",
            ext: "json",
            type: "file",
          },
        },
      },
    },
  },
  packages: {
    icon: DefaultFolder,
    type: "folder",
    subFolder: {
      shared: {
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
        files: [
          {
            id: "package.json-shared",
            name: "package.json",
            ext: "npm",
          },
        ],
      },
    },
  },
  ".gitignore": {
    id: "gitignore",
    ext: "git",
    type: "file",
  },

  ".prettierignore": {
    id: "prettierignore",
    ext: "prettier",
    type: "file",
  },

  ".prettierrc": {
    id: "prettierrc",
    ext: "prettier",
    type: "file",
  },
  "package.json": {
    id: "package.json",
    ext: "npm",
    type: "file",
  },
 "README.md": {
    id: "root-readme",
    ext: "md",
    type: "file",
  },
  "turbo.json": {
    id: "turbo.json",
    ext: "turbo",
    type: "file",
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
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = useCallback(() => {
      setIsExpanded((prev) => !prev);
    }, []);
    const FolderIcon = value.icon;
    const FileIconParent =
      (value.ext && GetIconByLanguage[value?.ext]) ?? GetIconByLanguage["text"];
    return (
      <div
        key={`${key}-${depth}`}
        className="text-[11px] text-pm_zinc-200 leading-[18px]"
      >
        {/* folder button */}
        <div
          style={{ paddingLeft: `${currentPaddingLeft}px` }}
          className={`w-full cursor-pointer border border-transparent select-none focus:border-blue-600 focus:bg-[var(--github-default-background-color-4)]`}
          tabIndex={0}
          onClick={toggleExpansion}
        >
          <div className="relative pl-[20px] flex justify-start items-center gap-1">
            {value.type === "folder" ? (
              <>
                {isExpanded ? (
                  <ChevronDown
                    size={10}
                    className="text-pm_zinc-300 absolute left-2.5 top-1/2 -translate-y-1/2"
                  />
                ) : (
                  <ChevronRight
                    size={10}
                    className="text-pm_zinc-300 absolute left-2.5 top-1/2 -translate-y-1/2"
                  />
                )}

                {isExpanded ? (
                  <DefaultFolderOpen
                    width={13}
                    height={13}
                    className="flex-shrink-0 relative z-10"
                  />
                ) : (
                  FolderIcon && (
                    <FolderIcon
                      width={13}
                      height={13}
                      className="flex-shrink-0 relative z-10"
                    />
                  )
                )}
                <span className="one_line_ellipsis relative z-10">{key}</span>
              </>
            ) : (
              <>
                <FileIconParent
                  width={13}
                  height={13}
                  className="flex-shrink-0"
                />
                <span className="one_line_ellipsis relative z-10">{key}</span>
              </>
            )}
          </div>
        </div>

        {isExpanded && (
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
                  className="cursor-pointer select-none"
                >
                  <div className="pl-[22px] flex justify-start items-center gap-1">
                    <FileIcon
                      width={13}
                      height={13}
                      className="flex-shrink-0"
                    />
                    <span className="one_line_ellipsis">{file.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  });
};

export const FilesComp = () => {
  const MEMOIZED_PROJECT_DETAILS = useMemo(() => PROJECT_DETAILS, []);
  const [projectOpen, setProjectOpen] = useState<boolean>(true);

  const toggleProjectOpen = useCallback(() => {
    setProjectOpen((prev) => !prev);
  }, []);
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
          onClick={toggleProjectOpen}
          className="px-0.5  border border-transparent cursor-pointer focus:!border-blue-600 outline-none flex justify-between items-center"
        >
          <div className="flex justify-start items-center ">
            {projectOpen ? (
              <ChevronDown size={10} className="text-pm_zinc-300" />
            ) : (
              <ChevronRight size={10} className="text-pm_zinc-300" />
            )}
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450">
              programmermahin
            </span>
          </div>
        </div>

        {projectOpen && (
          <div className=" w-full">
            <ProjecTreeFileView project={MEMOIZED_PROJECT_DETAILS} />
          </div>
        )}
      </div>
    </div>
  );
};
