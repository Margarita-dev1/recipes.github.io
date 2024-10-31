import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TInitialState, TRecipeItem} from "./types";


const initialState:TInitialState = {
    recipesArray : [],
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes(state, action:PayloadAction<TRecipeItem[]>){
            state.recipesArray = action.payload
        },
        addRecipes(state, action:PayloadAction<TRecipeItem>){
            state.recipesArray.push(action.payload)
        },
        deleteRecipe(state, action:PayloadAction<string>){
            state.recipesArray = state.recipesArray.filter((x) => {
                return x.id !== action.payload
            })
        },
        deleteAllRecipes(state){
            state.recipesArray = []
        }
    },
})

export const {setRecipes, addRecipes, deleteRecipe, deleteAllRecipes} = recipesSlice.actions
export default recipesSlice.reducer