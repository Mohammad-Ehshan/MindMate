import React from "react";

const Overview = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-r from-gray-900 via-zinc-900 to-black text-white p-8'>
      <div className="flex justify-between items-center mb-6">
      <h1 className='text-4xl font-caveat text-zinc-500 '>
          <span className='wave'>❁</span>
           Hey-Hinata 
          </h1>
          
        <button className="  bg-gradient-to-l from-slate-700 to-zinc-800 text-zinc-300 font-semibold py-2 px-5 rounded-lg hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-pink-600 hover:text-white transition-all duration-300 ease-in-out">
          Create interview
        </button>
        
      </div>

      <div className="text-xl  flex justify-center mb-4 text-zinc-500">Overview - ◑﹏◐</div>

         <hr />

      <div className="grid grid-cols-4 mt-2 ml-32 gap-14">

        {/* Total Interviews */}

        <div>
          <p className="mt-5 mb-4 font-semibold">Total interviews</p>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r via-gray-200 to-zinc-100">37</h2>
          <div className=""> <span className="text-lime-500 rounded-sm ">100% </span> from last week</div>
        </div>

        {/* Total Time Spent */}
        <div>
          <p className="mt-5 mb-4 font-semibold">Total time spent</p>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r via-pink-800 to-rose-900">7 hrs.</h2>
          <div className=""> <span className="text-lime-500 bg-transparent">100% </span> from last week</div>
        </div>

        {/* Completed Interviews */}
        <div>
          <p className="mt-5 mb-4 font-semibold">Completed interviews</p>
          <h2 className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-red-800  to-blue-500">27</h2>
          <div className=""><span className="text-lime-500 bg-transparent">100% </span>of total interviews</div>
        </div>

        {/* Available Interviews */}

        <div>
          <p className="mt-5 mb-4 font-semibold">Available interviews</p>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r via-pink-800 to-rose-900">2</h2>
          <div className="text-lime-400">Free credit</div>
        </div>
      </div>

      <hr className="mt-5" />

      <div className="flex justify-center items-center mt-6 h-[-400px] gap-5 mb-0">

        {/* Technical Interviews */}

        <div className="bg-gray-800 p-4 rounded-lg relative w-[600px] h-[400px]">
          
          <div className="relative h-[250px] w-[250px] mx-auto mt-7">

            {/* Placeholder for Radar Chart */}

            <div className="absolute inset-3 rounded-full bg-gray-950 opacity-80">
            
            </div>

            <div className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 text-sm">Robin </div>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 text-sm">komi </div>
            <div className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Fubuki </div>
            <div className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Friren </div>
            <div className="absolute top-[-1rem] left-0  text-sm">Valentine </div>
            <div className="absolute top-[-1rem] right-0  text-sm">Yor</div>
            <div className="absolute bottom-[-1rem] left-0  text-sm">Sakura</div>
            <div className="absolute bottom-[-1rem] right-0  text-sm"> Rio</div>
          </div>
          <div className="text-center mt-16 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Technical Interviews</div>
        </div>

        {/* Behavioral Interviews */}

        <div className="bg-gray-800 p-4 rounded-lg relative w-[600px] h-[400px]">
  
          <div className="relative h-[250px] w-[250px] mx-auto mt-7">
            {/* Placeholder for Radar Chart */}
            <div className="absolute inset-3 rounded-full bg-zinc-500 opacity-80">
              
            </div>

            <div className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 text-sm">Robin </div>
            <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 text-sm">komi </div>
            <div className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Fubuki </div>
            <div className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 text-sm">Friren </div>
            <div className="absolute top-[-1rem] left-0  text-sm">Valentine </div>
            <div className="absolute top-[-1rem] right-0  text-sm">Yor</div>
            <div className="absolute bottom-[-1rem] left-0  text-sm">Sakura</div>
            <div className="absolute bottom-[-1rem] right-0  text-sm"> Rio</div>
            
          </div>
          <div className="text-center mt-16 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-amber-400 via-pink-500 to-rose-500">Behavioural Interviews</div>
        </div>
        
      </div>
    </div>
  );
};

export default Overview;