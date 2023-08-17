"use client"
import React, { useRef } from "react";
import { motion, stagger, useInView } from "framer-motion"
import ServiceCard from "./ServiceCard";

// remake with embla carousel? https://www.embla-carousel.com/get-started/react/


interface ServicesCardsProps {

}

const ServicesCards: React.FC<ServicesCardsProps> = ({}) => {
  const ref = useRef(null);
  // may want to go back and define a variable to set what is considered "in view"
  const isInView = useInView(ref, { once:true })

  const cardArray = [<ServiceCard key="0" title="Social Media Account Management" description="Our expert team will handle all aspects of account management, from content creation and scheduling to community management."/>, <ServiceCard key="1" title="Social Media Marketing & Growth" description="Let us develop a tailored campaign to boost your brand visibility, drive engagement, and generate leads."/>, <ServiceCard key="4" title="Web Development" description="From Wix and Squarespace development to Fullstack custom projects, our team can build you a stunning new website that you can be proud of."/>, <ServiceCard key="2" title="Business Design & Branding" description="From logo design to brand guidelines, we will craft a captivating brand identity that reflects your story and speaks to your audience."/>, <ServiceCard key="3" title="Virtual Assisting" description="Allow us to lighten your workload! Our reliable team can handle administrative tasks, content research, and more so you can focus on the important things."/>]

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: !isInView ? 0 : 1,
      y:!isInView ? 50 : 0,
      transition: !isInView ? {} : {
        type: "spring",
        damping: 14,
        stiffness: 100,
        staggerChildren: 0.35
      }
    }
  }

  return (
    <div className=" w-full bg-slate-200">
      <motion.div
        className="flex justify-center text-4xl italic font-josefine py-3 mt-8 shadow-lg"
      >
        Services
      </motion.div>

      <motion.div
        layout
        ref={ref}
        className="flex flex-nowrap gap-8 px-6 mx-3 snap-x snap-proximity overflow-hidden overflow-x-auto py-4 mt-3 h-80 lg:mt-10 lg:pt-5 lg:pb-16 lg:mx-36 lg:justify-between lg:h-100 lg:snap-none md:h-96 md:mt-4 md:mx-20 md:snap-none sm:mx-12"
        variants={cardAnimation}
        initial="hidden"
        animate="visible"
      >
        {cardArray.map((card, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            className=""
          >
            {card}
          </motion.div>
        ))}
      </motion.div>
    </div>



  )
}

export default ServicesCards;