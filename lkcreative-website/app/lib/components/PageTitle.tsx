"use client"
import React from "react";

interface PageTitleProps {
  title: string,
}

const pageTitle: React.FC<PageTitleProps> = ({title}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-10">
      {title}
    </div>
  )
}

export default pageTitle