"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {


  // <Image src="/navBurger.svg" alt="navigation" width="64" height="64"/>

  const currentRoute = usePathname();
  const selected = 'text-customPlum'
  const notSelected = 'text-customEgg border-b-2'

  return (
    <>

      <nav className="flex bg-customMint justify-end p-6 shadow-xl">
        <motion.div
          className='absolute left-0 top-0'
          whileHover={{}}
        >
          <Link
            href="/"
          >
            <Image
                className=""
                src="./LKCA_logo.svg"
                alt="LKCA_logo"
                width="85"
                height="85"
            />
          </Link>
        </motion.div>
        <ol className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li><Link className={ currentRoute === '/' ? notSelected : selected } href="/">Home</Link></li>
          <li><Link className={ currentRoute === '/services' ? notSelected : selected } href="/services">Services</Link></li>
          {/* <li><Link className={ currentRoute === '/portfolio' ? notSelected : selected } href="/portfolio">Portfolio</Link></li> */}
          <li><Link className={ currentRoute === '/about' ? notSelected : selected } href="/about">About</Link></li>
          <li><Link className={ currentRoute === '/contact' ? notSelected : selected } href="/contact">Contact</Link></li>
        </ol>
      </nav>
    </>
  )
}

export default Navbar;