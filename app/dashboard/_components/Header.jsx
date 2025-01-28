"use client"

import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {

  const path =usePathname();
  

  return (
    <div className='flex items-center p-4 justify-between bg-blue-black'>
      <h1 className={`font-extrabold text-2xl text-blue-500`}>STUDYAI</h1>
      <ul className='hidden md:flex gap-10 font-medium'>
      <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-primary font-bold'}`}>DashBoard</li>
      <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'&&'text-primary font-bold'}`}>Questions</li>
      <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'&&'text-primary font-bold'}`}>Upgrade</li>
      <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/howitworks'&&'text-primary font-bold'}`}>How it Works</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header

