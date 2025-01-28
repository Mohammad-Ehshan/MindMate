

import Footer from "@/components/ui/Footer";
import Overview from "@/components/ui/Overview";
import Pricing from "@/components/ui/Pricing";
import SlideTabs from "@/components/ui/Slidetab";
import { useAuth } from "@clerk/nextjs";
import React from "react";

const Heading = () => {
  return (
    <div className=" text-center "> 

    {/* mt-10 gives a margin-top of 10  ==comment hai ye== */}

      <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-300 to-slate-700 bg-clip-text text-transparent">
        EFFORTLESSLY CREATE STUNNING 
        <br />
       <span className="underline underline-offset-7 decoration-zinc-600"> AI-GENERATED </span> <span>INTERVIEW</span>
      </h1>
      <p className="text-lg font-semibold text-gray-400 mt-4">
        Generate your image or video to create breathtaking AI-generated visuals in minutes
      </p>
      <div className="mt-6 flex justify-center  space-x-4">
        <button className="px-6 py-2 bg-gradient-to-l from-red-600 to-blue-500 text-black font-semibold rounded-s-full shadow-md hover:bg-gradient-to-r from-pink-800 to-purple-800 transition duration-300">◌ Generate Now</button>
        <button className="px-6 py-2 bg-gradient-to-l from-red-600 to-blue-500 text-gray-900 font-semibold rounded-r-full shadow-md hover:bg-gradient-to-r from-pink-800 to-purple-800 transition duration-300">► How to Generate</button>
        
      </div>

      <div className="w-full flex justify-center mt-4 mb-2 px-9">
        <img src="./backgimage.jpg" alt="AI Generated Content" className="rounded-lg w-full h-[52vh] max-w-screen-lg object-cover object-top  mt-1" />
      </div>

    </div>
  );
};

const HomePage = () => {

  return (
  <>
    <div className=" bg-gradient-to-r from-[#16050f] via-[#2d0124] to-[#050505]  bg-cover bg-center min-h-screen">
    
      <SlideTabs />
      <Heading />
      
      {/* Subtle gradient in bottom corners that blends into the background ==comment hai ye== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Bottom left corner gradient ==comment hai ye== */}

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-teal-500/10 to-transparent"></div>

        {/* Bottom right corner gradient ==comment hai ye== */}

        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-teal-500/10 to-transparent"></div>
      </div>
    </div>
    <div className="min-h-screen bg-[#010214] flex items-center justify-center overflow-hidden">
    <Pricing/>
    </div>
    <div>
      <Overview/>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;