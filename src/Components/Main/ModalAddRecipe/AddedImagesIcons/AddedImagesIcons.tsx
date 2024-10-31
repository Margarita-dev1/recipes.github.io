import React from "react";
import {Icon, IconBlock, IconsList, SvgDelete} from "./style";
import deleteSvg from './images/deleteIcon.svg'
import {TFile} from "../helpers";

type TProps = {
    images:TFile[],
    handleDeleteImage:  (id: string) => void,
}

export const AddedImagesIcons:React.FC<TProps> = ({images, handleDeleteImage}) => {
    return(
        <IconsList>
            {images.map((el) => (
                <IconBlock key={el.id}>
                    <Icon src={el.content}/>
                    <SvgDelete src={deleteSvg} onClick={() => handleDeleteImage(el.id)}/>
                </IconBlock>
            )) }
        </IconsList>
    )
}