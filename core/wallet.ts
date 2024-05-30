"use client"
import { JsonRpcSigner } from 'ethers';
import { AbstractProvider } from 'ethers';
import { BrowserProvider, ethers } from 'ethers';

interface walletProps{
    signer:JsonRpcSigner | null ;
    provider:BrowserProvider | AbstractProvider |null ;
}


export async function WalletAccount() :Promise<walletProps> {
    let signer :JsonRpcSigner | null =null;
    let provider:BrowserProvider | AbstractProvider |null =null;
    if (window.ethereum == null) {
        // If MetaMask is not installed, we use the default provider,
        // which is backed by a variety of third-party services (such
        // as INFURA). They do not have private keys installed,
        // so they only have read-only access
        console.log("MetaMask not installed; using read-only defaults")
        provider = ethers.getDefaultProvider()
        console.log({provider})
    } else {
        // Connect to the MetaMask EIP-1193 object. This is a standard
        // protocol that allows Ethers access to make all read-only
        // requests through MetaMask.
        let browerProvider:BrowserProvider;
        browerProvider = new ethers.BrowserProvider(window.ethereum)
        // It also provides an opportunity to request access to write
        // operations, which will be performed by the private key
        // that MetaMask manages for the user.
        signer = await browerProvider.getSigner();
        
        return {
        provider:browerProvider,
        signer
      }

    }
return {
    provider,
    signer
  
}
  }