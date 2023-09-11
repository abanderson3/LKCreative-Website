"use client"
import { FC, useState } from "react"
import { motion } from "framer-motion"


interface ServiceSelectorsProps {
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
    rawContent: Object,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
  // handleSelect: () => void
}

const ServiceSelectors: FC<ServiceSelectorsProps> = ({surveyData, setSurveyData}) => {

  return (
    <div className="font-josefine font-light flex flex-col justify-center md:flex-row mx-auto">
      <ul className="m-1 p-1 border border-black max-w-lg w-11/12">
        <span className="">Social Media Management</span>
        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>
      </ul>

      <ul className="m-1 p-1 border border-black max-w-lg w-11/12">
        <span className="">Web Design/Development</span>
        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>
      </ul>

      <ul className="m-1 p-1 border border-black max-w-lg w-11/12">
        <span className="">Branding & Business Services</span>
        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>

        <li className="">

        </li>
      </ul>

    </div>
  )
}

export default ServiceSelectors