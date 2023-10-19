"use client"
import Image from "next/image"
import { FC } from "react"
import ServiceBreakdown from "./ServiceBreakdown"

interface ServiceGroupsProps {

}

const ServiceGroups: FC<ServiceGroupsProps> = ({}) => {

  const servicesData = {
    socialMediaServices: [
      {service: "Content Creation & Scheduling", description: "We design and curate engaging content tailored to your brand, ensuring that it resonates with your target audience. Our scheduling services ensure that your content is consistently posted at optimal times for maximum visibility."},
      {service: "Audience Engagement", description: "Our team actively engages with your online community, responding to comments, messages, and feedback promptly. We build and nurture meaningful connections to enhance brand loyalty and trust."},
      {service: "Analytics & Reporting", description: "We provide comprehensive analytics and reporting services, offering insights into key performance metrics. Our data-driven approach helps you make informed decisions to refine and improve your social media strategy."},
      {service: "One Time Consultation", description: "If you need a one-time boost or advice for your social media efforts, our consultation service is perfect. We'll assess your current strategy, offer expert guidance, and provide actionable recommendations to set you on the right path."},
    ],
    webDevServices: [
      {service: "Templated Website (Wix, Squarespace)", description: "Our templated website service is tailored to businesses seeking a cost-effective and efficient online solution. We build visually appealing websites on platforms like Wix and Squarespace, ensuring they are user-friendly and responsive."},
      {service: "Custom Website", description: "For businesses with unique needs, we offer custom application and website development. Our team handles both front-end and back-end development to create tailored web solutions that meet your specific requirements."},
      {service: "Ecommerce", description: "Our e-commerce solutions are designed to drive online sales. From product listings to secure payment gateways, we ensure a seamless shopping experience for your customers, helping you grow your online business.(This can be added to a custom or templated website.)"},
      {service: "Website Redesign", description: "Is your current website outdated or underperforming? Our website redesign service transforms your online presence, enhancing aesthetics, functionality, and user experience to keep your brand fresh and competitive."},

    ],
    businessServices: [
      {service: "Business Guidelines & Messaging", description: "We assist in creating clear brand identity and messaging guidelines. These guidelines ensure a consistent and impactful brand image across all your communication channels. This includes logo usage, tone of voice, and visual style guidelines."},
      {service: "Administrative Support and Clerical Work", description: " Our administrative support and clerical services offer comprehensive assistance for efficient business operations. From appointment scheduling and email management to meticulous data entry and paperwork organization, we help you streamline your administrative processes, reducing your workload and enhancing productivity."},
      {service: "Visual Identity Enhancement", description: "We collaborate with you to refine and strengthen your visual identity, ensuring a consistent and captivating brand image across all your communication channels. This service encompasses logo design, color palette development, typography selection, and visual style guidelines, all tailored to make your brand stand out and leave a lasting impression."},

    ]
  }


  return (
    <>
    <div className="flex flex-col p-10">
      <div className="text-3xl text-center md:text-left">
        Social Media Services
      </div>
      <div className="flex flex-col md:flex-row my-10">

        <div>
          <Image
            className="w-auto h-auto rounded-2xl m-auto"
            src="/social_services.jpg"
            alt="Close up image of phone on Social Media Application"
            width="550"
            height="550"
          />

        </div>
        <div className="flex flex-col md:w-full md:text-left justify-center text-center">
          {servicesData.socialMediaServices.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceBreakdown
                serviceList={service}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-3xl text-center md:text-right">
        Website Design/Development
      </div>
      <div className="flex flex-col md:flex-row-reverse my-10">

      <div>
          <Image
            className="w-auto h-auto rounded-2xl mx-auto"
            src="/web_dev_services.jpg"
            alt="Close up image of apple computer displaying javascript code"
            width="550"
            height="550"
          />
        </div>
        <div className="flex flex-col md:w-full justify-center text-center md:text-left">
          {servicesData.webDevServices.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceBreakdown
                serviceList={service}
              />
            </div>
          ))}
        </div>


      </div>

      <div className="text-3xl text-center md:text-left">
        Business Services
      </div>
      <div className="flex flex-col md:flex-row my-10">

        <div>
          <Image
            className="w-auto h-auto rounded-2xl mx-auto"
            src="/business_services.jpg"
            alt="Close up image of whiteboard with sticky notes"
            width="550"
            height="550"
          />

        </div>

        <div className="flex flex-col md:w-full justify-center text-center md:text-left">
          {servicesData.businessServices.map((service, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceBreakdown
                serviceList={service}
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