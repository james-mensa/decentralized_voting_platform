
import React, { useState } from 'react';

import "./input.css"
import { grey } from '../modelStyles';
import Paper from '../paper';
import { Label,Typography } from '../labels-model';
import { ActionButton } from '../Button';
type paperStyleType = "outlined" | "primary" | "none"
import {useColorMode } from "@chakra-ui/react"
type widthType="full" |"normal"
interface inputProps {
    value?: string | number | readonly string[] | undefined,
    handleOnChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    ,
    btnOnClick?:()=>void;
    btnLabel?:string
    placeholder?: string | undefined,
    min?: number,
    max?: number,
    elevation?: number
    styeType?: paperStyleType
    borderColor?: string
    disabled?: boolean
    className?: string,
    styles?: React.CSSProperties,
    bg?: string,
    height?: number
    label?: string
    labelColor?: string
    name?: string
    labelClassName?: string
    labelStyles?: React.CSSProperties
    type?: string
    width?:widthType | number
    btn?:boolean;

    error?: boolean
    errorMsg?: string
}

export const Input: React.FC<inputProps> = ({ error,errorMsg ,name,btn=false,btnLabel, btnOnClick,className, styles, value, placeholder, handleOnChange, max, min, elevation, styeType = "none",
    borderColor, disabled, bg, label,
    labelClassName,
    labelStyles,
    labelColor = grey[700], height = 35, type = "text", 
width=300 }) => {
    
    const { colorMode } = useColorMode();
bg=bg ?? colorMode==="dark" ? grey[700]:  grey[300];
borderColor=borderColor ?? colorMode==="dark" ? grey[600]:  grey[400];
labelColor=labelColor ?? colorMode==="dark"  ? grey[400]: grey[800];
    const InputCss = (): React.CSSProperties => {
        let style: React.CSSProperties = {}
        if (styeType === "outlined") {
            style = {
                boxShadow: "none",
                borderColor: borderColor
            }
        }
        if (styeType === "primary") {
            style = {
                boxShadow: `0px 8px 24px 0px rgba(140, 149, 159, ${elevation})`,
                borderColor: borderColor
            }
        }
        if (styeType === "none") {

            style = {
                boxShadow: "none",
                borderColor: borderColor
            }
        }
        return style
    }
    return (
        <Paper styeType='none'  >
       {label && <Typography styles={{ ...labelStyles, marginBottom: "4px" }} className={labelClassName} textColor={labelColor} fontSize={17}>{label}</Typography>}
<div className='flex flex-row items-center gap-5'>
<input

className={className}
style={{
    ...styles, ...InputCss(),
    backgroundColor: bg,
    height: `${height}px`,
    fontSize:"12px",
    width:width==="full"  ? "100%" : width==="normal" ? '' : `${width}px` 
}}
type={type}
name={name}
value={value}
onChange={handleOnChange}
placeholder={placeholder}
min={min}
max={max}
height={500}
width={20}
disabled={disabled}
>
</input>
{btn && 
 <ActionButton
 bg={bg}
handleOnClick={btnOnClick}
varient="outlined"
radius={5}
  
 >
   {btnLabel}
 </ActionButton>}  
    </div>
       

        </Paper>

    )

}