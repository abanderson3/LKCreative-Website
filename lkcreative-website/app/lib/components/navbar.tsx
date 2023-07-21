"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex space-x-2 mt-3">
      <ol className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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