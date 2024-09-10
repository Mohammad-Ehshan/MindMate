import React from 'react'

const Pricing = () => {
  return (
    <div className='text-center'>
     <h1 className='text-6xl font-bold bg-gradient-to-r from-gray-300 via-gray-600 to-zinc-500 bg-clip-text text-transparent mb-16 '>Power Up Your Creativity with <br /> WALL-E Plans</h1>
     <div className='flex justify-center mt-20 space-x-20'>
      <div className='bg-gray-700 text-white shadow-lg shadow-gray-700 p-8 rounded-xl w-64 hover:scale-105 transition-transform duration-300'>
        <h2 className='text-3xl font-bold mb-4'>Basics</h2>
        <p className='text-5xl font-bold'>$0</p>
        <ul className='mt-6 space-y-3'>
          <li className='flex items-center'>
            <span className='text-purple-100 bg-purple-950 rounded-lg mr-2'>✓</span>
            AI-Generated Images
            </li>
          <li className="flex items-center">
          <span className='text-purple-300 bg-purple-950 rounded-lg mr-2'>✓</span>
          Limited To 5 images per day
          </li>
          <li className="flex items-center"><span className='text-purple-200 bg-purple-950 rounded-lg mr-2'>✓</span>
          Explore Features at no cost
          </li>
        </ul>
        <button className='mt-6 bg-white text-black font-semibold text-xs py-1 px-3 rounded-full hover:bg-gray-700 transition-colors'>Get It Now</button>
      </div>
      {/* Pro Plan with Ring Light Effect */}
      <div className="relative bg-gray-900 text-white p-8 rounded-xl w-72 hover:scale-110 transition-transform duration-300  shadow-lg shadow-red-700 ">
          <h2 className="text-3xl font-bold mb-4">Pro</h2>
          <p className="text-5xl font-bold">$9.99</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
            <span className='text-purple-100 bg-purple-900 rounded-lg mr-2'>✓</span>
              All Basic plan features
              </li>
            <li className="flex items-center">
            <span className='text-purple-100 bg-purple-900 rounded-lg mr-2'>✓</span>
            Advanced AI chatbot for complex queries
            </li>
            <li className="flex items-center"> <span className='text-purple-100 bg-purple-900 rounded-lg mr-2'>✓</span>
            Unlimited AI-generated images (no ads)
            </li>
          </ul>
          <button className="mt-6 bg-white font-serif shadow  shadow-purple-200 text-black  py-1 px-3 text-xs rounded-full hover:bg-teal-400 transition-colors ">Get It Now</button>
        </div>

        {/* Pro Plus Plan with Gradient Background */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl w-64 hover:scale-110 transition-transform duration-300 shadow-xl shadow-fuchsia-900">
          <h2 className="text-3xl font-bold mb-4">Pro Plus</h2>
          <p className="text-5xl font-bold">$12.99</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center"><span className='text-purple-900 bg-slate-100 rounded-lg mr-2'>✓</span>
            All Pro plan features
            </li>
            <li className="flex items-center"><span className='text-purple-900 bg-slate-100 rounded-lg mr-2'>✓</span>
            Priority support with dedicated contact
            </li>
            <li className="flex items-center"><span className='text-purple-900 bg-slate-100 rounded-lg mr-2'>✓</span>
            Enterprise system integration
            </li>
          </ul>
          <button className="mt-6 bg-white text-black text-xs py-1 px-3 rounded-full hover:bg-black  transition-colors font-bold hover:text-white">GET IT NOW</button>
        </div>
     </div>
    </div>
  )
}

export default Pricing