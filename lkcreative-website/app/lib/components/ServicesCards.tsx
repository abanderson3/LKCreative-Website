"use client"
import React from "react";
import { motion } from "framer-motion"
import ServiceCard from "./ServiceCard";

// remake with embla carousel? https://www.embla-carousel.com/get-started/react/


interface ServicesCardsProps {

}

const ServicesCards: React.FC<ServicesCardsProps> = ({}) => {


  return (
    <div className=" w-full bg-slate-200">
      <motion.div
        className=" flex justify-center text-4xl font-light italic font-josefine py-3 mt-8 shadow-lg"
      >
        Services
      </motion.div>
      <motion.div
        layout
        className="flex flex-nowrap gap-8 px-5 snap-x snap-proximity no-scrollbar overflow-x-auto py-4 mt-3 h-80 lg:mt-10 lg:pt-5 lg:pb-16 lg:mx-52 lg:h-128 lg:snap-none md:h-96 md:mt-4 md:mx-20 md:snap-none sm:mx-12"
        initial={{ opacity: 0, scale: 0, x:-300}}
        animate={{ opacity: 1, scale: 1, x:0}}
        transition={{ duration:2 }}

      >
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </motion.div>
    </div>



  )
}

export default ServicesCards;