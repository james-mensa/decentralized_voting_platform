import {ethers} from "ethers"
//const fs = require("fs/promises");
const output = require("./../../bin/core/contracts/Ballot.json");
const ABI = output.abi;
const bytecode = output.bytecode;

export const deployContract = async function () {
	try {
		//  const provider = new ethers.providers.JsonRpcProvider("https://services.zkrypto.com/sepolia/rpc/");
		const provider =new ethers.JsonRpcProvider("http://127.0.0.1:8545")
		const Wallet = new ethers.Wallet(
			"0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e", provider);
		const ContractInstance = new ethers
			.ContractFactory(ABI, bytecode, Wallet);
		const contractInstance = 
			await ContractInstance.deploy(
                [
                  "0x4e44430000000000000000000000000000000000000000000000000000000000",
                  "0x4e50500000000000000000000000000000000000000000000000000000000000",
                  "0x4350500000000000000000000000000000000000000000000000000000000000"
                ],
                [
                    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
                    , '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
                ]
              );
			await contractInstance.waitForDeployment();
			const trans= contractInstance.deploymentTransaction()
		    console.log("Deployed contract address - ", 
			await contractInstance);

			//await writeDeploymentInfo(contractInstance)
			console.log({trans})
		// const setNameInitialResponse = 
		// 	await contractInstance.setName("GeeksforGeeks");
		// await setNameInitialResponse.wait();
		// let contractReturnedString = 
		// 	await contractInstance.getName();
		// console.log("Output value of getName() function "
		// 	+ "of solidity Smart contract - ", 
		// 	contractReturnedString);
	} catch (err) {
		console.log("Error in deploying contract.");
		console.log(err);
	}
};

// async function writeDeploymentInfo(contract:any) {
// 	const data = {
// 	  contract: {
// 		address: contract.address,
// 		signerAddress: contract.signer.address,
// 		abi: contract.interface.format(),
// 	  },
// 	};
// 	const content = JSON.stringify(data, null, 2);
// 	await fs.writeFile("deployment.json", content, { encoding: "utf-8" });
//   }