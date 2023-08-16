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
        id="cardsContainer"
        layout
        className="flex flex-nowrap gap-8 px-5 snap-x snap-proximity no-scrollbar overflow-x-auto py-4 mt-3 h-80 lg:mt-10 lg:pt-5 lg:pb-16 lg:mx-30 lg:h-128 lg:snap-none md:h-96 md:mt-4 md:mx-20 md:snap-none sm:mx-12"


      >
        <ServiceCard title="Social Media Account Management" description="Our expert team will handle all aspects of account management, from content creation and scheduling to community management."/>
        <ServiceCard title="Social Media Marketing & Growth" description="Let us develop a tailored campaign to boost your brand visibility, drive engagement, and generate leads."/>
        <ServiceCard title="Business Design & Branding" description="From logo design to brand guidelines, we will craft a captivating brand identity that reflects your story and speaks to your audience."/>
        <ServiceCard title="Virtual Assisting" description="Allow us to lighten your workload! Our reliable team can handle administrative tasks, content research, and more so you can focus on the important things."/>
        <ServiceCard title="Website Design/Development" description="From Wix and Squarespace development to Fullstack custom projects, our team can build you a stunning new website that you can be proud of."/>
      </motion.div>
    </div>



  )
}

export default ServicesCards;