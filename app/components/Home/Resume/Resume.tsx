import React from 'react'
import { Briefcase, Code2, Database, Layers } from 'lucide-react'
import ResumeCard from './ResumeCard'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070812]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Experience Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.5fr] items-start">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              My Work <span className="text-cyan-300">Experience</span>
            </h1>
            <p className="max-w-2xl text-gray-300 leading-relaxed text-sm sm:text-base">
              A snapshot of my professional journey and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ResumeCard
              Icon={Briefcase}
              role="Design Institute of Technology"
            />
            <ResumeCard
              Icon={Layers}
              role="Frontend Developer"
            />
            <ResumeCard
              Icon={Database}
              role="Backend Developer"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr,1.5fr] items-start">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              My <span className="text-cyan-300">Education</span>
            </h1>
            <p className="max-w-2xl text-gray-300 leading-relaxed text-sm sm:text-base">
              My educational background and learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ResumeCard
              Icon={Code2}
              role="Design Institute of Technology"
              date="Jan 2023-Dec 2024"
            />
            <ResumeCard
              Icon={Layers}
              role="Bachelor in Computer Science"
              date="Jan 2019 - Dec 2022"
            />
            <ResumeCard
              Icon={Database}
              role="Certificate in Digital Marketing"
              date="Jan 2016 - Dec 2018"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume