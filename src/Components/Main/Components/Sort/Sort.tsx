import React, {useEffect, useState} from "react";
import {Arrow, PopUpSort, SortWindow, Wrapper} from "./style";
import {TSortItem} from '../../../../redux/Sort/types'
import arrowUp   from './images/arrowUp.svg'
import arrowDown from './images/arrowDown.svg'
import {useDispatch, useSelector} from "react-redux";
import {recipesSelector} from "../../../../redux/recipes/selectors";
import {setRecipes} from "../../../../redux/recipes/slice";
import {TRecipeItem} from "../../../../redux/recipes/types";
import {activeSortSelector, sortListSelector} from "../../../../redux/Sort/selectors";
import {setActiveSort} from "../../../../redux/Sort/slice";

export const Sort = () => {
    const activeSort = useSelector(activeSortSelector)
    const sortList = useSelector(sortListSelector)
    const [popUpOpen, setPopUpOpen] = useState<boolean>(false)

    const dispatch = useDispatch()
    const recipes = useSelector(recipesSelector)



    const handleOpenSort = () => {
        setPopUpOpen(!popUpOpen)
    }
    const handleSortClick = (sort:TSortItem) => {
        dispatch(setActiveSort(sort))
        if(sort.value.includes('difficulty')){
            const result: TRecipeItem[] = recipes.slice().sort((a, b) =>
                sort.value.includes('-')
                    ? (+b.difficulty - +a.difficulty) :
                    (+a.difficulty - +b.difficulty)
            )
            dispatch(setRecipes(result))
        }
        if(sort.value.includes('time')){
            const result: TRecipeItem[] = recipes.slice().sort((a, b) =>
                sort.value.includes('-')
                    ? (+b.timeTotal - +a.timeTotal) :
                    (+a.timeTotal - +b.timeTotal)
            )
            dispatch(setRecipes(result))
        }
        setPopUpOpen(false)
    }


    return(
        <Wrapper>
            <p>Сортировать по:</p>
            <SortWindow>
                <p onClick={handleOpenSort}>{activeSort.name}</p>
                <Arrow src={popUpOpen ? arrowUp : arrowDown}/>
                {popUpOpen && <PopUpSort>
                    {sortList.map((el:TSortItem) => (
                        <div key={el.value} onClick={() => handleSortClick(el)}>{el.name}</div>
                    ))}
                </PopUpSort>}
            </SortWindow>
        </Wrapper>
    )
}