import { CodeBlock } from "@/components/shiki";

const reduxStoreCode = `import { configureStore } from "@reduxjs/toolkit";
import {
  searchMobInfoOpenReducer,
  searchMobInfoOpenSliceName,
  searchMetaInfoReducer,
  searchMetaInfoSliceName,
  searchBoxOpenSliceName,
  searchBoxOpenReducer,
} from "@programmer/shared";
// import vsIdeFileManagerReducer , { vsideSliceName } from "../../../../redux/slice/vside/vside-slice"

export const store = configureStore({
  reducer: {
    [searchMetaInfoSliceName]: searchMetaInfoReducer,
    [searchMobInfoOpenSliceName]: searchMobInfoOpenReducer,
    [searchBoxOpenSliceName]: searchBoxOpenReducer,
    // [vsideSliceName]: vsIdeFileManagerReducer
  },
});

// Infer the \`RootState\` and \`AppDispatch\` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

`;
export const ReduxStore = () => {
  return (
    <CodeBlock lang="ts" className="text-[9px]">
      {reduxStoreCode}
    </CodeBlock>
  );
};

const searchBoxOpenSlicecode = `import { configureStore, createSlice } from "@reduxjs/toolkit";
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

// A typed selector hook limited to the \`searchMobInfoOpen\` slice,
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

`;

export const SearchBoxOpenSliceCode = () => {
  return (
    <CodeBlock lang="ts" className="text-[9px]">
      {searchBoxOpenSlicecode}
    </CodeBlock>
  );
};

const searchMetaInfoCode = `import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { ReactElement } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface SearchMetaInfoSliceType {
  title: string;
  desc: ReactElement | null;
  slug: string;
  basepath: string;
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
  activeKey: "",
  basepath: "",
};
export const searchMetaInfoSliceName = "searchMetaInfo";
export const searchMetaInfoSlice: Slice<SearchMetaInfoSliceType> = createSlice({
  name: searchMetaInfoSliceName,
  initialState,
  reducers: {
    setSearchMetaInfo: (
      state,
      action: PayloadAction<SearchMetaInfoSliceType>
    ) => {
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.slug = action.payload.slug;
      state.onThisPage = action.payload.onThisPage;
      state.navigationText = action.payload.navigationText;
      state.activeKey = action.payload.activeKey;
      state.basepath = action.payload.basepath;
    },
  },
});

// A typed selector hook limited to the \`searchMetaInfo\` slice,
// useful for selecting values from this slice only, with type safety.
type searchMetaInfoInterface = { searchMetaInfo: SearchMetaInfoSliceType };
export let useSliceSelector: TypedUseSelectorHook<searchMetaInfoInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { searchMetaInfo: searchMetaInfoSlice.reducer },
  });

export const searchMetaInfoActiveKeyValue = (state: searchMetaInfoInterface) =>
  state.searchMetaInfo.activeKey;

export const searchMetaInfoValues = createSelector(
  (state: searchMetaInfoInterface) => state.searchMetaInfo,
  (searchMetaInfo) => ({
    title: searchMetaInfo.title,
    desc: searchMetaInfo.desc,
    slug: searchMetaInfo.slug,
    onThisPage: searchMetaInfo.onThisPage,
    navigationText: searchMetaInfo.navigationText,
    activeKey: searchMetaInfo.activeKey,
    basepath: searchMetaInfo.basepath,
  })
);

// Infers dispatch type for a store using only this slice.
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let useSliceDispatch = () => useDispatch<SliceDispatch>();

export const { setSearchMetaInfo } = searchMetaInfoSlice.actions;

export const searchMetaInfoReducer = searchMetaInfoSlice.reducer;

`;

export const SearchMetaInfoSliceCode = () => {
  return (
    <CodeBlock lang="ts" className="text-[9px]">
      {searchMetaInfoCode}
    </CodeBlock>
  );
};

const searchMobInfoOpenSliceCode = `import { configureStore, createSlice } from "@reduxjs/toolkit";
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

// A typed selector hook limited to the \`searchMobInfoOpen\` slice,
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

`;

export const SearchMobInfoOpenSliceCode = () => {
  return (
    <CodeBlock lang="ts" className="text-[9px]">
      {searchMobInfoOpenSliceCode}
    </CodeBlock>
  );
};
