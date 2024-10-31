import {CookTime, Delete, Difficult, ItemImage, ItemInfo, ItemName, Wrapper} from "./style";
import deleteSvg from './images/delete.svg'
import {TRecipeItem} from "../../../../redux/recipes/types";
import React, {useState} from "react";
import {deleteRecipe} from "../../../../redux/recipes/slice";
import {useDispatch} from "react-redux";
import {ModalRecipeItem} from "../ModalRecipeItem/ModalRecipeItem";

type TRecipeItemProps = {
    obj: TRecipeItem
}
export const RecipesItem: React.FC<TRecipeItemProps> = ({obj}) =>{
    const dispatch = useDispatch();
    const [modalRecipeItemOpen, setModalRecipeItemOpen] = useState<boolean>(false)
    const handleDeleteClick = (id:string) => {
        dispatch(deleteRecipe(id))
    }

    const handleOpenRecipe = () =>{
        setModalRecipeItemOpen(true)
    }

    return(
        <Wrapper onClick={handleOpenRecipe}>
            {modalRecipeItemOpen && <ModalRecipeItem recipeItem={obj} modalRecipeItemOpen={modalRecipeItemOpen} setModalRecipeItemOpen={setModalRecipeItemOpen}/>}
            <ItemImage src={obj.images[0].content}/>
            <ItemInfo>
                <ItemName>
                    {obj.name}
                </ItemName>
                <CookTime>
                    {`Время приготовления: ${obj.timeHours}ч. ${obj.timeMins}мин.`}
                </CookTime>
                <Difficult>
                    {`Сложность : ${obj.difficulty}/10`}
                </Difficult>
            </ItemInfo>
            <Delete onClick={() => {handleDeleteClick(obj.id)}} src={deleteSvg}/>
        </Wrapper>
    )
}