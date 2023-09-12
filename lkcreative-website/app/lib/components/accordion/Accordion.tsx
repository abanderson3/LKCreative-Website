"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, FC, ReactComponentElement } from "react"

interface AccordionProps {
  header: ReactComponentElement<any>,
  body: ReactComponentElement<any>
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

const Accordion: FC<AccordionProps> = ({header, body}) => {
  // need to create state that tracks which are open and which are closed, in object? not necessary if each in own accordion
  const [ expanded, setExpanded ] = useState(false)

  const onClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="border border-black m-1 rounded-lg max-w-lg mx-auto w-11/12">
      <motion.header
        initial={false}
        animate={{ backgroundColor: expanded ? "" : "" }}
        onClick={onClick}
        className=""
      >
        {header}
      </motion.header>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={accordionVariant}
            transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
          >
            {body}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion