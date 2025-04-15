import { configureStore } from '@reduxjs/toolkit'
import tutoChaptersReducer from "./tutorials/tutoChaptersSlice"
// ...

export const store = configureStore({
  reducer: {
    tutoChapters: tutoChaptersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch