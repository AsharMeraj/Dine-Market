import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '@/app/Store/Slice/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
