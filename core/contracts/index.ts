import { ethers } from "ethers";
import { WalletAccount } from "../wallet";

const contractAbi={
   
  contract: {
    address: "0x8190D2bB91DBA61A79C4e2765c60b26011D5fF30",
    signerAddress: "0x76dDA41f855bF72775A78EA66972F9b58c51d35F",
    abi: [
      "function Elections(uint256) view returns (uint256 id, address chairperson, bytes name, uint256 startdate, uint256 enddate, uint256 total_parties, uint256 total_voters, uint256 total_ballots, bytes img_url)",
      "function addBallotEvent(uint256 election_id, tuple(bytes32 name, bytes img_url)[] _candidates, bool _general, bytes32 _name)",
      "function addVoterToElectionEvent(uint256 _electionID, address _voter)",
      "function addVotersToElectionEvent(uint256 _electionID, address[] _voters)",
      "function electionID() view returns (uint256)",
      "function getBallot(uint256 election_id, uint256 ballot_id) view returns (uint256 id, bytes32 name, tuple(bytes32 name, bytes img_url, uint256 voteCount)[] candidates, uint256 totalVotes, uint256 candidateCount, uint256 event_id)",
      "function getElection(uint256 election_id) view returns (uint256 id, address chairperson, bytes name, uint256 startdate, uint256 enddate, bytes32[] partyNames, address[] partyAccount, bytes[] partyimg_urls, uint256 total_parties, uint256 total_ballots, uint256 total_voters)",
      "function getTime() view returns (uint256 time)",
      "function getVoteRight(uint256 election_id) view returns (bool rightToVote)",
      "function getVoteStatus(uint256 election_id) view returns (address account, uint256 weight, uint256 totalVoteEvents, tuple(address account, bytes32 name, bytes img_url)[] party_verified, bool rightToVote)",
      "function getVoterHistory(uint256 election_id) view returns (tuple(bool voted, address delegate, uint256 vote, bytes32 candidateName, uint256 pool_id, bytes32 pool_title)[])",
      "function newElectionEvent(bytes name, uint256 startdate, uint256 enddate, tuple(address account, bytes32 name, bytes img_url)[] _parties, bytes _img_url)",
      "function poolParties(uint256) view returns (address)",
      "function totalElectionEvents() view returns (uint256)",
      "function verifyVoter(uint256 election_id, address voter, bytes32 name)",
      "function vote(uint256 election_id, uint256 ballot_id, uint256 choice)"
    ]
  }
  }

  export async function ContractPaper() {
    let ViewDB = null;
    let StateDB = null;
    try {
    
    const {provider,signer}=await WalletAccount();
      const { address, abi } =contractAbi.contract;
      // create an instance of our bank smart contract
      StateDB =  new ethers.Contract(address, abi,signer );
      ViewDB= new ethers.Contract(address, abi,provider );

      return {
        StateDB,
        ViewDB
      };
    } catch (error) {
      console.error(error);
    }
    return {
        StateDB,
        ViewDB

    };
  }
  
  