"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  CurrentFileByIdSelector,
  handleRemoveFlieFromOpenedFiles,
  OpenedFilesSelector,
  setCurrentFile,
} from "@/redux/slice/vside/vside-slice";
import { GetIconByLanguage } from "@programmer/ui";
import { X } from "lucide-react";
import Link from "next/link";

export const VsIDEContentHeader = () => {
  const OPENED_FILES = useAppSelector(OpenedFilesSelector);
  const VsIDEFileMangerDispatch = useAppDispatch();
  const currentFileById = useAppSelector(CurrentFileByIdSelector);
  const handleCloseFile = (fileid: FileId) => {
    if (!handleRemoveFlieFromOpenedFiles) return;
    VsIDEFileMangerDispatch(
      handleRemoveFlieFromOpenedFiles({ activeFileById: fileid })
    );
  };

  const handleCurrentFile = (fileId: FileId) => {
    if (!setCurrentFile) return;
    VsIDEFileMangerDispatch(setCurrentFile(fileId));
  };
  return (
    <>
      <div className="h-[22px] border-b border-[var(--github-default-border-color-1)] bg-[var(--github-default-background-color-1)] flex justify-start items-center ">
        {OPENED_FILES.map((item, i) => {
          const FileIcon = GetIconByLanguage[item.activeFileExt];
          return (
            <Link
              scroll={false}
              href={`/?${new URLSearchParams({
                filetype: item.activeFileById,
              }).toString()}`}
              className=" h-full"
            >
              <div
                onClick={() => handleCurrentFile(item.activeFileById)}
                key={i}
                className={`flex select-none flex-shrink-0 px-2 justify-center items-center gap-1 h-full w-[90px] border-[var(--github-default-border-color-1)] border-r border-t border-t-transparent ${currentFileById === item.activeFileById ? "!border-t-[var(--github-default-active-bar-color-1)] bg-[var(--github-default-background-color-2)]" : "hover:bg-[var(--github-default-background-color-3)]"} cursor-pointer`}
              >
                <FileIcon width={13} height={13} />
                <p className="text-[9px] one_line_ellipsis text-pm_zinc-200">
                  {item.activeFileName}.{item.activeFileExt}
                </p>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseFile(item.activeFileById);
                  }}
                  className="p-[1px] flex-shrink-0 hover:bg-[var(--github-default-background-color-4)] flex justify-center items-center rounded-[3px]"
                >
                  <X size={8} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
