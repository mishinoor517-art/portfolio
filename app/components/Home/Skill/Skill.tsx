"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript />, percentage: 89 },
  { name: 'React.js', icon: <SiReact />, percentage: 92 },
  { name: 'Next.js', icon: <SiNextdotjs />, percentage: 90 },
  { name: 'Node.js', icon: <SiNodedotjs />, percentage: 88 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, percentage: 94 },
  { name: 'TypeScript', icon: <SiTypescript />, percentage: 86 },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Skill = () => {
  return (
    <div id="skill" className="scroll-mt-24 pt-16 pb-16">

      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6 mt-12"
      >

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.08, rotate: 1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-blue-900/40 bg-[#081121] px-6 py-6 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:shadow-cyan-400/30"
          >

            {/* Animated Icon */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f1d35] text-4xl text-white"
            >
              {skill.icon}
            </motion.div>

            <h2 className="mt-3 text-base font-medium text-white">
              {skill.name}
            </h2>

            <p className="text-sm text-white/60">
              {skill.percentage}%
            </p>

          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Skill