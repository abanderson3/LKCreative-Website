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
      className="flex justify-center flex-col "
    >
      <div
        className="font-josefine text-4xl font-light my-4 italic"
      >
        Our Work
      </div>
      <motion.div
        layout
        className="m-2 sm:m-8 lg:columns-4 md:columns-3 columns-3"
      >
        {imageData.map((image) => (
          <motion.div
            layout
            whileHover={{scale: 1.05}}
            whileTap={{scale:0.95}}
            className="h-fit w-fit p-1 md:p-2"
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