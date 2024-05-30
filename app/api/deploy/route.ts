import { ethers } from "ethers";

import { NextApiRequest, NextApiResponse } from "next";
const fs = require("fs/promises");
const path = require("path");

const output = require("./../../../bin/core/contracts/Ballot.json");
const ABI = output.abi;
const bytecode = output.bytecode;

export async function POST(req: any, res: NextApiResponse) {
  try {
    const data = await req.json();
    const { candidates, parties } = data;
    console.log({ candidates, parties });

  //  const provider = new ethers.JsonRpcProvider(
  //     "https://services.zkrypto.com/sepolia/rpc/"
  // );
   const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
    
    const Wallet = new ethers.Wallet(
      //  "2bbc292c418ccfe7fe37fb8685e9516f18fa3a46185ba002979a218923bfd2e0",
       "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e",
      // signer,
      provider
    );

  

    const ContractInstance = new ethers.ContractFactory(ABI, bytecode, Wallet);
    
     const contractInstance = await ContractInstance.deploy(candidates, parties);
    await contractInstance.waitForDeployment();
    const result = await contractInstance.deploymentTransaction();
    
      const contractAddress = contractInstance.target;
      let timeStamp
      let blockNumber
      if(result){
      await provider.getTransactionReceipt(result.hash)
    .then(receipt => {
     blockNumber = receipt!.blockNumber;
      return provider.getBlock(blockNumber);
    })
    .then(block => {
      timeStamp = block!.timestamp;
      console.log("Contract deployed at timestamp:", timeStamp);
    })
    .catch(error => {
      console.error("Error getting deployment timestamp:", error);
    });
      }

      const deployedInstance:any=contractInstance.runner
      const response = {
        [contractAddress.toString()] : {
          abi: contractInstance.interface.format(),
          address: contractInstance.target,
          creator: deployedInstance.address,
          timeStamp,
          blockNumber,
          txhash:result?.hash
          // timeStamp:receipt
        },
      };
      await writeDeploymentInfo(response);
      return Response.json(contractInstance.runner);
      // return new Response (response, {
      //   status: 200,
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      //   },

      // })
  } catch (error) {
    console.log({ error });
    return new Response("error", {
      status: 500,
    });
  }
}


async function writeDeploymentInfo(contracts:any) {
  try {
    // Get the directory of the current script
    const filePath = path.join(process.cwd(), 'data');
    // Path to the deployment.json file in the current script directory
    const deploymentFilePath = path.join(filePath, 'deployment.json');

    let existingContracts = {};
    // Check if the file exists
    let fileExists = false;
    try {
      await fs.access(deploymentFilePath);
      fileExists = true;
    } catch (err) {
      // File does not exist
      fileExists = false;
    }

    // Read existing deployment info if the file exists
    if (fileExists) {
      const deployment = await fs.readFile(deploymentFilePath, 'utf8');
      existingContracts = JSON.parse(deployment);
    }

    // Merge existing contracts with new contract data
    const updatedContracts = { ...existingContracts, ...contracts };

    // Write updated contracts back to deployment.json
    await fs.writeFile(
      deploymentFilePath,
      JSON.stringify(updatedContracts, null, 2),
      { encoding: 'utf-8' }
    );

    console.log('Deployment info updated successfully.');
  } catch (error) {
    console.error('Error writing deployment info:', error);
  }
}

// Example usage

