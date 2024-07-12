import { configureStore } from '@reduxjs/toolkit'
import {homeSlice, productSlice, userSlice} from './features'

const store = configureStore({
    reducer: {
        home: homeSlice,
        product: productSlice,
        user: userSlice
    },
})

export type ReducerType = typeof store.dispatch;
export default store;