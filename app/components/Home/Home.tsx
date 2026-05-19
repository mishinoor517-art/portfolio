import React from 'react'
import Nav from './Navbar/Nav'
import ParticleBackground from './ParticleBackground'
import Horo from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Project from './Projects/Project'
import { GiSkills } from 'react-icons/gi'
import Skill from './Skill/Skill'
import ClintReview from './ClintReview/ClintReview'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
function Home() {
  return (
    <div className='relative min-h-screen overflow-hidden bg-[#070812]'>
      <ParticleBackground />
      <Nav />
      <Horo/>
      <Services/>
      <Resume/>
      <Project/>
      <Skill/>
      <ClintReview/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home