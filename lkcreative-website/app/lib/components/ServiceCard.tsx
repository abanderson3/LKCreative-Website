"use client"
import { motion } from "framer-motion"
import React from "react"

// remake with embla carousel? https://www.embla-carousel.com/get-started/react/

interface ServiceCardProps {
  title: string,
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, description}) => {


  return (
    <motion.div
      layout
      whileHover={{scale: 1.05}}
      className="border flex-column border-black bg-customEgg rounded-2xl shadow-xl mx-auto snap-always snap-center flex-none h-auto w-48 lg:w-72 md:w-60"
      initial={{ opacity: 0, scale: 0, x:-300}}
      animate={{ opacity: 1, scale: 1, x:0 }}
    >
      <div className="h-1/3 flex shadow-lg justify-center font-josefine text-center text-xl items-center px-2 lg:text-3xl">
        {title}
      </div>
      <div className=" h-2/3 flex font-josefine items-center justify-center text-center text-xl font-light px-2">
        {description}
      </div>
    </motion.div>
  )
}

export default ServiceCard;