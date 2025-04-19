import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchOnThisPage {
  title: string;
  desc: string;
  onThisPage: {
    label: string;
    slug: string;
  };
}

const initialState: SearchOnThisPage = {
  title: "",
  desc: "",
  onThisPage: {
    label: "",
    slug: "",
  },
};
export const searchOnThisPageSliceName = "searchOnThisPage";
export const searchOnThisPageSlice: Slice<SearchOnThisPage> = createSlice({
  name: searchOnThisPageSliceName,
  initialState,
  reducers: {
    setSearchOnThisPage: (state, action: PayloadAction<SearchOnThisPage>) => {
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.onThisPage = action.payload.onThisPage;
    },
  },
});

type searchOnThisPageInterface = { searchOnThisPage: SearchOnThisPage };
export let useSliceSelector: TypedUseSelectorHook<searchOnThisPageInterface> =
  useSelector;

// This function would configure a "local" store if called, but currently it is
// not called, and is just used for type inference.
const configureLocalStore = () =>
  configureStore({
    reducer: { searchOnThisPage: searchOnThisPageSlice.reducer },
  });

export const SearchOnThePagetitleValue = (state: searchOnThisPageInterface) => state.searchOnThisPage.title;
export const SearchOnThePageDescValue = (state: searchOnThisPageInterface) => state.searchOnThisPage.desc;
export const SearchOnThePageOnValue = (state: searchOnThisPageInterface) => state.searchOnThisPage.onThisPage;

// Infer the type of the dispatch that would be needed for a store that consisted of
// just this slice
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useSliceDispatch = () => useDispatch<SliceDispatch>();

// Allows initializing of this package by a calling package with the "global"
// dispatch and selector hooks of that package, provided they satisfy this packages
// state and dispatch interfaces--which they will if the imported this package and
// used it to compose their store.
export const initializeSlicePackage = (
  useAppDispatch: typeof useSliceDispatch,
  useAppSelector: typeof useSliceSelector
) => {
  useSliceDispatch = useAppDispatch;
  useSliceSelector = useAppSelector;
};

// Action creators are generated for each case reducer function
export const { setSearchOnThisPage } = searchOnThisPageSlice.actions;

export const searchOnThisPageReducer = searchOnThisPageSlice.reducer;
