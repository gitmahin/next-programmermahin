import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchMobInfoOpenSliceType {
  open: boolean;
}

const initialState: SearchMobInfoOpenSliceType = {
  open: false,
};
export const searchMobInfoOpenSliceName = "searchMobInfoOpen";
export const searchMobInfoOpenSlice: Slice<SearchMobInfoOpenSliceType> =
  createSlice({
    name: searchMobInfoOpenSliceName,
    initialState,
    reducers: {
      setSearchMobInfoOpen: (state, action: PayloadAction<boolean>) => {
        state.open = action.payload;
      },
    },
  });

// A typed selector hook limited to the `searchMobInfoOpen` slice,
// useful for selecting values from this slice only, with type safety.
type searchMonInfoOpenInterface = {
  searchMobInfoOpen: SearchMobInfoOpenSliceType;
};
export let useSearchMobInfoSelector: TypedUseSelectorHook<searchMonInfoOpenInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { searchMobInfoOpen: searchMobInfoOpenSlice.reducer },
  });

export const searchMobInfoOpenValue = (state: searchMonInfoOpenInterface) =>
  state.searchMobInfoOpen.open;

// Infers dispatch type for a store using only this slice.
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useSearchMobInfoDispatch = () => useDispatch<SliceDispatch>();

export const { setSearchMobInfoOpen } = searchMobInfoOpenSlice.actions;

export const searchMobInfoOpenReducer = searchMobInfoOpenSlice.reducer;
