import React from 'react'
import Link from 'next/link'

function MobileNav() {
  return (
    <nav className="md:hidden flex flex-col space-y-2 p-4">
      <Link href="/" className="text-white hover:text-gray-300">Home</Link>
      <Link href="/about" className="text-white hover:text-gray-300">About</Link>
      <Link href="/projects" className="text-white hover:text-gray-300">Projects</Link>
      <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
    </nav>
  )
}

export default MobileNav