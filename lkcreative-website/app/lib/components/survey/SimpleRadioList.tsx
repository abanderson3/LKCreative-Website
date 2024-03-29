"use client"
import { motion } from "framer-motion";
import { FC, useState } from "react";

interface SimpleListProps {
  listName: string,
  listOptions: Array<string>,
  surveyData: {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    whoAreYou: string,
    currentSocials: Array<string>,
    toWorkOnSocials: Array<string>,
    budget: string,
    services: Object,
    targetAudience: Object,
    rawContent: string,
    preferredContent: string,
    contentAssistance: string,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
  onSelectionChange: (event:any) => void
}

const SimpleList: FC<SimpleListProps> = ({listOptions, listName, surveyData, onSelectionChange, setSurveyData}) => {


  // let checked = surveyData[listName as keyof Object] === option

  // const onClickTest = (event:any) => {
  //   console.log(event.target.name, event.target.value, event.target, surveyData)
  // }


  return (
    <>
      <ul className="font-josefine font-light flex flex-col justify-center">
        {listOptions.map((option, i) => (
          <li
            className=""
            key={i}
          >
            <input
              type="radio"
              id={option + listName}
              name={listName}
              value={option}
              onChange={onSelectionChange}
              checked={(surveyData as any)[listName] === option}
              className="hidden peer"
              required
            />
            <motion.label
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              htmlFor={option + listName}
              className="flex justify-center border border-black m-1 p-1 w-11/12 max-w-lg rounded-lg mx-auto peer-checked:bg-customMint hover:bg-slate-300 cursor-pointer"
            >
              {option}
            </motion.label>
          </li>
        ))}
      </ul>
    </>
  )

}

export default SimpleList