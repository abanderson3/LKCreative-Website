"use client"
import Image from "next/image"
import { FC } from "react"
import ServiceBreakdown from "./ServiceBreakdown"

interface ServiceGroupsProps {

}

const ServiceGroups: FC<ServiceGroupsProps> = ({}) => {

  const servicesData = {
    socialMediaServices: [
      {service: "test1", description: "test1"},
      {service: "test2", description: "test2"},
      {service: "test3", description: "test3"},
      {service: "test4", description: "test4"},
      {service: "test5", description: "test5"}
    ],
    webDevServices: [
      {service: "test1", description: "test1"},
      {service: "test2", description: "test2"},
      {service: "test3", description: "test3"},
      {service: "test4", description: "test4"},
    ],
    businessServices: [
      {service: "test1", description: "test1"},
      {service: "test2", description: "test2"},
      {service: "test3", description: "test3"},
    ]
  }


  return (
    <>
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row border border-black">
        <div className="">
          <Image
            className="w-auto h-auto"
            src="/social_services.jpg"
            alt="Close up image of phone on Social Media Application"
            width="400"
            height="400"
          />
        </div>
        <div className="flex flex-col justify-between">
          {servicesData.socialMediaServices.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceBreakdown
                serviceList={service}
                orientation="normal"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div>
          <Image
            className="w-auto h-auto"
            src="/web_dev_services.jpg"
            alt="Close up image of apple computer displaying javascript code"
            width="400"
            height="400"
          />
        </div>
        <div className="flex flex-col justify-between">
          {servicesData.webDevServices.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceBreakdown
                serviceList={service}
                orientation="normal"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div>
          <Image
            className="w-auto h-auto"
            src="/business_services.jpg"
            alt="Close up image of whiteboard with sticky notes"
            width="400"
            height="400"
          />
        </div>

        <div className="flex flex-col justify-between">
          {servicesData.businessServices.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceBreakdown
                serviceList={service}
                orientation="normal"
              />
            </div>
          ))}
        </div>
      </div>


    </div>
    </>
  )
}

export default ServiceGroups