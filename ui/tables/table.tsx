import React from "react";
import { ActionButton } from "../model/Button";
import TableRow from "./tr";
import TableCell from "./td";
import TableHead from "./th";
import TableBody from "./tbody";
import Table from "./table-container";
import { Colors } from "@/theme/palette";
import { useColorMode } from "@chakra-ui/react";
import {ImageView} from "@/ui/model/image"
import {partyProps } from "@/core/utils/types";

import { ImageFile } from "../upload";
interface headerProps {
  id: string;
  label: string;
}

export interface tableProps {
  header: headerProps[];
  content?: partyProps[];
  RemoveAccountHandler?:(indexToRemove:number)=>void;
  updatePartyImage:(address:string,uploadImage:any)=>void;

}

export const CustomTable: React.FC<tableProps> = ({ header, content,RemoveAccountHandler ,updatePartyImage}) => {
  const { colorMode } = useColorMode();
  return (
<>{content && content.length>0 && <Table >
        <thead>
          <TableRow bg={ colorMode==="dark"? Colors.grey[800] : Colors.grey[100]}>
            {header.map((data) => {
              return <TableHead key={data.id}>{data.label}</TableHead>;
            })}
          </TableRow>
        </thead>
        <TableBody>
    { content && content.map((data,index)=>{
return(
  <TableRow key={index}>
  <TableCell component={true}> <ImageFile uri={data.img_url} uploadToWeb={updatePartyImage} address={data.account} /></TableCell>
    <TableCell text={data.name}/>
    <TableCell text={data.account}/>
    <TableCell text={index+1}/>
    <TableCell component={true}>
    <ActionButton handleOnClick={()=> RemoveAccountHandler && RemoveAccountHandler(index)} radius={5}>Delete</ActionButton>
    </TableCell>
  </TableRow>
)

     })}
        
        </TableBody>
      </Table>
}
</>
  
  );
};
