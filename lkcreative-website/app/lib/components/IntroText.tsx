"use client"
import React from "react"

interface IntroTextProps{
  text: string
}

const IntroText: React.FC<IntroTextProps> = ({text}) => {


  return (
    <main>
      <div className="flex justify-center py-32">
        <p className="font-josefine text-3xl lg:text-6xl font-light md:text-5xl sm:text-4xl text-center ">
          {text}
        </p>
      </div>
    </main>
  )
}

export default IntroText;