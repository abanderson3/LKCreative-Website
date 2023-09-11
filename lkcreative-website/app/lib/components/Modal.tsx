"use client"
import { motion } from "framer-motion"
import Backdrop from "./Backdrop"
import { FC } from "react"
import Survey from "./Survey"

interface ModalProps {
  modalOpen: boolean,
  handleClose: any,
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

const Modal: FC<ModalProps> = ({ handleClose }) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="justify-center m-4 overflow-y-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Survey/>
      </motion.div>
    </Backdrop>
  )
}

export default Modal