"use client"
import { motion } from "framer-motion"
import React from "react"

interface ServiceCardProps {

}

const ServiceCard: React.FC<ServiceCardProps> = ({}) => {


  return (
    <motion.div
      layout
      className="border snap-always snap-center border-black flex-none h-auto m-8 w-36 lg:w-80 md:w-60 "
      animate={{}}
    >

    </motion.div>
  )
}

export default ServiceCard;