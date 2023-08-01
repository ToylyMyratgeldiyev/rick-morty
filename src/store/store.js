import { configureStore } from '@reduxjs/toolkit'
import getIdReducer from "./getId.slice";

export const store = configureStore({
    reducer: {
        getId : getIdReducer
    },
})