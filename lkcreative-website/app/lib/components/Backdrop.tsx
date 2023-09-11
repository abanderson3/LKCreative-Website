"use client"
import { motion } from "framer-motion"
import { FC } from "react"

interface BackdropProps{
  children: any,
  onClick: any,
}

const Backdrop: FC<BackdropProps>= ({ children, onClick }) => {

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex justify-center bg-opacity-80 bg-black"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )

}

export default Backdrop