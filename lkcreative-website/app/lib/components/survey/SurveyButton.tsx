"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import Modal from "../modal/Modal";

const SurveyButton = () => {
  const [ modalOpen, setModalOpen ] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => ( modalOpen ? close() : open() )}
        className="border border-black font-josefine text-3xl text-center font-light italic p-4 my-4 rounded-2xl bg-white"
      >
        Get a Quote!
      </motion.button>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  )
}

export default SurveyButton