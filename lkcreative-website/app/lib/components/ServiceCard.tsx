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
      <div className="border border-black h-1/3 flex justify-center font-josefine text-center text-xl items-center">
        {title}
      </div>
      <div className="border border-black h-2/3 flex font-josefine items-center justify-center text-center ">
        {description}
      </div>
    </motion.div>
  )
}

export default ServiceCard;