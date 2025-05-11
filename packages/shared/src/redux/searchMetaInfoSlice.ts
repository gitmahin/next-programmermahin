import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { ReactElement } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchMetaInfoSliceType {
  title: string;
  desc: ReactElement | null;
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
  desc: null,
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

// A typed selector hook limited to the `searchMetaInfo` slice,
// useful for selecting values from this slice only, with type safety.
type searchMetaInfoInterface = { searchMetaInfo: SearchMetaInfoSliceType };
export let useSliceSelector: TypedUseSelectorHook<searchMetaInfoInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { searchMetaInfo: searchMetaInfoSlice.reducer },
  });

export const searchMetaInfoActiveKeyValue = (
  state: searchMetaInfoInterface
) => state.searchMetaInfo.activeKey;

export const searchMetaInfoValues = (state: searchMetaInfoInterface) => {
  return {
    title: state.searchMetaInfo.title,
    desc: state.searchMetaInfo.desc,
    slug: state.searchMetaInfo.slug,
    onThisPage: state.searchMetaInfo.onThisPage,
    navigationText: state.searchMetaInfo.navigationText,
    activeKey: state.searchMetaInfo.activeKey
  }
}

// Infers dispatch type for a store using only this slice.
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useSliceDispatch = () => useDispatch<SliceDispatch>();

export const { setSearchMetaInfo } = searchMetaInfoSlice.actions;

export const searchMetaInfoReducer = searchMetaInfoSlice.reducer;
