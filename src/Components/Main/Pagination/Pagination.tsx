import {NavButton, PaginationWrapper } from "./style"
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {recipesSelector} from "../../../redux/recipes/selectors";

type TPaginationProps = {
    itemsPerPage:number,
    currentPage:number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}
export const Pagination:React.FC<TPaginationProps> = ({itemsPerPage,currentPage,setCurrentPage}) => {
    const recipesArray = useSelector(recipesSelector)

    const [totalPages, setTotalPages] = useState<number>(Math.ceil(recipesArray.length/itemsPerPage))


    useEffect(()=>{
        setTotalPages(Math.ceil(recipesArray.length/itemsPerPage))
    }, [recipesArray])

    const handlePageClick = (idx:number) => {
        setCurrentPage(idx)
    }
    const handlePrevBtn = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextBtn = () => {
        if(currentPage < totalPages-1){
            setCurrentPage(currentPage+1)
        }
    }

    return(
        <PaginationWrapper>
            <NavButton disabled={currentPage===0} onClick={handlePrevBtn}>{'<'}</NavButton>
            {[...Array(totalPages)].map((_,idx) => (
                <NavButton active={idx === currentPage} onClick={() => {handlePageClick(idx)}} key={idx}>{idx+1}</NavButton>
            ))}
            <NavButton disabled={currentPage===totalPages-1} onClick={handleNextBtn}>{'>'}</NavButton>
        </PaginationWrapper>
    )
}
