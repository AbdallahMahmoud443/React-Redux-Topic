import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import CartSlice from './features/cart/CartSlice'
import ProductsSlice from './features/Products/ProductsSlice'


export const store = configureStore({
  reducer: {
    counter:counterSlice,
    cart:CartSlice,
    products:ProductsSlice,
  } // ** this is => RootState
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']