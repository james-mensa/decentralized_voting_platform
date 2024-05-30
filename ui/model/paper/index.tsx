import React from 'react';
import "./paper.scss"
import { Color } from '../modelStyles';

type paperStyleType = "outlined" | "primary" | "none"
interface paperProps {


    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
    elevation?: number;
    styeType?: paperStyleType;
    borderColor?: string;

    


}
const Paper: React.FC<paperProps> = ({ className, children, borderColor = Color.DEFAULT_BORDER_COLOR, elevation = 0.2, styeType = "outlined", styles }) => {
   

    const paperCss = (): React.CSSProperties => {
        let style: React.CSSProperties = {}
        if (styeType === "outlined") {
            style = {
                boxShadow: "none",
                borderColor: borderColor
            }

        }

        if (styeType === "primary") {
            style = {
                boxShadow: ` 0px 8px 24px 0px rgba(140, 149, 159, ${elevation})`,
                borderColor: borderColor
            }


        }
        if (styeType === "none") {

            style = {
                boxShadow: "none",

                borderColor: "Background",
                borderWidth:"0px"
            }
        }
        return style
    }
    return (
        <div className={`paper ${className}`}

            style={{
                ...styles, ...paperCss(),
            }}>
            {children}
        </div>

    )

}


export default Paper