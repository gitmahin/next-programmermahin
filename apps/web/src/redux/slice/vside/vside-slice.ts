import { FileType } from "@programmer/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ReduxFileType {
  activeFileById: FileId;
  activeFileName: string;
  activeFileExt: FileType;
}

export interface VSIDEReduxDatatype {
  currentFileById: FileId;
  openedFiles: ReduxFileType[];
}

// Define the initial state using that type
const initialState: VSIDEReduxDatatype = {
  openedFiles: [
    {
      activeFileById: "root-readme",
      activeFileExt: "md",
      activeFileName: "README.md",
    },
  ],
  currentFileById: "root-readme",
};

export const vsideSliceName = "vsIdeFileManager";

export const vsIdeFileManagerSlice: Slice<VSIDEReduxDatatype> = createSlice({
  name: vsideSliceName,
  initialState,
  reducers: {
    handleOpenNewFile: (state, action: PayloadAction<ReduxFileType>) => {
      const exists = state.openedFiles.some(
        (file) => file.activeFileById === action.payload.activeFileById
      );
      if (!exists) {
        state.openedFiles = [...state.openedFiles, { ...action.payload }];
      } else {
      }
    },

    handleRemoveFlieFromOpenedFiles: (
      state,
      action: PayloadAction<ReduxFileType>
    ) => {
      state.openedFiles = state.openedFiles.filter(
        (item) => item.activeFileById !== action.payload.activeFileById
      );
    },

    setCurrentFile: (state, action: PayloadAction<FileId>) => {
      state.currentFileById = action.payload;
    },
  },
});

export const CurrentFileByIdSelector = (state: RootState) =>
  state.vsIdeFileManager.currentFileById;

export const OpenedFilesSelector = (state: RootState) =>
  state.vsIdeFileManager.openedFiles;
export const {
  handleRemoveFlieFromOpenedFiles,
  handleOpenNewFile,
  setCurrentFile,
} = vsIdeFileManagerSlice.actions;
export default vsIdeFileManagerSlice.reducer;
