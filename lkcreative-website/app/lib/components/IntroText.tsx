"use client"
import React from "react"
import { TypeAnimation } from "react-type-animation"



interface IntroTextProps{
  text: string
}

const IntroText: React.FC<IntroTextProps> = ({text}) => {



  return (
    <main>
      <div className="flex justify-center py-36 lg:py-56 md:py-48 sm:py-44">
        <div className="h-16 px-8 font-josefine text-6xl text-center font-light italic lg:text-9xl lg:px-10 lg:h-36 md:text-8xl md:h-28 sm:text-7xl ">
          {/* {text} */}
          <TypeAnimation
            sequence={[
              "Let us craft your digital brand",
              1000,
              "Let us craft your digital image",
              1000,
              "Let us craft your digital presence",
              1000,
              "Let us craft your digital story.",
              1000
            ]}
            wrapper="div"
            speed={ 20 }
            cursor={ true }
          />
        </div>
      </div>
    </main>
  )
}

export default IntroText;