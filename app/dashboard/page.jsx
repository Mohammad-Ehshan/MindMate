'use client'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import Overview from '@/components/ui/Overview'

function Dashboard() {
  return (
    // <div className='p-8 bg-gradient-to-r from-[#16050f] via-[#2d0124] to-[#050505]  bg-cover bg-center max-h-full'>
    // {/* //  <div>  */}
    //   <h2 className='font-semibold text-5xl text-center mt-5 bg-gradient-to-r from-blue-300 to-gray-800 bg-clip-text text-transparent tracking-wider'>DashBoard</h2>
    //  <h2 className='text-gray-300 text-center mt-2'>Create and Start your Ai Interview</h2>
    //  <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
    //   <AddNewInterview/>
    //  </div>
    // <InterviewList/>
    //  {/* Previous Interview list */}
    // </div>
    <>
    <Overview/>
    <InterviewList/>
    <AddNewInterview/>
    </>
  )
}

export default Dashboard
