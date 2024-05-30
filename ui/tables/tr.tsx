import React from "react"
import "./tr.scss";
import TableCell from "./td";
import { Color } from "../model/modelStyles";


type bType = "dashed" | "solid" | "dotted" | "none"
interface props {
    children?: React.ReactNode
    , className?: string,
    style?: React.CSSProperties
    bg?: string
    selectIcon?: boolean
    checkStyle?: boolean
    borderType?: bType
}


const TableRow: React.FC<props> = ({
    children, className, style, bg,  borderType,
    selectIcon = false,
}) => {
    return (
        <tr
            className={className}
            style={{
                ...style,
                backgroundColor: bg
            }}>
            {
                children
            }
        </tr>)
}


export default TableRow