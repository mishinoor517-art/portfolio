"use client"

import React from 'react'
import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'

// FIX: disable SSR for carousel (IMPORTANT for Next.js)
const Carousel = dynamic(() => import('react-multi-carousel'), {
  ssr: false,
})

const ClientReview = () => {

  const reviews = [
    {
      name: 'Ali Khan',
      review:
        'The work was absolutely amazing and very professional. Everything was delivered on time with perfect quality.',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Sara Ahmed',
      review:
        'Very smooth experience. The design was modern, clean and exactly what I needed for my project.',
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'John Doe',
      review:
        'Highly recommended developer. Great communication, fast delivery and very creative thinking.',
      image: 'https://i.pravatar.cc/150?img=3',
    },
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  }

  return (
    <div className="pt-16 pb-16 bg-black">

      {/* HEADING */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
        Kind words from satisfied <br />
        <span className="text-cyan-300">Clients</span>
      </h1>

      <div className="w-[80%] mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          showDots={true}
          arrows={false}
        >
          {reviews.map((item, i) => (
            <div
              key={i}
              className="mx-3 p-8 bg-white/10 rounded-2xl text-center text-white border border-white/10 shadow-lg hover:scale-105 transition-all duration-500 group"
            >

              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400 shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
                />
              </div>

              {/* NAME */}
              <h3 className="mt-4 text-cyan-300 text-lg font-semibold transition-all duration-500 group-hover:text-white group-hover:tracking-widest">
                {item.name}
              </h3>

              {/* REVIEW */}
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                {item.review}
              </p>

            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ClientReview