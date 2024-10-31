import {ManageButton, Wrapper} from "./style";
import React from "react";
import {deleteAllRecipes} from "../../../../redux/recipes/slice";
import {useDispatch} from "react-redux";


type TManageRecipes = {
    setModalAddOpen:  React.Dispatch<React.SetStateAction<boolean>>,
}

export const ManageRecipes:React.FC<TManageRecipes> = ({setModalAddOpen}) => {
    const dispatch = useDispatch();
    const handleAddClick = () => {
        setModalAddOpen(true)
    }
    const handleDeleteAllClick = ()=>{
        dispatch(deleteAllRecipes())
    }



    return(
        <Wrapper>
            <ManageButton onClick={handleAddClick}>Добавить</ManageButton>
            <ManageButton onClick={handleDeleteAllClick}>Удалить все</ManageButton>
        </Wrapper>
    )
}