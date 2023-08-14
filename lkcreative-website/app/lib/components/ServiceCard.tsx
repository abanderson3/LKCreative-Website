"use client"
import { motion } from "framer-motion"
import React from "react"

// remake with embla carousel? https://www.embla-carousel.com/get-started/react/

interface ServiceCardProps {

}

const ServiceCard: React.FC<ServiceCardProps> = ({}) => {


  return (
    <motion.div
      layout
      className="border border-black rounded-2xl shadow-xl mx-auto snap-always snap-center flex-none h-auto w-36 md:w-60 lg:w-80 "
      initial={{
        x:-500,
        y:-500
      }}
      animate={{
        x:0,
        y:0
      }}
    >

    </motion.div>
  )
}

export default ServiceCard;