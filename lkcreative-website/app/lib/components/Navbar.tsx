"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const currentRoute = usePathname();

  return (
    <nav className="flex bg-customMint justify-end p-4 md:shadow-xl">
      <ol className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li><Link className={ currentRoute === '/' ? 'text-customEgg' : 'text-customPlum'} href="/">Home</Link></li>
        <li><Link className={ currentRoute === '/services' ? 'text-customEgg' : 'text-customPlum'} href="/services">Services</Link></li>
        <li><Link className={ currentRoute === '/portfolio' ? 'text-customEgg' : 'text-customPlum'} href="/portfolio">Portfolio</Link></li>
        <li><Link className={ currentRoute === '/about' ? 'text-customEgg' : 'text-customPlum'} href="/about">About</Link></li>
        <li><Link className={ currentRoute === '/contact' ? 'text-customEgg' : 'text-customPlum'} href="/contact">Contact</Link></li>
      </ol>
    </nav>
  )
}

export default Navbar;