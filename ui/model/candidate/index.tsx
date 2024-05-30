import React from 'react';
import { Typography } from '../labels-model';
import "./candidate.css"

interface Component{
name?:string;
avater?:string;

}

export const CandidateCard:React.FC<Component>=({name,avater})=>{


    return(
        <div className='candidate-container'>
            <div style={{
                width: "100px",
                height: "100px",
                borderRadius:"50px",
                backgroundImage: `url(${avater})`,
                backgroundColor:"white",
                backgroundPosition:"center",
               backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
            }}>
            </div>
            <Typography styles={{color:"chocolate" ,fontSize:"20px"}}>
                {
                    name?.toLocaleUpperCase()  
                }
            </Typography>


        </div>
    )
}