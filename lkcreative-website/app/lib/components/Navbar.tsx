"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const currentRoute = usePathname();
  const selected = 'text-customPlum'
  const notSelected = 'text-customEgg'

  return (
    <nav className="flex bg-customMint justify-end p-4 shadow-xl">
      <ol className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li><Link className={ currentRoute === '/' ? notSelected : selected } href="/">Home</Link></li>
        <li><Link className={ currentRoute === '/services' ? notSelected : selected } href="/services">Services</Link></li>
        <li><Link className={ currentRoute === '/portfolio' ? notSelected : selected } href="/portfolio">Portfolio</Link></li>
        <li><Link className={ currentRoute === '/about' ? notSelected : selected } href="/about">About</Link></li>
        <li><Link className={ currentRoute === '/contact' ? notSelected : selected } href="/contact">Contact</Link></li>
      </ol>
    </nav>
  )
}

export default Navbar;