import { configureStore } from "@reduxjs/toolkit";

import {
  searchMobInfoOpenReducer,
  searchMobInfoOpenSliceName,
  searchMetaInfoReducer,
  searchMetaInfoSliceName,
  searchBoxOpenSliceName,
  searchBoxOpenReducer,
} from "@programmer/shared";


export const store = configureStore({
  reducer: {
    [searchMetaInfoSliceName]: searchMetaInfoReducer,
    [searchMobInfoOpenSliceName]: searchMobInfoOpenReducer,
    [searchBoxOpenSliceName]: searchBoxOpenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
