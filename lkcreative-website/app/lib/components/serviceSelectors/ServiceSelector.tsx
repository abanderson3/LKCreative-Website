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

const ServiceSelector: FC<ServiceSelectorProps> = ({services, surveyData, setSurveyData}) => {

  return (
      <motion.div
        variants={{collapsed: {scale: 0.8}, open: {scale: 1}}}
        transition={{duration: 0.8}}
        className="m-1 max-w-lg mx-auto border-t rounded-lg border-black"
      >
        <ul className="">
          {services.map((service, i) => (
            <li
              className="border border-black m-1 mx-auto p-1 rounded-lg w-9/12"
              key={i}
            >
              {service}
            </li>
          ))}
        </ul>
      </motion.div>
  )
}

export default ServiceSelector