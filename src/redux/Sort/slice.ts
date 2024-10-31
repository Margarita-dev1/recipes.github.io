import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TInitialState, TSortItem} from "./types";


const initialState:TInitialState = {
    sortList : [
        {name: 'сложности(возрастанию)', value:'difficulty'},
        {name: 'сложности(убыванию)', value:'-difficulty'},
        {name: 'времени готовки(возрастанию)', value:'time'},
        {name: 'времени готовки(убыванию)', value:'-time'},
    ],
    activeSort: {name: 'сложности(возрастанию)', value:'difficulty'},
    currentPage: 1,
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setActiveSort(state, action:PayloadAction<TSortItem>){
            state.activeSort = action.payload
        },
        setCurrentPage(state, action:PayloadAction<number>){
            state.currentPage = action.payload
        }
    },
})

export const {setActiveSort,setCurrentPage} = sortSlice.actions
export default sortSlice.reducer