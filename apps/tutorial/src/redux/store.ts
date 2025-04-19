import { configureStore } from "@reduxjs/toolkit";
import tutoChaptersReducer, {
  tutoChaptersSliceName,
} from "./tutorials/tutoChaptersSlice";
import tutoTabReducer, { tutoTabSliceName } from "./tutorials/tutoTabSlice";
import processedContentRedcuer, {
  processedContentSliceName,
} from "./tutorials/processedContentSlice";
import tutoPaginateReducer, {
  tutoPaginateSliceName,
} from "./tutorials/tutoPaginateSlice";
import mobSidebarOpenReducer, {
  mobSidebarOpenSliceName,
} from "./tutorials/mobSidebarOpen";
import {
  searchMobInfoOpenReducer,
  searchMobInfoOpenSliceName,
  searchMetaInfoReducer,
  searchMetaInfoSliceName,
} from "@programmer/shared";
// ...

export const store = configureStore({
  reducer: {
    [tutoChaptersSliceName]: tutoChaptersReducer,
    [tutoTabSliceName]: tutoTabReducer,
    [processedContentSliceName]: processedContentRedcuer,
    [tutoPaginateSliceName]: tutoPaginateReducer,
    [mobSidebarOpenSliceName]: mobSidebarOpenReducer,
    [searchMetaInfoSliceName]: searchMetaInfoReducer,
    [searchMobInfoOpenSliceName]: searchMobInfoOpenReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
