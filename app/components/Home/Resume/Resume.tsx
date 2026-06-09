import React from 'react'
import { Briefcase, Code2, Database, Layers } from 'lucide-react'
import ResumeCard from './ResumeCard'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <section id="resume" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 bg-[#070812]">
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
              role="Internship at Design Institute"
              date="2025 - Present"
              description="Gained hands-on experience with modern design principles and web development practices. Worked on real-world projects and collaborated with senior developers."
            />
            <ResumeCard
              Icon={Layers}
              role="Frontend Developer"
              date="2025 - Present"
              description="Developing responsive and interactive web applications using React.js, Next.js, Tailwind CSS, and modern frontend technologies for optimal user experience."
            />
            <ResumeCard
              Icon={Database}
              role="Backend Developer"
              date="2025 - Present"
              description="Building scalable REST APIs, managing databases, implementing authentication, and developing robust backend solutions using Node.js, Express.js, and MongoDB."
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
              description="Completed specialized training in UI/UX design. Learned wireframing, prototyping, user research, and design systems using industry-standard tools like Figma."
            />
            <ResumeCard
              Icon={Layers}
              role="Bachelor in Computer Science"
              date="Jan 2019 - Dec 2022"
              description="Strong foundation in computer science fundamentals, data structures, algorithms, web development, and software engineering principles."
            />
            <ResumeCard
              Icon={Database}
              role="Certificate in Digital Marketing"
              date="Jan 2024 - Dec 2024"
              description="Expertise in SEO, social media marketing, content strategy, analytics, and digital advertising to drive online business growth."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume