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
        className="justify-center m-5 overflow-y-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          className="absolute left-4 top-3 font-josefine"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 1.0 }}
          onClick={handleClose}
        >
          X
        </motion.button>
        <Survey/>
      </motion.div>
    </Backdrop>
  )
}

export default Modal