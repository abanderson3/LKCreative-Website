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
      className="border flex-col border-black lg:h-128 lg:mt-36 md:h-96 md:mt-24"
    >
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
    </motion.div>

  )
}

export default ServicesCards;