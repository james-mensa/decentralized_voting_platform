
import React from "react"

import "./tbody.scss"


interface props{
    children?:React.ReactNode
    ,className?:string,
    style?:React.CSSProperties
    bg?:string
  
}



const TableBody:React.FC<props>=({
    children,className,style,bg
})=>{
    return(

        <tbody className={className} style={{...style,backgroundColor:bg}}>
{children}
        </tbody>
    )
}


export default TableBody