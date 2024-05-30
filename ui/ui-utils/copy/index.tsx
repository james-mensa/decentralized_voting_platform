
import React, {useState } from "react";
import {
    Box,
        IconButton,
        Text,
       
       
      } from '@chakra-ui/react';
import PopOver from "../popover";
import { IoCopyOutline } from "react-icons/io5";
interface details {
    text: string,
    idx: string,
 



}




export function generateIdx() {
    const currentTime = new Date();
    const timeInMilliseconds = currentTime.getTime(); 
    let random5Digits = ('0000' + (timeInMilliseconds % 100000)).slice(-5);
    random5Digits += Math.floor(Math.random() * 90000) + 10000;
    random5Digits = random5Digits.slice(-5);
    return random5Digits;
  }


export const CopyText: React.FC<details> = ({idx, text }) => {

const generatedIdx = generateIdx();
    const [copy, setcopy] = useState<boolean>(false)
    const IconMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {

        let id = event.currentTarget.className;
     
            const pop = document.getElementById(id);
            pop?.classList.add('show-popup')
          
        
    };


    const IconMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
      
        setcopy(false)
        let id = event.currentTarget.className;
      

     
            const pop = document.getElementById(id);
            pop?.classList.remove('show-popup')
          
        

    };

    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text copied to clipboard:', text);
            setcopy(true)
           
          })
          .catch((error) => {
            console.error('Unable to copy text to clipboard:', error);
          
          });
      };
    

    return (
        <Box className="flex flex-column item-center justify-center" style={{marginTop:"20px"}}>
         
                <div className={generatedIdx+ "icon"}
                    onMouseEnter={IconMouseEnter} onMouseLeave={IconMouseLeave}

                >
                      <PopOver idx={generatedIdx} text={copy ? "copied" : "copy to clipboard"} target="icon" />
                 <Box
                    onClick={()=>{
                        copyToClipboard(idx)

                    }}

                        sx={
                            {
                                height: 30,
                                width: 30
                            }
                        }


                    >
                     <IoCopyOutline/>
                    </Box>
                  
          


                </div>




     
        </Box>



    )
}

