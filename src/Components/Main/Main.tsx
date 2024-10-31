import {Wrapper} from "./style";
import {RecipesList} from "./Components/RecipesList/RecipesList";
import {ManageRecipes} from "./Components/ManageRecipes/ManageRecipes";
import {ModalAddRecipe} from "./ModalAddRecipe/ModalAddRecipe";
import {useState} from "react";
import {Pagination} from "./Pagination/Pagination";
import {useSelector} from "react-redux";
import {recipesSelector} from "../../redux/recipes/selectors";



export const Main = () => {
    const itemsPerPage = 3
    const[modalAddOpen, setModalAddOpen] = useState<boolean>(false)
    const recipesArray = useSelector(recipesSelector)
    const [currentPage,setCurrentPage] = useState<number>(0)

    return(
        <Wrapper>
            { modalAddOpen && <ModalAddRecipe setModalAddOpen={setModalAddOpen}/>}
            <ManageRecipes setModalAddOpen={setModalAddOpen}/>
            <RecipesList itemsPerPage={itemsPerPage} currentPage={currentPage} />
            {recipesArray.length > 3 && <Pagination itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
        </Wrapper>
    )
}