import { FlattenedTutorialChapter } from "@/types/flattened-tutorial-ch";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface tutoPaginateStateType {
  next: FlattenedTutorialChapter | undefined;
  prev: FlattenedTutorialChapter | undefined;
}

const initialState: tutoPaginateStateType = {
  next: undefined,
  prev: undefined,
};

export const tutoPaginateSliceName = "tutoPaginate";
export const tutoPaginateSlice: Slice<tutoPaginateStateType> = createSlice({
  name: tutoPaginateSliceName,
  initialState,
  reducers: {
    setPagination: (
      state,
      action: PayloadAction<{
        currentIndex: number;
        flatTutoList: FlattenedTutorialChapter[];
      }>
    ) => {
      const { currentIndex, flatTutoList } = action.payload;
      state.prev = currentIndex > 0 ? flatTutoList[currentIndex - 1] : undefined;
      state.next =
        currentIndex < flatTutoList.length - 1
          ? flatTutoList[currentIndex + 1]
          : undefined;
    },
  },
});

export const { setPagination } = tutoPaginateSlice.actions;
export default tutoPaginateSlice.reducer;
