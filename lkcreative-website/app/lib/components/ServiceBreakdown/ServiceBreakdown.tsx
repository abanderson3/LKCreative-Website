"use client"
import { useState, FC } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceBreakdownProps {
  serviceList: {
    service: string,
    description: string,
  },
  // serviceImage: ComponentElement<any, any>,
}

const accordionVariant = {
  open: {
    opacity: 1,
    height: "auto"
  },
  collapsed: {
    opacity: 0,
    height: 0
  }
}

const ServiceBreakdown: FC<ServiceBreakdownProps> = ({serviceList}) => {

  const [ expanded, setExpanded ] = useState(false)

  const onClick = () => {
    setExpanded(!expanded)
  }

  // not sure if possible but maybe can flip orientation of display using string keyword?

  return (
    <>
    <motion.div
      className="border border-black rounded-lg p-1 m-1 "
    >
      <motion.header

        initial={false}
        animate={{ backgroundColor: expanded ? "" : "" }}
        onClick={onClick}
        className="cursor-pointer text-xl flex justify-between items-center"
      >
        {serviceList.service}
        <motion.div
          className="text-3xl"
        >
          {expanded ? "-" : "+"}
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            layout
            style={{margin: 5}}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariant}
            transition={{layout: {duration: 0.85}, ease:"linear"}}


          >
            {serviceList.description}
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
    </>
  )

}

export default ServiceBreakdown