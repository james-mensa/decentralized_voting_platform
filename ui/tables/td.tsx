
import React from "react"
import "./td.scss"
import {Typography} from "@/ui/model/labels-model"
type bType="dashed" | "solid"  | "dotted" | "none"
import { background, useColorMode } from "@chakra-ui/react"
import { Colors } from "@/theme/palette"
interface props{
    children?:React.ReactNode
    ,className?:string,
    style?:React.CSSProperties
    borderWidth?:number
    borderColor?:string
    borderType?:bType
    bg?:string
    component?:boolean
    text?:string | number

}


const TableCell:React.FC<props>=({children,className,style,bg,borderColor,text,component=false,borderWidth=1,borderType="solid"})=>{
    
    const { colorMode } = useColorMode();
    borderColor=colorMode==="dark" ? Colors.grey[700] :Colors.grey[300]
    return(
        <td

        className={className}
        
        style={{
            ...style,
            backgroundColor:bg,
            borderStyle:borderType,
            borderBottomColor:borderColor,
            borderBottomWidth:`${borderWidth}px`,
        
        
        }}>
            {
            component && children
        }
            
        <Typography>
             {text}
        </Typography>

        
           
           
        </td>
    )
}


export default TableCell