import React from 'react'
import Nav from './Navbar/Nav'
import ParticleBackground from './ParticleBackground'
import Horo from './Hero/Hero'
function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#070812]'>
      <ParticleBackground />
      <Nav />
      <Horo/>
    </div>
  )
}

export default Home