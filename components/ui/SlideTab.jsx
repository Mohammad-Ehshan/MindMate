'use client'

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SignIn, useAuth, UserButton } from "@clerk/nextjs";
// Import the logo using a relative path
// import Logo from 'C:/Users/asnoi/Downloads/hinat/my-project/src/components/logoai.jpg'; 

export const SlideTabsExample = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <SlideTabs />
    </div>
  );
};



const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const { isSignedIn } = useAuth();

  return (
    <div>
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex justify-between   opacity-9 p-0.5"
      >
        {/* Logo Component */}
        <li className="flex items-center">
          <img src="./Design.png" alt="Logo" width={70} height={70}
          // className="h-8 md:h-20 " 
          /> {/* Adjust the height as needed */}
        </li>

        {/* Tabs on the Left */}
        <div className="flex space-x-4 font-mono">
          <Tab setPosition={setPosition}>home</Tab>
          <Tab setPosition={setPosition}>pricing</Tab>
          <Tab setPosition={setPosition}>Features</Tab>
          <Tab setPosition={setPosition}>How it Works</Tab>
          <Tab setPosition={setPosition}>About Us</Tab>
        </div>

        {/* Log In Tab */}
        {!isSignedIn ? (
          <>
          <Link href={"/signin"}><Tab setPosition={setPosition} className="ml-auto text-blue ">Log In</Tab></Link>
          </>
        )
        :
        <UserButton/>
      }
      <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-zinc-300 mix-blend-difference md:px-3 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gradient-to-l from-red-800 to-blue-800 md:h-12"
    />
  );
};

export default SlideTabs;