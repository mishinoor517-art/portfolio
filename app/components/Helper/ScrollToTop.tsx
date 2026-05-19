"use client"

import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // show button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6
            bg-cyan-500 hover:bg-cyan-600
            text-white p-3 rounded-full
            shadow-lg transition-all duration-300
            hover:scale-110
          "
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default ScrollToTop