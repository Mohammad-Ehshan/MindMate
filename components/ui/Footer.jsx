import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-zinc-900 to-slate-900 text-white py-8 text-center'>
      {/* <div className='flex items-center relative left-24 top-36 transform -translate-y-1/2'>
        <img src="/Design.png" alt="logo" className='h-28 w-auto mix-blend-darken' />
      </div> */}
      <h1 className='text-3xl font-caveat mb-6 tracking-wider'>Ai Interview Rate</h1>
      <div className='mb-6'>
        <ul className='flex justify-center space-x-4 text-sm'>
        <li>コシャル・クローナ</li>
          <li>アーリア人</li>
          <li>アイテムの好意</li>
          <li>アニケシュ</li>
          <li>ए.के.ए.ई-と会社</li>
        </ul>
      </div>
      <div className='flex justify-center items-center space-x-6 mb-6'>
        {/* socialmediaicons */}
        <button className='hover:text-blue-700 '>
          {/* <i className='fab fa-facebook-f'></i> */}
          <Facebook/>
        </button>
        <button className='hover:text-gray-600'>
          {/* <i className='fab fa-twitter'></i> */}
          <Twitter/>
        </button>
        <button className='hover:text-pink-800'>
          {/* <i className='fab fa-instagram'></i>  */}
          <Instagram/>
        </button>
        <button className='hover:text-amber-400'>
          {/* <i className="fa-solid fa-envelope-open"></i> */}
          <Mail/>
        </button>
        <button className='hover:text-red-700'>
          {/* <i className='fab fa-youtube'></i> */}
          <Youtube/>
        </button>
        <button className=' border-2 border-white px-3 scroll-py-0.5 rounded-full text-base font-caveat hover:bg-teal-100 hover:text-black'>English</button>
      </div>
      <div className='text-base tracking-widest font-caveat'>
        <p>Copyright © Ai Interview Rates Inc.</p>
      </div>
    </footer>
  )
}

export default Footer