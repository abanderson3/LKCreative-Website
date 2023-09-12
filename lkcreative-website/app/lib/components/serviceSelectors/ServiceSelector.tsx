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
      <div className="m-1 max-w-lg mx-auto md">
        <ul className="">
          {services.map((service, i) => (
            <li className="" key={i}>{service}</li>
          ))}
        </ul>
      </div>
  )
}

export default ServiceSelector