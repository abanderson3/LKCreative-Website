"use client"
import { motion, useInView } from "framer-motion"
import { FC, useState } from "react"
import imageData from "./imageData"
import Image from "next/image"

interface ImageGalleryProps {

}

const ImageGallery: FC<ImageGalleryProps> = ({}) => {

  return (
    <motion.div
      layout
      className="flex justify-center flex-col items-center"
    >
      <div
        className="font-josefine text-4xl sm:text-5xl font-light my-4 italic shadow-md w-full "
      >
        Our Work
      </div>
      <motion.div
        className="w-11/12 sm:w-10/12 sm:m-6 lg:mx-28 lg:columns-4 columns-3"
      >
        {imageData.map((image) => (
          <motion.div
            className="h-auto w-auto p-1 md:p-2"
            key={image.id}
          >
            <Image
              className=""
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </motion.div>

        ))}
      </motion.div>

    </motion.div>
  )
}

export default ImageGallery