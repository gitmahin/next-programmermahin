import { configureStore } from "@reduxjs/toolkit";
import tutoChaptersReducer from "./tutorials/tutoChaptersSlice";
import tutoTabReducer from "./tutorials/tutoTabSlice";
import processedContentRedcuer from "./tutorials/processedContentSlice";
import tutoPaginateReducer from "./tutorials/tutoPaginateSlice";
// ...

export const store = configureStore({
  reducer: {
    tutoChapters: tutoChaptersReducer,
    tutoTab: tutoTabReducer,
    processedContent: processedContentRedcuer,
    tutoPaginate: tutoPaginateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
