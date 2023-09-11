"use client"
import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import { FC } from "react"

interface ModalProps {
  handleClose: any,
  text: any
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

const Modal: FC<ModalProps> = ({ handleClose, text }) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full m-10 flex flex-col justify-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text}
      </motion.div>
    </Backdrop>
  )
}

export default Modal