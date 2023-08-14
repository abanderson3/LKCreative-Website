"use client"
import React from "react";
import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard";


interface ServicesCardsProps {

}

const ServicesCards: React.FC<ServicesCardsProps> = ({}) => {


  return (
    <motion.div
      layout
      className="flex flex-nowrap snap-x snap-mandatory no-scrollbar overflow-x-auto h-80 mt-10 lg:h-128 lg:mt-36 md:h-96 md:mt-24 lg:justify-between"
    >
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
    </motion.div>

  )
}

export default ServicesCards;