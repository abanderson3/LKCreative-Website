"use client"
import { FC, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


interface ServiceSelectorProps {
  services: Array<string>,
  surveyData: {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    whoAreYou: string,
    currentSocials: Array<string>,
    toWorkOnSocials: Array<string>,
    budget: string,
    services: Object,
    targetAudience: Object,
    rawContent: string,
    preferredContent: string,
    contentAssistance: string,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
  // handleSelect: () => void
}

  const listVariant = {
    hidden: { scale: 0.8},
    show: {
        scale: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
    exit: {
      scale: 0,
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
      },
  },
  }

  const listItemVariant = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
    exit: { scale: 0, top: 100}
  }

const ServiceSelector: FC<ServiceSelectorProps> = ({services, surveyData, setSurveyData}) => {

  return (
    <motion.ul
      variants={listVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className="m-1 max-w-lg mx-auto border-t rounded-lg border-black py-2"
    >
    {services.map((service, i) => (
      <motion.li
        className="border border-black m-2 mx-auto p-1 rounded-lg w-9/12"
        key={i}
        variants={listItemVariant}
      >
        {service}
      </motion.li>
    ))}
  </motion.ul>
  )
}

export default ServiceSelector