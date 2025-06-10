import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

export interface SidebarStateType {
  isSidebarOpen: boolean;
  isContentAsideOpen: boolean;
}

// Define the initial state using that type
const initialState: SidebarStateType = {
  isSidebarOpen: false,
  isContentAsideOpen: false
};

export const SidebarSliceName = "sidebar";
export const slidebarSlice: Slice<SidebarStateType> = createSlice({
  name: SidebarSliceName,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setContentAsideOpen: (state, action: PayloadAction<boolean>) => {
      state.isContentAsideOpen = action.payload;
    },
  },
});

export const { setSidebarOpen, setContentAsideOpen } = slidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isSidebarOpenSelector = (state: RootState) =>
  state.sidebar.isSidebarOpen;
export const isContentAsideOpenSelector = (state: RootState) =>
  state.sidebar.isContentAsideOpen;


export default slidebarSlice.reducer;
