import { grey } from "../modelStyles";
import "./btn.scss";
import React from "react";
import Image from "next/image";

type varients = "outlined" | "primary" | "none"
interface btnProps {
    className?: string;
    children?: React.ReactNode
    handleOnClick?: () => void
    styles?: React.CSSProperties,
    key?: string | number,
    onMouseEnter?: () => void, onMouseLeave?: () => void,
    onMouseOver?: () => void
    varient?:varients
    elevation?: number
    borderColor?: string
    bg?:string
    radius?: number
    
}


export const ActionButton: React.FC<btnProps> = ({ children, handleOnClick, onMouseEnter, onMouseLeave, onMouseOver, varient,elevation=1,borderColor,bg=grey[200],styles, key ,radius}) => {

    const btnCss = (): React.CSSProperties => {
        let style: React.CSSProperties = {}
        if (varient === "outlined") {
            style = {
                boxShadow: "none",
                borderColor: borderColor
            }

        }

        if (varient === "primary") {
            style = {
                boxShadow: ` 0px 8px 24px 0px rgba(140, 149, 159, 0.${elevation})`,
                borderColor: borderColor
            }


        }
        if (varient === "none") {

            style = {
                boxShadow: "none",
                borderColor: "Background",
                borderWidth:"0px"
            }
        }
        return style
    }
    

    return (
        <button
        style={{backgroundColor:bg,...btnCss(),...styles,borderRadius:`${radius}px`}}
            onClick={handleOnClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            key={key }>
            {children}
        </button>
    )
}

interface deployProps{
    handleClick?:()=>void
    label?:string
}

export const DeployBtn:React.FC<deployProps>=({handleClick,label})=>{

    return(
        <div onClick={handleClick} className="deploy-btn mb-10" >
        <Image alt="deploy" width={80} height={80} src="/assets/images/deploy.png"></Image>
      </div>
    )
}