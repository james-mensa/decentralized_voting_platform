import { Card } from "@/ui/model/card";
import { AccountDetail } from "@/ui/model/dashbaord-account";
import Link from "next/link";

export default function Dashbaord() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between w-full p-5 gap-5">
      <div className="w-full">
      

        <AccountDetail />
        <div className="grid grid-cols-5 gap-10 pt-10 ">
          <Card
            header="Events "
            subtitle="Events invited to participate "
            count={1}
            label="Invites"
          />
          <Card
            header="Pools Invited"
            subtitle="Events"
            count={3}
            label="Invites"
          />
          <Card
            header="Overview"
            subtitle="Events "
            count={5}
            label="Events deployed"
          />
            <Card
        
        header="Events Deployed "
        subtitle="Total events deployed to blockchain"
        count={1}
        label="Events"
      />
        </div>
       
      </div>
      <Link href="/deploy/events">
        <div className="trybtn">
          <h1>Let your vote count </h1>
          <p>Try NOW</p>
        </div>
      </Link>
    </main>
  );
}
