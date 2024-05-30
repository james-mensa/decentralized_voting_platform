"use client"
import { getRandomItem } from "@/core/utils/common";
import { DeployBtn } from "@/ui/model/Button";
import { CandidateCard } from "@/ui/model/candidate";
import { Input } from "@/ui/model/input";
import { H1,H2, } from "@/ui/model/labels-model";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

import { DeployEvent, HandleDeploy } from "@/ui/actions/deploy";
import { Colors } from "@/theme/palette"
import {
  useColorMode,
} from "@chakra-ui/react";
import { CustomTable } from "@/ui/tables/table";

import DateTimePickerViewRenderers from "@/ui/model/dateTime";
import { createNewEventProps,partyProps } from "@/core/utils/types";
import { createElection } from "@/core/hooks/newEvent";
import { NewElectionButton } from "@/ui/hooksAction/event/deploy-event-btn";

interface candidateprops{
  name?:string;
  image?:string
}
export default function CreateEvent() {
  const [candidates,addCandidate]=useState<candidateprops[]>([]);
  const [candidateName,setName]=useState<candidateprops>({});
  const [eventName,setEventName]=useState<string>('');
  const [parties,addParty]=useState<partyProps[]>([]);
  const [partyName,setpartyName]=useState<string>('');
const [partyAccount,setAccount]=useState('');
const [startDate,setStartDate]=useState<Date | null>(null);
const [endDate,setEndDate]=useState<Date | null>(null);


  const handleAddCandidate = () => {
    // Check if the candidate name already exists
    if (candidates.some(candidate => candidate.name === candidateName.name)) {
      // Handle duplicate candidate name here (e.g., show an error message)
      console.log("Candidate with the same name already exists.");
      return;
    }
    addCandidate([...candidates, candidateName]);
  };
  
  const handleAddParty = () => {
    // Check if the party name already exists
    if (parties.some(party => party.name === partyName || party.account===partyAccount )) {
      // Handle duplicate party name here (e.g., show an error message)
      console.log("Party with the same name already exists.");
      return;
    }
   
    addParty([...parties, { name: partyName, account: partyAccount ,
      img_url:'http://amber-managing-angelfish-602.mypinata.cloud/ipfs/QmXjM6ojLCmnN42wseGUqZzwjn8g2JBx5fQQhhvfwxToH7'}]);
  };


  const removeCandidateByIndex = (indexToRemove:number) => {
    // Filter out the candidate with the given index
    const updatedCandidates = candidates.filter((candidate, index) => index !== indexToRemove);
    // Update the state with the filtered candidates
    addCandidate(updatedCandidates);
  };



  const removePartyByIndex = (indexToRemove:number) => {
    // Filter out the candidate with the given index
    const updatedCandidates = parties.filter((candidate, index) => index !== indexToRemove);
    // Update the state with the filtered candidates
    addParty(updatedCandidates);
  };

  const updatePartyImage =async (address: string,uploadImage:any) => {
    // Find the index of the party to update
    const partyIndex = parties.findIndex(party => party.account === address);
 
    // If the party is found
    if (partyIndex !== -1) {
      // Create a copy of the party object at the found index

      const updatedParty = { ...parties[partyIndex] };
      // // Update the party's image
      const newImage =await uploadImage;
console.log(newImage);
      updatedParty.img_url = newImage;
      // Create a new parties array with the updated party object
      const updatedParties = [...parties];
      updatedParties[partyIndex] = updatedParty;
  
      // Update the state with the new parties array
      addParty(updatedParties);
      console.log({updatedParties})
    } else {
      // Handle if the party is not found
      console.log(`Party with name ${address} not found.`);
    }
  };

  const { colorMode } = useColorMode();
  const eventData:createNewEventProps={
    name:eventName,
    parties:parties,
    startDate: startDate!,
    endDate: endDate!,
  
  }
  const AddEventHandler=async()=>{
try{

  await  createElection(eventData);
  

}
catch(error){
console.log({error})
}
 
  }
  
 const eventHook=()=>{
  return  createElection(eventData);
 
  
 } 

  return (
    <main className="flex min-h-screen flex-col items-start justify-between w-full p-5 gap-5">
      <div className="w-full h-full" style={{ minHeight:"600px"}}  >
    
       <div className="flex flex-col justify-center items-center w-full mt-10">
       <div className="flex flex-row gap-5 items-center w-1/2">
        <Link href="/dashboard"  style={{marginTop:'-10px'}}>
        <FaArrowLeft color="#4df0e8"/>
        </Link>
        <H1 styles={{fontSize:"30px"}}>
            Deploy new event
        </H1>
        </div>
        {/* shadow-[0_10px_50px_rgba(0,0,0,0.15)] */}
<div className="w-1/2  rounded p-5  " style={{borderWidth:"1px", borderStyle:"solid", borderColor: colorMode==="dark"  ? Colors.grey[700]: Colors.grey[400],
 }}>

<Input btnLabel="Add"  label="Event name" 
handleOnChange={(value)=>setEventName(value.target.value)}  />
<H2 styles={{
  margin:"15px 0 15px 0"
}}>Event Durations</H2>


<div className="flex flex-row item-center w-full">
<DateTimePickerViewRenderers setStartDate={setStartDate} setEndDate={setEndDate}/>
        </div>
        
        <H2 styles={{
  margin:"15px 0 15px 0"
}}>Party Details</H2>
<div className="flex flex-row item-center w-full">
<Input btnLabel="Add"  label="Party Account Address" 
handleOnChange={(value)=>setAccount(value.target.value)}  />
          <Input btn={true} btnOnClick={handleAddParty} 
          btnLabel="Add" label="Party name" handleOnChange={(value)=>setpartyName(value.target.value)}  />
      
        </div>
        <div>
         
    
          </div>
        
  

</div>
<div className="flex w-1/2 flex-col mt-10" >
     

     <CustomTable
     RemoveAccountHandler={removePartyByIndex}
     content={parties}
     updatePartyImage={updatePartyImage}
                    header={[
                  
                      {
                        id: "photo",
                        label: "Photo",
                      },
                      {
                        id: "Name",
                        label: "Name",
                      },
                      {
                        id: "account",
                        label: "Account Address",
                      },
                      {
                        id: "No",
                        label: "No",
                      },
                     
                      {
                        id: "action",
                        label: "ACTION",
                      },
                    ]}
                  />
  
        </div>
       </div>
      
      </div>
<NewElectionButton params={eventData}/>
    </main>
  );
}
