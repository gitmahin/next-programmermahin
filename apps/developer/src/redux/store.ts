import { configureStore } from '@reduxjs/toolkit'
import { SidebarSliceName } from './sidebar/sidebarSlice'
import sidebarReducer from "./sidebar/sidebarSlice"
import { paginationSliceName } from '@programmer/shared'
import { paginationReducer } from '@programmer/shared'

export const store = configureStore({
  reducer: {
    [SidebarSliceName]: sidebarReducer,
    [paginationSliceName]: paginationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch