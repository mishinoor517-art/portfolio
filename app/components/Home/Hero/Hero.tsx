"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center">
        <div className="relative z-10 flex flex-col items-center">
          <Image src="/images/profile.jpg" alt="Profile" width={160} height={160} className="w-40 h-40 rounded-full mb-4 border-4 border-white shadow-lg" />
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">Creating Web Products,<br /> Brands<span className="text-cyan-200"> and experiences</span></h1>
          <h2 className="mt-5 text-sm px-2 text-center sm-text-2x1 font-medium flex item-center">
            HI! I AM MARYAM - A Passionate&nbsp;
            <span className="text-cyan-200 font bold">
              <Typewriter options={{ strings: ['Frontend Developer', 'Backend Developer', 'web Developer'], autoStart: true, loop: true, delay: 75, deleteSpeed: 50, wrapperClassName: "p1-2" }} />
            </span>
          </h2>
          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-400 to-cyan-300 text-black font-bold rounded-lg shadow-lg hover:shadow-2xl hover:from-cyan-300 hover:to-cyan-200 transform hover:scale-105 transition-all duration-300 ease-in-out tracking-wide">
            ↓ See My Work ↓
          </button>
        </div> 
    </div> 
  )
}

export default Hero
