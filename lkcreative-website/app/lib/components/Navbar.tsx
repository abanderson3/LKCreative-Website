"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [ expanded, setExpanded ] = useState(false)

  const expandNavClick = () => {
    setExpanded(!expanded)
}



  // <Image src="/navBurger.svg" alt="navigation" width="64" height="64"/>

  const currentRoute = usePathname();
  // const selected = "text-customPlum"
  // const notSelected = "text-white border-b-2"

  const selectedLink = "text-customPlum "
  const notSelectedLink = "text-white border-b-2"

  const expandedBurgerStyle = "w-3/4 mx-auto md:w-auto h-full md:flex flex flex-col"
  const collapsedBurgerStyle = "hidden w-full md:w-auto md:flex "

  useEffect(() => {
    setExpanded(false)
  },[currentRoute])

  return (
    <>
      <nav className="flex md:flex-row-reverse bg-customMint p-6 shadow-xl h-16">
        <motion.div
          className="absolute left-0 -top-1"
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
        <div className="absolute right-5">
          <button
            className="md:hidden"
            type="button"
            onClick={expandNavClick}
          >
            <Image
              src="/navBurger.svg"
              alt="navigation"
              width="25"
              height="25"
            />
          </button>
        </div>

        <div className={expanded === false ? collapsedBurgerStyle : expandedBurgerStyle}>
          <ol className="font-medium text-lg text-center flex flex-col p-4 md:p-0 mt-12 border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 z-10 bg-customMint">
            <li><Link className={ currentRoute === "/" ? notSelectedLink : selectedLink } href="/">Home</Link></li>
            <li><Link className={ currentRoute === "/services" ? notSelectedLink : selectedLink } href="/services" >Services</Link></li>
            {/* <li><Link className={ currentRoute === "/portfolio" ? notSelectedLink : selectedLink } href="/portfolio">Portfolio</Link></li> */}
            <li><Link className={ currentRoute === "/about" ? notSelectedLink : selectedLink } href="/about">About</Link></li>
            <li><Link className={ currentRoute === "/contact" ? notSelectedLink : selectedLink } href="/contact">Contact</Link></li>
          </ol>
        </div>

      </nav>
    </>
  )
}

export default Navbar;


