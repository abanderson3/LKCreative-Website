"use client"
import { FC, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ServiceSelector from "../serviceSelectors/ServiceSelector"
import SelectorHeader from "../serviceSelectors/SelectorHeader"
import Accordion from "../accordion/Accordion"


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
    rawContent: string,
    preferredContent: string,
    contentAssistance: string,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
  // handleSelect: () => void
}

const ServiceSelectors: FC<ServiceSelectorsProps> = ({surveyData, setSurveyData}) => {
  const socialMediaServices = ["Content Creation & Scheduling","Audience Engagement","Analytics & Reporting","One Time Consultation"];
  const webDevServices = ["Templated Website (Wix, Squarespace)", "Custom Website", "Website Redesign", "Ecommerce"];
  const businessServices = ["Business Guidelines & Messaging", "Administrative & Clerical Work", "Visual Branding"]

  return (
    <div className="font-josefine font-light flex flex-col justify-center mx-auto md:flex-row">

      <Accordion
        header={<SelectorHeader header="Social Media Services"/>}
        body={
          <ServiceSelector
            surveyData={surveyData}
            setSurveyData={setSurveyData}
            services={socialMediaServices}
          />}
      />

      <Accordion
        header={<SelectorHeader header="Web Design/Development" />}
        body={
          <ServiceSelector
            surveyData={surveyData}
            setSurveyData={setSurveyData}
            services={webDevServices}
        />}
      />

      <Accordion
        header={<SelectorHeader header="Business Services" />}
        body={
          <ServiceSelector
            surveyData={surveyData}
            setSurveyData={setSurveyData}
            services={businessServices}
        />}
      />

    </div>
  )
}

export default ServiceSelectors