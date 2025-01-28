import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div className='bg-gradient-to-r from-[#16050f] via-[#2d0124] to-[#050505]  bg-cover bg-center'>
    {/* <div> */}
    {/* <Header/> */}
    {/* <div className='mx-5 md:mx-20 lg:mx-36 bg-gradient-to-r from-[#16050f] via-[#2d0124] to-[#050505]  bg-cover bg-center'> */}
    <div>
    {children}
    </div>
  </div>
  )
}

export default DashboardLayout
