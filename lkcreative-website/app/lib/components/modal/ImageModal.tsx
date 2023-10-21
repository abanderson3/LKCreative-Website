"use client"
import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import { ComponentElement, FC } from "react"
import Survey from "../survey/Survey"

interface ModalProps {
  modalOpen: boolean,
  handleClose: () => void,
  children: ComponentElement<any, any>
  // text: any
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
  }
}

const ImageModal: FC<ModalProps> = ({ handleClose, children }) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="mx-6 overflow-y-auto items-center max-w-6xl sm:my-8 md:my-14 lg:my-16 xl:my-32 h-fit my-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          className="absolute left-4 top-3 font-josefine"
          whileHover={{ scale: 1.3}}
          whileTap={{ scale: 1.0 }}
          onClick={handleClose}
        >
          X
        </motion.button>
        {children}
      </motion.div>
    </Backdrop>
  )
}

export default ImageModal