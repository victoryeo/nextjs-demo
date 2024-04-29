"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';


export function Header() {

  return (
    <div className="nav-container">    
      <div className="nav-logo">
        <Link href="/">
          <Image
            src="../imgs/circle-heat.svg"
            width={200}
            height={40}
            alt=""
          />
        </Link>
      </div>
        
      <div className="right-nav">
        <img
          className="metamask-icon"
          src="../imgs/Group.svg"
          alt=""
          title="Connect Metamask Wallet"
        />
        

      </div>
    </div>
  );
}
