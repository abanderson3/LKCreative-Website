"use client"
import { FC, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


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
      <div className="m-1 border border-black max-w-sm w-11/12 mx-auto md">
        <div
          className="mb-3"
        >
          Social Media Management
        </div>
        <ul className="">
          <li className="">
            Content Creation & Scheduling
          </li>

          <li className="">
            Audience Engagement
          </li>

          <li className="">
            Analytics & Reporting
          </li>

          <li className="">
            One Time Consultation
          </li>
        </ul>
      </div>

      <div className="m-1 p-1 border border-black max-w-sm w-11/12 mx-auto">
        <div className="mb-3">Web Design/Development</div>
        <ul className="">
          <li className="">
            Templated website &#40;Wix, Squarespace&#41;
          </li>

          <li className="">
            Custom website
          </li>

          <li className="">
            Website redesign
          </li>

          <li className="">
            Hosting
          </li>

          <li className="">
            Ecommerce
          </li>
        </ul>
      </div>

      <div className="m-1 p-1 border border-black max-w-sm w-11/12 mx-auto">
        <div
          className="mb-3"
        >
          Branding & Business Services
        </div>
        <ul className="">
          <li className="">
            Business Guidelines & Messaging
          </li>

          <li className="">
            Logo & Visual Identity Development
          </li>

          <li className="">
            Competitor Analysis & Market Research
          </li>

          <li className="">
            Virtual Assisting
          </li>
        </ul>
      </div>


    </div>
  )
}

export default ServiceSelectors