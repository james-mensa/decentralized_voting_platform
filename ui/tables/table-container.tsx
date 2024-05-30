
import React from "react"

import "./table.scss"
import { Colors } from "@/theme/palette"



interface props {
    children: React.ReactNode
    , className?: string,
    style?: React.CSSProperties
    bg?: string

}



const Table: React.FC<props> = ({
    children, className, style, bg={}
}) => {
    
    return (
        <table cellPadding="0" cellSpacing="0" border={0} className={`${className} `} style={{ ...style, backgroundColor: bg }}>
            {children}
        </table>
    )
}


export default Table