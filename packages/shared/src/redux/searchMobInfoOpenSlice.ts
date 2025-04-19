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

// Enables external packages to provide their own useDispatch and useSelector
// hooks, assuming their Redux store integrates this package’s reducers.
// This ensures compatibility with the global store setup in the consuming app.
export const initializeSearchMobInfoPackage = (
  useAppDispatch: typeof useSearchMobInfoDispatch,
  useAppSelector: typeof useSearchMobInfoSelector
) => {
  useSearchMobInfoDispatch = useAppDispatch;
  useSearchMobInfoSelector = useAppSelector;
};

export const { setSearchMobInfoOpen } = searchMobInfoOpenSlice.actions;

export const searchMobInfoOpenReducer = searchMobInfoOpenSlice.reducer;
