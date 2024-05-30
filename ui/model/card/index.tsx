import React from "react";
import "./card.css"
import Image from "next/image";

interface Component{
    header: string;
    subtitle?: string;
   count?: number;
   label?: string;
   height?: number;
}
export const Card:React.FC<Component>=({header,subtitle,label,count,height})=>{
return(
    <div className="box-card-container flex flex-row  justify-between items-center " style={{height:height ? `${header}px` :''}}>


<div className="box-card">

<h1 className="box-card-h1">{header}</h1>
{subtitle && <h3 className="box-card-h3">{subtitle}</h3>}
<div className="box-card-content flex flex-row item-center gap-5">
  <span className="card-count">{count}</span><p className="card-label">{label}</p>
</div>

</div>

<Image src="/assets/images/ether5.png" alt="eth" width={80} height={150} />
   
    </div>

)
}
