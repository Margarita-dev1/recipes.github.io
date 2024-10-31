import {createPortal} from "react-dom";
import {OtherInfo, RecipeText, Title, Wrapper, CLoseSvg} from "./style";
import React from "react";
import closeSvg from '../../ModalAddRecipe/images/close.svg'
import {TRecipeItem} from "../../../../redux/recipes/types";
import {ImagesSlider} from "./ImagesSlider/ImagesSlider";


type TModalRecipeItemProps = {
    recipeItem: TRecipeItem,
    setModalRecipeItemOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    modalRecipeItemOpen: boolean,
}

export const ModalRecipeItem:React.FC<TModalRecipeItemProps> =({recipeItem,modalRecipeItemOpen, setModalRecipeItemOpen}) =>{

    const handleCloseClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.stopPropagation()
        setModalRecipeItemOpen(false)

    }

    return createPortal(
        <Wrapper>
            <Title>
                {recipeItem.name}
                <CLoseSvg onClick={(e)=>handleCloseClick(e)} src={closeSvg}/>
            </Title>
            <RecipeText>{recipeItem.text}</RecipeText>
            <OtherInfo>
                <p>Время приготовления: {recipeItem.timeHours}ч. {recipeItem.timeMins}мин.</p>
                <p>Сложность: {recipeItem.difficulty} / 10</p>
            </OtherInfo>
            <ImagesSlider imagesItems={recipeItem.images}/>
        </Wrapper>
        , document.body)
}