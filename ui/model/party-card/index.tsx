import React from 'react';
import { Typography } from '../labels-model';
import "./party.css"
import { maskMiddleCharacters } from "@/core/utils/common";
interface Component{
name?:string;
index?:number;
account:string

}

export const PartyCard:React.FC<Component>=({name,index,account})=>{


    return(
        <div className='party-container'>
            <div style={{
                width: "100px",
                height: "100px",
                borderRadius:"50px",
                display:"flex"
            ,
            flexDirection:"column",
            alignItems:"center",
            backgroundColor:"#b6bdfc",
            justifyContent:"center"

            }}>
                
                    <p style={{color:"#0e112e",fontSize:"25px"}}>
{ index}
                    </p>
                   
                
            </div>
            <Typography styles={{color:"chocolate" ,fontSize:"20px"}}>
                {
                    name?.toLocaleUpperCase()  
                }
            </Typography>

            <Typography styles={{color:"#5a61a6" ,fontSize:"17px"}}>
                {
                  maskMiddleCharacters({address:account.toLocaleLowerCase()})    
                }
            </Typography>


        </div>
    )
}