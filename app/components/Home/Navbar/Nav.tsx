"use client"

import React, { useState } from 'react'
import Link from 'next/link'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg sm:text-xl font-bold">
              Maryam&apos;s Portfolio
            </Link>
          </div>

          {/* Center: Maryam's name and Navigation Menu */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link href="/resume" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Resume
              </Link>
              <Link href="/works" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Works
              </Link>
              <Link href="/skill" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Skill
              </Link>
              <Link href="/testimonial" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Testimonial
              </Link>
              <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Right: Download Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
            <div className="text-center py-2">
              <div className="text-lg font-semibold">Maryam</div>
            </div>
            <Link href="/" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/services" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/resume" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Resume
            </Link>
            <Link href="/works" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Works
            </Link>
            <Link href="/skill" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Skill
            </Link>
            <Link href="/testimonial" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Testimonial
            </Link>
            <Link href="/contact" className="block hover:bg-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <div className="pt-2">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-3 py-2 rounded-lg text-base font-medium flex items-center justify-center space-x-2 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav