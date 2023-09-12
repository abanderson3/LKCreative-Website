"use client"
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
    rawContent: String,
    preferredContent: string,
    contentAssistance: string,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
}

const SimpleList: FC<SimpleListProps> = ({listOptions, listName, surveyData, setSurveyData}) => {


  // let checked = surveyData[listName as keyof Object] === option
  const onSelectionChange = (event:any) => {
    console.log(event.target.name, event.target.value, surveyData)
    setSurveyData({
      ...surveyData,
      [event.target.name]: event.target.value
    })
  }

  const onClickTest = (event:any) => {
    console.log(event.target.name, event.target.value, surveyData)
  }


  return (
    <>
      <ul className="font-josefine font-light flex flex-col justify-center">
        {listOptions.map((option, i) => (
          <li
            className="border border-black"
            key={i}
          >
            <input type="radio" value={option} id="listOption" className="hidden peer" />
            <label
              htmlFor="listOption"
              className="border border-black m-1 p-1 w-11/12 max-w-sm rounded-lg peer-checked:text-blue-500 hover:text-gray-600"
              onChange={onSelectionChange}
              onClick={onClickTest}
            >
              {option}
            </label>

          </li>
        ))}
      </ul>
    </>
  )

}

export default SimpleList