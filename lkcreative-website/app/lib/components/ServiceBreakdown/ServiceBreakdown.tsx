"use client"
import { useState, FC } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceBreakdownProps {
  serviceList: {
    service: string,
    description: string,
  },
  orientation: string,
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

const ServiceBreakdown: FC<ServiceBreakdownProps> = ({serviceList, orientation}) => {

  const [ expanded, setExpanded ] = useState(false)

  const onClick = () => {
    setExpanded(!expanded)
  }

  // not sure if possible but maybe can flip orientation of display using string keyword?

  return (
    <>
    <motion.div
      className="border border-black"
    >
      <motion.header
        initial={false}
        animate={{ backgroundColor: expanded ? "" : "" }}
        onClick={onClick}
        className="cursor-pointer"
      >
        {serviceList.service}
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariant}
            transition={{duration: 1.0, ease: [0.04, 0.62, 0.23, 0.98]}}
            className=""
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