import { TutorialEnums } from "@programmer/constants";
import { TutorialNavItemType } from "@programmer/constants";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

export interface TutorialsChapterState {
  value: TutorialNavItemType | {};
  type: string;
}

const initialState: TutorialsChapterState = {
  value: {},
  type: "",
};

export const tutoChaptersSliceName = "tutoChapters";
export const tutoChaptersSlice: Slice<TutorialsChapterState> = createSlice({
  name: tutoChaptersSliceName,

  initialState,
  reducers: {
    setTutorialChapters: (
      state,
      action: PayloadAction<{ data: TutorialNavItemType; type: TutorialEnums }>
    ) => {
      state.value = action.payload.data;
      state.type = action.payload.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTutorialChapters } = tutoChaptersSlice.actions;

export default tutoChaptersSlice.reducer;
