"use client"
import React from "react"
import { TypeAnimation } from "react-type-animation"



interface IntroTextProps{
  sequence: Array<any>
  cursor: boolean

}

const IntroText: React.FC<IntroTextProps> = ({sequence, cursor}) => {



  return (
    <main className="">
      <div className="flex justify-center py-28 lg:py-36 md:py-32 sm:py-30 ">
        <div className="px-8 font-josefine text-5xl text-center font-light italic lg:text-7xl lg:px-10 lg:h-36 md:text-6xl md:h-40 sm:text-7xl">

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