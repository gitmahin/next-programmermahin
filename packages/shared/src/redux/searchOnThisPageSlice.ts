import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchOnThisPage {
  title: string;
  desc: string;
  slug: string;
  onThisPage: {
    label: string;
    slug: string;
  }[];
  navigationText: string[]
}

const initialState: SearchOnThisPage = {
  title: "",
  desc: "",
  slug: "",
  onThisPage: [],
  navigationText: [],
};
export const searchOnThisPageSliceName = "searchOnThisPage";
export const searchOnThisPageSlice: Slice<SearchOnThisPage> = createSlice({
  name: searchOnThisPageSliceName,
  initialState,
  reducers: {
    setSearchOnThisPage: (state, action: PayloadAction<SearchOnThisPage>) => {
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.slug = action.payload.slug;
      state.onThisPage = action.payload.onThisPage;
      state.navigationText = action.payload.navigationText;
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
export const SearchOnThePageSlugValue = (state: searchOnThisPageInterface) => state.searchOnThisPage.slug;
export const SearchOnThePageValue = (state: searchOnThisPageInterface) => state.searchOnThisPage.onThisPage;
export const SearchOnThePageNavigationTextValue = (state: searchOnThisPageInterface) => state.searchOnThisPage.navigationText;

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
