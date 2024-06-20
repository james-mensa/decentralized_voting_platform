
import {ethers} from "ethers"
import { AccountDetails } from "./Definitions";
import { partyProps ,partyDBProps} from "./types";

interface addressProps{
    address: string;
    number?:number
}

export function maskMiddleCharacters({address, number=5}:addressProps) {
    const hexWithoutPrefix = address.substring(2);
    const firstCharacters = hexWithoutPrefix.substring(0, number);
    const lastCharacters = hexWithoutPrefix.substring(hexWithoutPrefix.length - number);

    const maskedMiddle = '*'.repeat(5);
    return `0x${firstCharacters}${maskedMiddle}${lastCharacters}`;
}



export const AccountWallet = async ():Promise<AccountDetails> => {
    let signer = null;
    let provider;
let account_address;

let account_balance;
    if (window.ethereum == null) {
        // If MetaMask is not installed, we use the default provider,
        // which is backed by a variety of third-party services (such
        // as INFURA). They do not have private keys installed,
        // so they only have read-only access
        console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
   
    
    } 
    else {
        // Connect to the MetaMask EIP-1193 object. This is a standard
        // protocol that allows Ethers access to make all read-only
        // requests through MetaMask.
        provider = new ethers.BrowserProvider(window.ethereum)
        // It also provides an opportunity to request access to write
        // operations, which will be performed by the private key
        // that MetaMask manages for the user.
        signer = await provider.getSigner();
        console.log({signer})
        account_address=signer.address;
        account_balance = await provider.getBalance(signer.address);
       

    const response:AccountDetails={
        address:account_address,
        
        balance:ethers.formatEther(account_balance)
    }
        return response
 
    }
  
    return {
        address:account_address,
    
        balance:'0',
    }

  }
  export function getRandomItem(data:any) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }









  
/// UTILS FUNCTIONS
export function convertDateToTimestamp(dateTime: Date) {
    const timestampInMillis = dateTime.getTime();
    const timestampInSeconds = Math.floor(timestampInMillis / 1000);
    return timestampInSeconds;
  }
  
  const proposalNames = ["NDC", "NPP", "CPP"];
  export function convertManyToBytes32(Names: string[]) {
    const NamesBytes32 = Names.map((name) =>
      ethers.encodeBytes32String(name)
    );
    return NamesBytes32;
  }
  export function convertManyBytes32ToString(Bytes: string[]) {
    const NamesConverted = Bytes.map((bytes32) =>
      ethers.decodeBytes32String(bytes32)
    );
    return NamesConverted;
  }
  
  export function convertBytes32ToString(Bytes32: string) {
    const NameConverted = ethers.decodeBytes32String(Bytes32);
    return NameConverted;
  }
  export function convertToBytes32(Name: string) {
    const NameBytes32 = ethers.encodeBytes32String(Name);
    return NameBytes32;
  }
  
  export function convertLargeStringToBytes32(Name: string) {
    const NameBytes= ethers.toUtf8Bytes(Name);
    return NameBytes;
  }
  

  export function getParties(party: partyProps[]): partyDBProps[] {
    const parties = party.map((target) => {
      return { account: target.account, name: convertToBytes32(target.name), img_url: convertLargeStringToBytes32(target.img_url)};
    });
    return parties;
  }
  

export function isValidEthereumAddress(address: string): boolean {
  return ethers.isAddress(address);
}

