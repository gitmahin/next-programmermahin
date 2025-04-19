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
  navigationText: string[];
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

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { searchOnThisPage: searchOnThisPageSlice.reducer },
  });

export const SearchOnThePagetitleValue = (state: searchOnThisPageInterface) =>
  state.searchOnThisPage.title;
export const SearchOnThePageDescValue = (state: searchOnThisPageInterface) =>
  state.searchOnThisPage.desc;
export const SearchOnThePageSlugValue = (state: searchOnThisPageInterface) =>
  state.searchOnThisPage.slug;
export const SearchOnThePageValue = (state: searchOnThisPageInterface) =>
  state.searchOnThisPage.onThisPage;
export const SearchOnThePageNavigationTextValue = (
  state: searchOnThisPageInterface
) => state.searchOnThisPage.navigationText;

// Infers dispatch type for a store using only this slice.
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useSliceDispatch = () => useDispatch<SliceDispatch>();

// Enables external packages to provide their own useDispatch and useSelector
// hooks, assuming their Redux store integrates this package’s reducers.
// This ensures compatibility with the global store setup in the consuming app.
export const initializeSlicePackage = (
  useAppDispatch: typeof useSliceDispatch,
  useAppSelector: typeof useSliceSelector
) => {
  useSliceDispatch = useAppDispatch;
  useSliceSelector = useAppSelector;
};

export const { setSearchOnThisPage } = searchOnThisPageSlice.actions;

export const searchOnThisPageReducer = searchOnThisPageSlice.reducer;
