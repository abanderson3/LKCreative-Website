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
      <div className="flex justify-center py-28 lg:py-36 md:py-32 sm:py-30 border border-black">
        <div className="px-8 font-josefine text-6xl text-center font-light italic lg:text-8xl lg:px-10 lg:h-36 md:text-8xl md:h-28 sm:text-7xl">

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