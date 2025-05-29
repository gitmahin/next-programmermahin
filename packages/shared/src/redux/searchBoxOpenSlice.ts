import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchBoxOpenSliceType {
  isSearchBoxOpen: boolean;
}
const initialState: SearchBoxOpenSliceType = {
  isSearchBoxOpen: false,
};

export const searchBoxOpenSliceName = "searchBoxOpen";
export const searchBoxOpenSlice: Slice<SearchBoxOpenSliceType> = createSlice({
  name: searchBoxOpenSliceName,
  initialState,
  reducers: {
    setSearchBoxOpen: (state, action: PayloadAction<boolean>) => {
      state.isSearchBoxOpen = action.payload;
    },
  },
});

// A typed selector hook limited to the `searchMobInfoOpen` slice,
// useful for selecting values from this slice only, with type safety.
type searchBoxOpenInterface = {
  searchBoxOpen: SearchBoxOpenSliceType;
};
export let useSearchBoxOpenSliceSelector: TypedUseSelectorHook<searchBoxOpenInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { [searchBoxOpenSliceName]: searchBoxOpenSlice.reducer },
  });

export const searchBoxOpenValue = (state: searchBoxOpenInterface) =>
  state.searchBoxOpen.isSearchBoxOpen;

// Infers dispatch type for a store using only this slice.
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useSearchBoxOpenDispatch = () => useDispatch<SliceDispatch>();

export const initializeSearchBoxOpenSlicePackage = (
  useAppDispatch: typeof useSearchBoxOpenDispatch,
  useAppSelector: typeof useSearchBoxOpenSliceSelector
) => {
  useSearchBoxOpenDispatch = useAppDispatch;
  useSearchBoxOpenSliceSelector = useAppSelector;
};

export const { setSearchBoxOpen } = searchBoxOpenSlice.actions;

export const searchBoxOpenReducer = searchBoxOpenSlice.reducer;
