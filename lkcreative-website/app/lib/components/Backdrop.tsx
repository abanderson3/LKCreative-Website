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
      className="absolute w-full h-full flex items-center justify-center bg-opacity-80 bg-black"
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