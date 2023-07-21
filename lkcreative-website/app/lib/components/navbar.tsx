"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex space-x-2 mt-3">
      <ol className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ol>
    </nav>
  )
}

export default Navbar;