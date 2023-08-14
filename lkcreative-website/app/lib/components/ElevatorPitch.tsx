"use client"
import { motion } from "framer-motion"

export default function ElevatorPitch() {

  return (
    <main className="flex justify-center">
      <motion.div
        className="max-w-lg flex text-center justify-center font-josefine font-light lg:text-2xl lg:max-w-3xl"
        animate={{}}
        whileHover={{ scale: 1.2 }}
      >
        LKCA is a forward-thinking media agency that specializes in providing exceptional social media services for small businesses. Our innovative strategies and creative campaigns help our clients connect with their target audience, drive meaningful engagement, and tell their story in the digital landscape.
      </motion.div>
    </main>
  )
}