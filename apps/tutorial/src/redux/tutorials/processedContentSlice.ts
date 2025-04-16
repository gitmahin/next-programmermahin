import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

export interface ProcessedContentType {
  content: string;
}

const initialState: ProcessedContentType = {
  content: "",
};

export const processedContentSlice: Slice<ProcessedContentType> = createSlice({
  name: "processedContent",
  initialState,
  reducers: {
    setProcessedContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProcessedContent } = processedContentSlice.actions;

export default processedContentSlice.reducer;
