import { configureStore } from '@reduxjs/toolkit'
import recipesSlice from "./recipes/slice";
import sortSlice from "./Sort/slice";


export const store = configureStore({
    reducer: {
        recipesSlice,
        sortSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>