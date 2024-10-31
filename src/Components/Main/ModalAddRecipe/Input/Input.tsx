 import {Label, Wrapper } from "./style";
import React from "react";



type TInputProps = {
    id:string,
    label:string,
    name:string,
    placeholder:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>,name:string)=>void,
    onBlur:any,
    value?:string|number,
    error:any,
    touched:any,
    isNum?:boolean,
}
export const Input:React.FC<TInputProps> = ({id,label,name,placeholder,onChange,onBlur,value,touched,error,isNum}) =>{
    return(
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <input type={isNum? 'number' : 'string'} onBlur={onBlur}  onChange={(e )=>onChange(e,name)} value={value} name={name} id={id} placeholder={placeholder}/>
            {error && touched && <span style={{color: 'red'}}>{error}</span>}
        </Wrapper>
        )
}