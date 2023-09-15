"use client"
import { motion } from "framer-motion";
import { FC, useState } from "react";

interface SimpleCheckboxListProps {
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
  // onSelectionChange: (event:any) => void
}

const SimpleCheckboxList: FC<SimpleCheckboxListProps> = ({listOptions, listName, surveyData, setSurveyData}) => {


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const updatedSocials = isChecked(value) ? (surveyData as any)[listName].filter((option: string) => option !== value) : [...(surveyData as any)[listName], value];

    setSurveyData((prev: any) => ({
      ...prev,
      [listName]: updatedSocials
    }))

  }

  const isChecked = (value:string) => {
    return (surveyData as any)[listName].includes(value)
  }


  return (
    <>
      <ul className="font-josefine font-light flex flex-col justify-center">
        {listOptions.map((option, i) => (
          <li
            className=""
            key={i}
          >
            <input
              type="checkbox"
              id={option + listName}
              name={listName}
              value={option}
              onChange={onChange}
              checked={isChecked(option)}
              className="hidden peer"
            />
            <motion.label
              whileHover={{ scale: 1.05}}
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

export default SimpleCheckboxList