export interface partyProps {
  account: string;
  name: string;
  img_url: string;
}

export interface partyDBProps {
  account: string;
  name: string;
  img_url: Uint8Array;
}

export interface createNewEventProps {
  name: string;
  parties: partyProps[];
  startDate: Date;
  endDate: Date;
  logo?: string;
}
