
"use client"
import React from 'react'
import "./home-page.css"
import Image from 'next/image'
import { FaLocationArrow } from "react-icons/fa";
import { deployContract } from '@/core/deployment/deploy';
import { PiScanLight } from "react-icons/pi";
import Link from 'next/link';



export const HomePage = () => {
    return (
        <div className='landing-page flex flex-col gap-3 min-h-screen w-full '>
            <div className='landing-page-layout flex flex-row justify-between align-middle w-full     p-20'>
                <div className=' landing-page-content flex flex-col gap-2 '   >

                    <h1 className=' landing-page-header'>Embrace the Extensive Application</h1>
                    <div  >
                        <h2 className=' landing-page-subtitle'>Blockchain Network .</h2>
                    </div >
                    <p className='landing-page-typography'>
                        In a world where trust and transparency are paramount, embrace the power of blockchain technology to revolutionize the way we vote. Say goodbye to doubts and uncertainties as every ballot cast is securely recorded, immutable, and tamper-proof.
                        Our innovative platform ensures that every voice counts, every decision matters, and every election is conducted with the highest standards of integrity. Join us in shaping the future of democracy with a simple, secure, and decentralized approach to voting.
                    </p>
                    <div className="flex flex-row gap-5" > 
<div  onClick={()=>deployContract()} className='landing-page-btn'>
 
    <span >Explorer</span>
    
    <FaLocationArrow/>
</div>
               
<Link href="/dashboard">
   
<div className='landing-page-btn'>
 
 <span >Dashboard</span>
 <PiScanLight/>
</div>
</Link>

                    </div>

                </div>
                <div className=''>
                    <Image width={600} height={600} priority className='dark:invert' alt="vote-image" src={'/assets/images/desktop-app.png'} />
                </div>

            </div>
        </div>

    )
}