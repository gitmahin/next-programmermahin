import {
  configureStore,
  createSelector,
  createSlice,
  PayloadAction,
  Slice,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type PaginateDataType = {
  label: string;
  path: string;
};

export interface paginateStateType {
  next: PaginateDataType | undefined;
  prev: PaginateDataType | undefined;
}

const initialState: paginateStateType = {
  next: undefined,
  prev: undefined,
};

export const paginationSliceName = "pagination";
export const paginateSlice: Slice<paginateStateType> = createSlice({
  name: paginationSliceName,
  initialState,
  reducers: {
    setPagination: (
      state,
      action: PayloadAction<{
        currentIndex: number;
        dataList: PaginateDataType[];
      }>
    ) => {
      const { currentIndex, dataList } = action.payload;
      state.prev = currentIndex > 0 ? dataList[currentIndex - 1] : undefined;
      state.next =
        dataList && currentIndex < dataList.length - 1
          ? dataList[currentIndex + 1]
          : undefined;
    },
  },
});

// A typed selector hook limited to the `paginateSlice` slice,
// useful for selecting values from this slice only, with type safety.
type paginationInterface = {
  pagination: paginateStateType;
};
export let usePaginationSelector: TypedUseSelectorHook<paginationInterface> =
  useSelector;

// Defines a local store for type inference only; not actively used.
const configureLocalStore = () =>
  configureStore({
    reducer: { [paginationSliceName]: paginateSlice.reducer },
  });

const selectPaginationState = (state: paginationInterface) => state.pagination;

export const paginationValuesSelector = createSelector(
  [selectPaginationState],
  (pagination) => ({
    next: pagination.next,
    prev: pagination.prev,
  })
);

// Infers dispatch type for a store using only this slice.
type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
export let usePaginationDispatch = () => useDispatch<SliceDispatch>();

export const initializePaginationSlicePackage = (
  useAppDispatch: typeof usePaginationDispatch,
  useAppSelector: typeof usePaginationSelector
) => {
  usePaginationDispatch = useAppDispatch;
  usePaginationSelector = useAppSelector;
};

export const { setPagination } = paginateSlice.actions;
export const paginationReducer = paginateSlice.reducer;
