
import { TutorialNavItemType } from "@programmer/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

export interface TutoTabSliceType {
  activeKey: string;
  tutorialName: string;
  data: TutorialNavItemType | {};
  open: boolean;
  lock: boolean;
}

const initialState: TutoTabSliceType = {
  activeKey: "",
  tutorialName: "",
  data: {},
  open: false,
  lock: false,
};

export const tutoTabSliceName = "tutoTab";
export const tutoTabSlice: Slice<TutoTabSliceType> = createSlice({
  name: tutoTabSliceName,
  initialState,
  reducers: {
    setOpenTutoTab: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setLockMouseEnter: (state, action: PayloadAction<boolean>) => {
      state.lock = action.payload;
    },
    setTutoTabDetails: (
      state,
      action: PayloadAction<{
        data: TutorialNavItemType;
        activeKey: string;
        tutorialName: string;
      }>
    ) => {
      state.activeKey = action.payload.activeKey;
      state.tutorialName = action.payload.tutorialName;
      state.data = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTutoTabDetails, setOpenTutoTab, setLockMouseEnter } =
  tutoTabSlice.actions;

export default tutoTabSlice.reducer;
