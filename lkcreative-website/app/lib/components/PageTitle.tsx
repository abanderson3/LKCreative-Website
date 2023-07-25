"use client"
import React from "react";

interface PageTitleProps {
  title: string,
}

const pageTitle: React.FC<PageTitleProps> = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-between py-5 font-josefine border border-black">
      {title}
    </div>
  )
}

export default pageTitle