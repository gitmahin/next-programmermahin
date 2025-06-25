"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { use, useCallback, useEffect, useMemo, useState } from "react";
import { SidebarTitle } from "./sidebar-title";
import {
  DefaultFolder,
  DefaultFolderOpen,
  GetIconByLanguage,
} from "@programmer/ui";
import { FileType, SVGTsxIconType } from "@programmer/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  CurrentFileByIdSelector,
  handleOpenNewFile,
  setCurrentFile,
} from "@/redux/slice/vside/vside-slice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
            id: "tsconfigjson",
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
            id: "packagejson-shared",
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
    id: "packagejson",
    ext: "npm",
    type: "file",
  },
  "README.md": {
    id: "root-readme",
    ext: "md",
    type: "file",
  },
  "turbo.json": {
    id: "turbojson",
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
  const VsIDEFileManagerDispatch = useAppDispatch();
  const currentFile = useAppSelector(CurrentFileByIdSelector);

  const openNewFile = useCallback(
    ({ name, id, ext }: ProjectFileType) => {
      if (!handleOpenNewFile) return;
      VsIDEFileManagerDispatch(
        handleOpenNewFile({
          activeFileName: name,
          activeFileById: id,
          activeFileExt: ext,
        })
      );
    },
    [VsIDEFileManagerDispatch]
  );
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

        {value.type === "folder" ? (
          <div
            style={{ paddingLeft: `${currentPaddingLeft}px` }}
            className={`w-full cursor-pointer border border-transparent select-none focus:border-blue-600 focus:bg-[var(--github-default-background-color-3)]`}
            tabIndex={0}
            onClick={toggleExpansion}
          >
            <div className="relative pl-[20px] flex justify-start items-center gap-1">
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
            </div>
          </div>
        ) : (
          <Link
            scroll={false}
            href={`/?${new URLSearchParams({
              filetype: value.id ? value.id : "root-readme",
            }).toString()}`}
          >
            <div
              style={{ paddingLeft: `${currentPaddingLeft}px` }}
              className={`w-full cursor-pointer border border-transparent select-none focus:border-blue-600 focus:bg-[var(--github-default-background-color-3)] ${currentFile === value.id && "bg-[var(--github-default-background-color-2)]"}`}
              tabIndex={0}
              onClick={() => {
                if (!value.id || !value.ext) return;
                openNewFile({
                  name: key,
                  id: value.id,
                  ext: value.ext,
                });
              }}
            >
              <div className="relative pl-[20px] flex justify-start items-center gap-1">
                <FileIconParent
                  width={13}
                  height={13}
                  className="flex-shrink-0"
                />
                <span className="one_line_ellipsis relative z-10">{key}</span>
              </div>
            </div>
          </Link>
        )}

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
                <Link
                  scroll={false}
                  href={`/?${new URLSearchParams({
                    filetype: file.id,
                  }).toString()}`}
                >
                  <div
                    key={`${file.id}`}
                    style={{ paddingLeft: `${filePaddingLeft}px` }}
                    className={`cursor-pointer select-none border border-transparent focus:border-blue-600 focus:bg-[var(--github-default-background-color-3)] ${currentFile === file.id && "bg-[var(--github-default-background-color-2)]"}`}
                    tabIndex={0}
                    onClick={() => {
                      if (!file.id || !file.ext) return;
                      openNewFile({
                        name: file.name,
                        id: file.id,
                        ext: file.ext,
                      });
                    }}
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
                </Link>
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
  const searchParams = useSearchParams();
  const fileType = searchParams.get("filetype") as FileId;
  const findFileById = useCallback(
    (tree: ProjectTreeType, fileId: FileId): ProjectFileType | undefined => {
      for (const key in tree) {
        // Ensure it's an own property to avoid iterating prototype chain
        if (Object.prototype.hasOwnProperty.call(tree, key)) {
          const node = tree[key];

          // Case 1: The current node itself is a file (e.g., .gitignore, package.json at root)
          if (node?.type === "file" && node.id === fileId && node && node.ext) {
            // We need to construct a ProjectFileType as `node` directly might not have 'name'
            // based on the provided ProjectTreeType. We're inferring 'name' from the key.
            return {
              id: node.id,
              name: key, // Assuming the key is the file name for direct files
              ext: node.ext,
            };
          }

          // Case 2: The current node is a folder
          if (node?.type === "folder") {
            // Check files directly within this folder
            if (node.files && node.files.length > 0) {
              const foundFileInFolder = node.files.find(
                (file) => file.id === fileId
              );
              if (foundFileInFolder) {
                return foundFileInFolder;
              }
            }

            // Recursively search in subfolders
            if (node.subFolder) {
              const foundInSubFolder = findFileById(node.subFolder, fileId);
              if (foundInSubFolder) {
                return foundInSubFolder;
              }
            }
          }
        }
      }
      return undefined; // File not found
    },
    []
  );

  const VsIDEFileManagerDispatch = useAppDispatch();

  const handleSetCurrentFile = useCallback(() => {
    if (!setCurrentFile || !fileType) return;
    VsIDEFileManagerDispatch(setCurrentFile(fileType));
  }, [setCurrentFile, searchParams]);

  useEffect(() => {
    handleSetCurrentFile();
  }, [fileType]);

  useEffect(() => {
    if (!handleOpenNewFile || !fileType) return;
    const currentFileDetails = findFileById(PROJECT_DETAILS, fileType);
    if (!currentFileDetails) return;
    VsIDEFileManagerDispatch(
      handleOpenNewFile({
        activeFileName: currentFileDetails?.name,
        activeFileById: currentFileDetails?.id,
        activeFileExt: currentFileDetails?.ext,
      })
    );
  }, []);

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
            <ChevronRight size={10} className="text-pm_zinc-300 flex-shrink-0" />
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450 one_line_ellipsis">
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
              <ChevronDown size={10} className="text-pm_zinc-300 flex-shrink-0" />
            ) : (
              <ChevronRight size={10} className="text-pm_zinc-300 flex-shrink-0" />
            )}
            <span className="uppercase text-[9px] text-pm_zinc-200 font-weight_450 one_line_ellipsis">
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
