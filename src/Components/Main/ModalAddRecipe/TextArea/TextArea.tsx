
import {Label, Wrapper } from "./style";
import React from "react";


type TTextAreaProps = {
    id:string,
    label:string,
    name:string,
    placeholder:string,
    onChange: any,
    onBlur:any,
    value:string,
    error:any,
    touched:any,
}
export const TextArea:React.FC<TTextAreaProps> = ({id,label,name,placeholder,onChange, onBlur,value,error,touched}) =>{
    return(
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <textarea onBlur={onBlur} value={value} onChange={onChange} name={name} id={id} placeholder={placeholder}/>
            {error && touched && <span style={{color: 'red'}}>{error}</span>}
        </Wrapper>
        )
}