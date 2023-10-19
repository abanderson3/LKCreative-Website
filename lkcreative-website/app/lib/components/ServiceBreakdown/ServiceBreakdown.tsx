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
      className="border border-black rounded-lg p-2 m-1 "
    >
      <motion.header
        initial={false}
        animate={{ backgroundColor: expanded ? "" : "" }}
        onClick={onClick}
        className="cursor-pointer text-xl flex justify-between items-center"
      >
        {serviceList.service}
        <div className="text-3xl">
          {expanded ? "-" : "+"}
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariant}
            transition={{duration: 1.0, ease:"linear"}}
            className="m-4"
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