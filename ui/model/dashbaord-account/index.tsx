"use client"
import React, { useEffect, useState } from "react";
import "./account.css"
import { AccountWallet ,getRandomItem} from "@/core/utils/common";
import Image from "next/image";
import { AccountDetails } from "@/core/utils/Definitions";
import { accountImage } from "@/core/data";

import { IoCopyOutline } from "react-icons/io5";

export const AccountDetail=()=>{
    const [account,setAccount]=useState<AccountDetails>()
    const [account_image,set_account_image]=useState<string>("");
    useEffect(()=>{
set_account_image(getRandomItem(accountImage))
    },[])

    async function getAccountDetails() {
        try {
            const accountDetails :AccountDetails= await AccountWallet();
         
            setAccount(accountDetails)
           return;
            // Now you can use the account details as needed
        } catch (error) {
            console.error("Error fetching account details:", error);
            // Handle errors here, such as displaying an error message to the user
        }
    }
    // useEffect(()=>{
    //   const data=  AccountWallet()
    //   console.log({data})
    // })
    getAccountDetails();
    return(


        <div className="account-detail">
<h1>Account</h1>
<div className="acccount-address flex flex-row items-center gap-1 ">
                        <Image src={account_image} alt="" width={30} height={30} /><p className="account-address">{account?.address }</p><IoCopyOutline />
                    </div>
                  
                    <span>Balance: {account?.balance} Eth</span>
            </div>
    )
}