import { configureStore } from "@reduxjs/toolkit";
import tutoChaptersReducer, {
  tutoChaptersSliceName,
} from "./tutorials/tutoChaptersSlice";
import tutoTabReducer, { tutoTabSliceName } from "./tutorials/tutoTabSlice";
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
  searchBoxOpenSliceName,
  searchBoxOpenReducer,
} from "@programmer/shared";
import quickLearnNavItemReducer, {
  quickLearnNavItemsSliceName,
} from "./quicklearn/quickLearnNavItemsSlice";

export const store = configureStore({
  reducer: {
    [tutoChaptersSliceName]: tutoChaptersReducer,
    [tutoTabSliceName]: tutoTabReducer,
    [tutoPaginateSliceName]: tutoPaginateReducer,
    [quickLearnNavItemsSliceName]: quickLearnNavItemReducer,
    [mobSidebarOpenSliceName]: mobSidebarOpenReducer,
    [searchMetaInfoSliceName]: searchMetaInfoReducer,
    [searchMobInfoOpenSliceName]: searchMobInfoOpenReducer,
    [searchBoxOpenSliceName]: searchBoxOpenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
