import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};
export const HandleDeploy = async () => {
    try {
        const data={
            candidates:[
                "0x4e44430000000000000000000000000000000000000000000000000000000000",
              "0x4e50500000000000000000000000000000000000000000000000000000000000",
              "0x4350500000000000000000000000000000000000000000000000000000000000"
                ],
                parties:[
                    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
                    ,"0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
                ]
        }
      
      const response = await fetch('/api/deploy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log("deployed",response)

      // Handle successful response here
    } catch (error) {
      // Handle error here
      console.error('There was an error!', error);
    }
  };

export const DeployEvent = (
  
) => {
  return (
    <div>
      <main>
        <p></p>
      </main>
    </div>
  );
};
