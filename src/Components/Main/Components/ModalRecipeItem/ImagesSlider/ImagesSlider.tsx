import React, {useState} from "react";
import {ActiveImage, Nav, Wrapper} from "./style";
import {TFile} from "../../../ModalAddRecipe/helpers";

type TImagesSlider = {
    imagesItems: TFile[]
}

export const ImagesSlider:React.FC<TImagesSlider> = ({imagesItems}) => {

    const [activeIdx, setActiveIdx] = useState<number>(0)
    const handlePrevClick = () => {
        activeIdx === 0 ? setActiveIdx(imagesItems.length - 1) : setActiveIdx(activeIdx- 1)
    }
    const handleNextClick = () => {
        activeIdx === imagesItems.length - 1 ? setActiveIdx(0) : setActiveIdx(activeIdx + 1)
    }

    return(
        <Wrapper>
            <Nav onClick={handlePrevClick} disabled={imagesItems.length === 1}>{'<'}</Nav>
            <ActiveImage src={imagesItems[activeIdx].content}/>
            <Nav onClick={handleNextClick} disabled={imagesItems.length === 1}>{'>'}</Nav>
        </Wrapper>
    )
}