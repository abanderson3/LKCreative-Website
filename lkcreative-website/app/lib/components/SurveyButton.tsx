"use client"
import { motion } from "framer-motion"

const SurveyButton = () => {

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.0 }}
        onClick={() => null}
        className="border border-black font-josefine text-3xl text-center font-light italic p-4 my-4 rounded-2xl"
      >
        Get a Quote!
      </motion.button>
    </div>
  )
}

export default SurveyButton