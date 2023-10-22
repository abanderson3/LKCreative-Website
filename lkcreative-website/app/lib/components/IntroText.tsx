"use client"
import React from "react"
import { TypeAnimation } from "react-type-animation"



interface IntroTextProps{
  sequence: Array<any>
  cursor: boolean

}

const IntroText: React.FC<IntroTextProps> = ({sequence, cursor}) => {

// need to look into how to stop text from wrapping as it types in

  return (
    <main className=" md:h-128">
      <div className="flex justify-center h-72 pt-32 pb-5 lg:py-36 md:py-32 sm:py-30 ">
        <div className="px-8 font-josefine text-5xl text-right md:text-center font-light italic lg:text-7xl lg:px-10 lg:h-36 md:text-6xl md:h-40 sm:text-5xl w-full">

          <TypeAnimation
            sequence={sequence}
            wrapper="div"
            speed={ 20 }
            cursor={ cursor }
          />
        </div>
      </div>
    </main>
  )
}

export default IntroText;