"use client"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FC, useState, useRef } from "react"
import imageData from "./imageData"
import Image from "next/image"
import ImageModal from "../modal/ImageModal"

interface ImageGalleryProps {

}



const ImageGallery: FC<ImageGalleryProps> = ({}) => {
  const ref = useRef(null);
  const [ modalOpen, setModalOpen ] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const [selectedImage, setSelectedImage ] = useState({
    id: 0,
    src: '',
    alt: '',
    description: '',
  })
  // may want to go back and define a variable to set what is considered "in view"
  const isInView = useInView(ref, {
    once:true,
    margin: "0px 100px 600px 0px"
   })


  const galleryAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: !isInView ? 0 : 1,
      y:!isInView ? 50 : 0,
      transition: !isInView ? {} : {
        type: "spring",
        damping: 14,
        stiffness: 100,
        staggerChildren: 0.10
      }
    }
  }

  return (
    <motion.div
      className="flex justify-center flex-col items-center"
    >
      <div
        className="font-josefine text-4xl sm:text-5xl font-light my-4 italic shadow-md w-full "
      >
        Social Media Work
      </div>
      <motion.div
        variants={galleryAnimation}
        className="w-11/12 md:w-10/12 sm:m-6 md:my-16 my-12 lg:mx-28 lg:columns-4 columns-3"
        initial="hidden"
        animate="visible"
      >
        {imageData.map((image) => (
          <motion.div
            ref={ref}
            whileHover={{scale:1.05}}
            whileTap={{scale:.95}}
            variants={galleryAnimation}
            className=" m-1 md:p-2"
            key={image.id}
          >
            <Image
              className="h-auto w-auto"
              onClick={() => {
                modalOpen ? close() : open()
                setSelectedImage({
                  id: image.id,
                  src: image.src,
                  alt: image.alt,
                  description: image.description
              })}}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={true}
            />
          </motion.div>

        ))}
      </motion.div>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
        {modalOpen &&
        <ImageModal
          modalOpen={modalOpen}
          handleClose={close}
        >
            <Image
              className=""
              src={selectedImage.src}
              alt={selectedImage.alt}
              height='500'
              width="500"
            />


        </ImageModal>}
      </AnimatePresence>
    </motion.div>
  )
}

export default ImageGallery