"use client"
import { FC } from "react"

interface SocialMediaHaveProps {
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
    rawContent: Object,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void,
  // handleSelect: () => void
}

// need to add handleSelect prop

const SocialMediaSelection: FC<SocialMediaHaveProps> = ({surveyData, setSurveyData}) => {

  return (
    <ul className="font-josefine font-light flex flex-wrap justify-center">

      <li className="border border-black m-1  p-1">
        <input type="radio"></input>
        Facebook
      </li>

      <li className="border border-black m-1 p-1">
        <input type="radio"></input>
        X/Twitter
      </li>

      <li className="border border-black m-1 p-1">
        <input type="radio"></input>
        Instagram
      </li>

      <li className="border border-black m-1 p-1">
        <input type="radio"></input>
        TikTok
      </li>

      <li className="border border-black m-1 p-1">
        <input type="radio"></input>
        Pinterest
      </li>

      <li className="border border-black m-1 p-1">
        <input type="radio"></input>
        Linkedin
      </li>

    </ul>
  )

}

export default SocialMediaSelection