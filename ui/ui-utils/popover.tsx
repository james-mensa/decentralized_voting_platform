import React from "react"
import "./styles.css"
import {
Box,
    Stack,
    Text,
    useColorMode,
   
  } from '@chakra-ui/react';
import { Colors } from "@/theme/palette";
interface Component{
    text: string,target: string,idx: string
    textColor?: string,
    placeholder?: string,   

}

const PopOver:React.FC<Component>=({text,target,idx,textColor,placeholder=text})=>{
    const { colorMode} = useColorMode()
    return (
        <Stack className="popup-container"
        id={idx+target}>
                 <Box className="popup-main"
             style={{
                backgroundColor:colorMode==="dark" ? Colors.grey[900]: Colors.grey[300]
              

            }}
        >
      <Text
    fontSize='sm'
    as='b'
       
      >{placeholder}</Text>  
        </Box>
        <Stack
    
         direction="row" justifyContent="right"
        >
            <Box
        style={{
          backgroundColor:colorMode==="dark" ? Colors.grey[900]: Colors.grey[300]
        }}

         className="popup-arrow"></Box>
        </Stack>
      
   
       </Stack>
    )
}

export default PopOver