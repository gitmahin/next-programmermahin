import { TutorialEnums } from "@/constants";
import { TutorialNavItemType } from "@/constants/tutorials/type";
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

export const tutoChaptersSlice: Slice<TutorialsChapterState> = createSlice({
  name: "tutoChapters",
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
