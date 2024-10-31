import {Wrapper} from "./style";
import {RecipesItem} from "../RecipesItem/RecipesItem";
import {useSelector} from "react-redux";
import {recipesSelector} from "../../../../redux/recipes/selectors";
import React from "react";
import {Sort} from "../Sort/Sort";

type TRecipesListProps = {
    itemsPerPage:number,
    currentPage:number,
}
export const RecipesList:React.FC<TRecipesListProps> = ({itemsPerPage,currentPage}) =>{
    const recipesArray = useSelector(recipesSelector)
    const firstRecipeIdx = currentPage === 0 ? 0 : currentPage * itemsPerPage
    const lastRecipeIdx = currentPage === 0 ? 3 : firstRecipeIdx + itemsPerPage


    return(
        <Wrapper >
            {recipesArray.length ? <Sort/> : null}
            {recipesArray.length ? (recipesArray.slice(firstRecipeIdx,lastRecipeIdx).map((el) =>
            <RecipesItem key={el.name} obj={el}/>)) : <div>Нет рецептов</div>}
        </Wrapper>
    )
}