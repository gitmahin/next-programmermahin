import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

export interface MobSidebarOpen {
  open: boolean;
}

const initialState: MobSidebarOpen = {
  open: false,
};

export const mobSidebarOpenSliceName = "mobSidebarOpen";
export const mobSidebarOpenSlice: Slice<MobSidebarOpen> = createSlice({
  name: mobSidebarOpenSliceName,
  initialState,
  reducers: {
    setMobSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMobSidebarOpen } = mobSidebarOpenSlice.actions;

export default mobSidebarOpenSlice.reducer;
