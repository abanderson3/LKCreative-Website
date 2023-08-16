"use client"
import { useAnimation, motion, useInView } from "framer-motion"
import { useRef } from "react";


export default function ElevatorPitch() {
  const text = 'LKCA is a forward-thinking media agency that specializes in providing exceptional social media services for small businesses. Our innovative strategies and creative campaigns help our clients connect with their target audience, drive meaningful engagement, and tell their story in the digital landscape.';

  // const ctrls = useAnimation();

  // const ref = useRef(null)
  // const isInView = useInView(ref);
  return (
    <main className="flex justify-center">
      <motion.div
        className="max-w-xl flex text-center justify-center px-6 pb-20 text-xl leading-6 font-josefine font-light lg:text-2xl lg:max-w-3xl"
        animate={{}}
        whileHover={{}}
      >
        { text }
      </motion.div>
    </main>
  )
}