"use client"
import React from "react";
import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard";

// remake with embla carousel? https://www.embla-carousel.com/get-started/react/


interface ServicesCardsProps {

}

const ServicesCards: React.FC<ServicesCardsProps> = ({}) => {


  return (
    <motion.div
      layout
      className="flex flex-nowrap gap-8 px-5 snap-x snap-proximity no-scrollbar overflow-x-auto pb-9 h-80 mt-10 lg:h-128 lg:snap-none lg:mt-36 md:h-96 md:mt-24 md:mx-20 md:snap-none sm:mx-12"
    >
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
    </motion.div>


  )
}

export default ServicesCards;