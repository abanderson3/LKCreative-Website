"use client"
import React from "react"

interface IntroTextProps{
  text: string
}

const IntroText: React.FC<IntroTextProps> = ({text}) => {


  return (
    <main>
      <div className="flex justify-center pt-16 pb-10 md:py-20 lg:py-24">
        <p className="font-josefine text-5xl text-center font-light italic lg:text-7xl md:text-6xl sm:text-5xl ">
          {text}
        </p>
      </div>
    </main>
  )
}

export default IntroText;