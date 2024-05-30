import { ContractPaper } from "../contracts";
import { convertDateToTimestamp, convertToBytes32, getParties,convertLargeStringToBytes32 } from "../utils/common";
import { createNewEventProps } from "../utils/types";
export async function createElection({ name, parties, startDate, endDate, logo }: createNewEventProps) {
  try {
    const _name = convertLargeStringToBytes32(name);
    const election_parties = getParties(parties);
    const _startDate = convertDateToTimestamp(startDate);
    const _endDate = convertDateToTimestamp(endDate);
    const _logo = convertLargeStringToBytes32(logo ?? 'assdsd');
    const contract = await ContractPaper();
    const initializeElection = await contract.StateDB?.newElectionEvent(
      _name,
      _startDate,
      _endDate,
      election_parties,
      _logo
    );
    await initializeElection.wait();
    console.log({ msg: "election added successfully" });
    return { msg: "election added successfully" }; // Resolving the promise with success message
  } catch (error) {
    console.log(error);
    throw error; // Throw the error to be caught by the calling function
  }
}