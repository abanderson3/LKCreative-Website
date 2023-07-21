"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex space-x-2 mt-3">
      <ol>
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