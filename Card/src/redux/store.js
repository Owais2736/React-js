import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../card/cardSlice"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})