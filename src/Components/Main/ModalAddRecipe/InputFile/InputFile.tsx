import {Field, ErrorMessage as Error} from "formik";
import {Label, Wrapper } from "./style";
import React, {useRef} from "react";


type TInputProps = {
    id:string,
    label:string,
    name:string,
    onChange: any,
    onChangeMin?:any
}
export const InputFile:React.FC<TInputProps> = ({id,label,name,onChange,onChangeMin}) =>{
    const uploadRef = useRef<HTMLInputElement>(null);
    return(
        <Wrapper>
            {/*<Label htmlFor={id}>{label}</Label>*/}
            {/*<input type='file' hidden onChange={(event) => {*/}
            {/*    setFieldValue("file", event.currentTarget.files[0]);*/}
            {/*}} name={name} id={id}/>*/}
            {/*<Error name={name}>{(error) => <span>{error}</span>}</Error>*/}
        </Wrapper>
        )
}