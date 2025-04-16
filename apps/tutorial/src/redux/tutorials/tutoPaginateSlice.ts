import { FlattenedTutorialChapter } from "@/types/flattened-tutorial-ch";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface tutoPaginateStateType {
  next: FlattenedTutorialChapter | null;
  prev: FlattenedTutorialChapter | null;
}

const initialState: tutoPaginateStateType = {
  next: null,
  prev: null,
};

export const tutoPaginateSlice: Slice<tutoPaginateStateType> = createSlice({
  name: "tutoPaginate",
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
      state.prev = currentIndex > 0 ? flatTutoList[currentIndex - 1] : null;
      state.next =
        currentIndex < flatTutoList.length - 1
          ? flatTutoList[currentIndex + 1]
          : null;
    },
  },
});

export const { setPagination } = tutoPaginateSlice.actions;
export default tutoPaginateSlice.reducer;
