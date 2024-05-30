
import React from "react"
import "./th.scss"
type bType="dashed" | "solid"  | "dotted" | "none"
interface props{
    children?:React.ReactNode
    ,className?:string,
    style?:React.CSSProperties
    borderWidth?:number
    borderColor?:string
    bg?:string
    borderType?:bType
}


const TableHead:React.FC<props>=({children,className,style,bg,borderColor="white",borderWidth=1,borderType="none"})=>{
    return(
        <th

        className={className}
        
        style={{
            ...style,
            backgroundColor:bg,
            borderBottomColor:borderColor,
            borderBottomWidth:`${borderWidth}px`,
            borderStyle:borderType
    






        }}>
            {children}
        </th>
    )
}


export default TableHead