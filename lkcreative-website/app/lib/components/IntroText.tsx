"use client"
import React from "react"
import Typewriter from "react-ts-typewriter"


interface IntroTextProps{
  text: string
}

const IntroText: React.FC<IntroTextProps> = ({text}) => {


  return (
    <main>
      <div className="flex justify-center py-36 lg:py-56 md:py-48 sm:py-44">
        <div className="font-josefine text-6xl text-center font-light italic lg:text-9xl md:text-8xl sm:text-7xl ">
          {/* {text} */}
          <Typewriter
            text = { text }
            speed = { 100 }
            cursor = { false }
            onFinished = {() => <Typewriter text={'test'}/>}
          />
        </div>
      </div>
    </main>
  )
}

export default IntroText;