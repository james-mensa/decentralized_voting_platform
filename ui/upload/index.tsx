"use client";
import { useState, useRef } from "react";
import Image from 'next/image'
import { Button } from "@chakra-ui/react";
interface props{
  uri?:string;
  uploadToWeb?:(address:string,upload:any)=>void;
  address?:string;
}
export  const ImageFile:React.FC<props>=({uri, address,uploadToWeb})=>{
  
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);
console.log({address})
  const inputFile = useRef(null);

  const upload = async (fileToUpload:any) => {
    try {

       setUploading(true);
      const data = new FormData();
      data.set("file", fileToUpload);
      const res = await fetch("/api/file", {
        method: "POST",
        body: data,
      });
      const resData = await res.json();
      setCid(resData.IpfsHash);
       setUploading(false);
       let savedata:string | undefined;
       if(resData.IpfsHash && resData.IpfsHash !==undefined){
        savedata=`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${resData.IpfsHash}`
       }
       else{
        savedata=undefined
       }
      
      return savedata;
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e:any) => {
    uploadToWeb && uploadToWeb(address!, upload(e.target.files[0]));
  };

  console.log({uri})

  return (
  <div className="flex flex-row w-[100px] items-center" style={{position:"relative"}}>
      <input style={{visibility: 'hidden'}} type="file" id="file" ref={inputFile} onChange={handleChange} />
      {
        uri && uri !==undefined ?  <Image style={{position:'absolute'}}
        onClick={() =>  inputFile && inputFile.current?.click()}
           src={uri}
           alt="Image from IPFS"
           width={55}
           height={55}
         />
         :
         <Button style={{width:'60px',height:'50px',position:'absolute', fontSize:"10px"}} disabled={uploading}   onClick={() =>  inputFile && inputFile.current?.click()}>  {uploading ? "Uploading..." : "Upload"}</Button>
      }
    
    </div>
  );
}
