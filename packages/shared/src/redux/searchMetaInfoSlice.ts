import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchMetaInfoSliceType {
  title: string;
  desc: string;
  slug: string;
  onThisPage: {
    label: string;
    slug: string;
  }[];
  navigationText: string[];
  activeKey: string;
}

const initialState: SearchMetaInfoSliceType = {
  title: "",
  desc: "",
  slug: "",
  onThisPage: [],
  navigationText: [],
  activeKey: ""
};
export const searchMetaInfoSliceName = "searchMetaInfo";
export const searchMetaInfoSlice: Slice<SearchMetaInfoSliceType> = createSlice({
  name: searchMetaInfoSliceName,
  initialState,
  reducers: {
    setSearchMetaInfo: (state, action: PayloadAction<SearchMetaInfoSliceType>) => {
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.slug = action.payload.slug;
      state.onThisPage = action.payload.onThisPage;
      state.navigationText = action.payload.navigationText;
      state.activeKey = action.payload.activeKey;
    },
  },
});

type searchMetaInfoInterface = { searchMetaInfo: SearchMetaInfoSliceType };
export let useSliceSelector: TypedUseSelectorHook<searchMetaInfoInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { searchMetaInfo: searchMetaInfoSlice.reducer },
  });

export const searchMetaInfoTitleValue = (state: searchMetaInfoInterface) =>
  state.searchMetaInfo.title;
export const searchMetaInfoDescValue = (state: searchMetaInfoInterface) =>
  state.searchMetaInfo.desc;
export const searchMetaInfoSlugValue = (state: searchMetaInfoInterface) =>
  state.searchMetaInfo.slug;
export const searchMetaInfoOnThisPageValue = (state: searchMetaInfoInterface) =>
  state.searchMetaInfo.onThisPage;
export const searchMetaInfoNavigationTextValue = (
  state: searchMetaInfoInterface
) => state.searchMetaInfo.navigationText;
export const searchMetaInfoActiveKeyValue = (
  state: searchMetaInfoInterface
) => state.searchMetaInfo.activeKey;

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

export const { setSearchMetaInfo } = searchMetaInfoSlice.actions;

export const searchMetaInfoReducer = searchMetaInfoSlice.reducer;
