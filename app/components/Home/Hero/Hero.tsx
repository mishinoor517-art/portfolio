"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
          <Image src="/images/profile.jpg" alt="Profile" width={160} height={160} className="w-40 h-40 sm:w-44 sm:h-44 rounded-full mb-4 border-4 border-white shadow-lg" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-6 text-center font-bold tracking-wide leading-tight">
            Creating Web Products,<br />
            Brands<span className="text-cyan-200"> and experiences</span>
          </h1>
          <h2 className="mt-5 text-base sm:text-lg md:text-xl px-2 text-center font-medium flex flex-wrap items-center justify-center gap-2">
            HI! I AM MARYAM - A Passionate&nbsp;
            <span className="text-cyan-200 font-bold inline-block">
              <Typewriter options={{ strings: ['Frontend Developer', 'Backend Developer', 'web Developer'], autoStart: true, loop: true, delay: 75, deleteSpeed: 50, wrapperClassName: "p1-2" }} />
            </span>
          </h2>
          <button className="mt-8 px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-cyan-300 text-black font-bold rounded-lg shadow-lg hover:shadow-2xl hover:from-cyan-300 hover:to-cyan-200 transform hover:scale-105 transition-all duration-300 ease-in-out tracking-wide">
            ↓ See My Work ↓
          </button>
        </div>
    </div>
  )
}

export default Hero