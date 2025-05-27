"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className="border-4 border-blue-500 rounded-xl p-6 mt-20">
     <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> 
            <span className ="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
            Hello, I am{" "} 
            </span>
            <br></br>
            <TypeAnimation
        sequence={[
            'LMNTRIX',1000,
            'a Game Developer',1000,
            'a Python Programmer',1000,
        ]}
        wrapper ="span"
        speed={50}
        repeat={Infinity}
        /> 
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6"> 
            I am a student of West Visayas State University currently in my 3rd year taking Bachelor of Science in Computer Science.
        </p>
        <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-4 bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800 hover:bg-slate-200 text-white">
                Hire Now
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-800 hover:bg-slate-800 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">About Me</span>
            </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
       <div className="rounded-full bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-400 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/Soncio_3A.png"
            alt="Hero Image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={500}
            height={500}/>
        </div>
      </div> 
     </div>
    </section>
  );
};

export default HeroSection;
