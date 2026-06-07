import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "Modern Finance Dashboard UI",
    category: "App, UI/UX",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-Commerce Website Design",
    category: "Web, UI/UX",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile Banking App UI",
    category: "App, UI/UX",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Analytics Dashboard System",
    category: "Dashboard, Data Visualization",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
];



const Project = () => {
  return (
    <section id="works" className="scroll-mt-24 pt-16 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          A small selection of recent <br />
          <span className="text-cyan-300">Projects</span>
        </h1>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 justify-items-center">

          {projects.map((p, i) => (
            <article
              key={i}
              className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/3 to-white/5 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>

              <div className="px-6 py-5">
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {p.title}
                </h2>
                <p className="text-sm text-white/70">{p.category}</p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Project