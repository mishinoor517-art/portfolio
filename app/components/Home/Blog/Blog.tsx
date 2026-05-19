import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className="pt-16 p-16 bg-[#0f172a]">

      {/* ANIMATED HEADING */}
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-12">
        <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          My Latest Blogs
        </span>
      </h1>

      {/* GRID */}
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        <BlogCard
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
          date="18 May 2026"
          title="How to build modern React apps"
          tags={['React', 'Tailwind', 'Node']}
        />

        <BlogCard
          img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
          date="10 May 2026"
          title="Mastering Tailwind CSS in 7 days"
          tags={['Tailwind', 'CSS', 'Design']}
        />

        <BlogCard
          img="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800"
          date="01 May 2026"
          title="Node.js backend tips for beginners"
          tags={['Node', 'API', 'Backend']}
        />

      </div>
    </div>
  )
}

export default Blog