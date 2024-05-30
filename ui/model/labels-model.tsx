import React from "react"
import "./modelStyles/text.scss"
import { background, useColorMode } from "@chakra-ui/react"
import { Colors } from "@/theme/palette"
interface labelProps{
    children?: React.ReactNode
    className?:string
    styles?: React.CSSProperties
    textColor?:string,
    fontSize?:number
    
}




export const H1:React.FC<labelProps>=({children,className,styles,textColor})=>{
    const { colorMode } = useColorMode();
    textColor=textColor ?? colorMode==="dark"  ? Colors.grey[300]: Colors.grey[800];
    return(
        <h1  style={{...styles,color:textColor}} className={ `${className && className}  h1`}>
            {children}
        </h1>
    )
}

export const H2:React.FC<labelProps>=({children,className,styles,fontSize=18,textColor})=>{
    const { colorMode } = useColorMode();
    textColor=textColor ?? colorMode==="dark"  ? Colors.grey[300]: Colors.grey[800];
    return(
        <h2  style={{...styles, color:textColor,fontSize:`${fontSize}px`}} className={ `${className && className}  h2`}>
            {children}
        
        </h2>
    )
}

export const H3:React.FC<labelProps>=({children,className,styles})=>{
    return(
        <h3  style={{...styles}} className={ `${className && className}  h3`}>
            {children}
        </h3>
    )
}





export const Typography:React.FC<labelProps>=({children,className,styles,fontSize=15})=>{
    const { colorMode } = useColorMode();
    return(
        <p  style={{...styles,color: colorMode==="dark"? Colors.grey[400] : Colors.grey[900],fontSize:`${fontSize}px`}} className={ `${className && className}  p1`}>
            {children}
        </p>
    )
}


export const Typography2:React.FC<labelProps>=({children,className,styles,textColor})=>{

    return(
        <p  style={{...styles,color:textColor}} className={ `${className && className}  p2`}>
            {children}
        </p>
    )
}








export const Label:React.FC<labelProps>=({children,className,styles,textColor,fontSize=14})=>{

    return(
        <p  style={{...styles,color:textColor,fontSize:`${fontSize}px`}} className={ `${className && className}  label`}>
            {children}
        </p>
    )
}




