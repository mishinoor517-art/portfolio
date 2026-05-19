import React from 'react'

type Props = {
  img: string
  date: string
  title: string
  tags: string[]
}

const BlogCard = ({ img, date, title, tags }: Props) => {
  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden text-white shadow-lg hover:scale-105 transition-all duration-500 group">

      {/* IMAGE */}
      <img
        src={img}
        alt="blog"
        className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
      />

      {/* CONTENT */}
      <div className="p-5">

        {/* DATE */}
        <p className="text-sm text-cyan-300 group-hover:text-pink-400 transition-all duration-300">
          {date}
        </p>

        {/* TITLE (ANIMATED COLOR) */}
        <h2 className="mt-2 text-lg font-semibold line-clamp-1 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text">
          {title}
        </h2>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/30 hover:bg-pink-500/20 hover:text-pink-300 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BlogCard
