"use client"
import { FC } from "react"

interface WhoAreYouProps {
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
  setSurveyData: (surveyData: any) => void
}

const WhoAreYou: FC<WhoAreYouProps> = ({ surveyData, setSurveyData }) => {

  return (
    <ul className="font-josefine font-light flex flex-wrap justify-center">

      <li className="border border-black m-1 p-1">
        Individual &#40;1&#41;
      </li>

      <li className="border border-black m-1 p-1">
        Micro &#40;2 - 4&#41;
      </li>

      <li className="border border-black m-1 p-1">
        Small &#40;5 - 19&#41;
      </li>

      <li className="border border-black m-1 p-1">
        Medium &#40;20 - 99&#41;
      </li>

      <li className="border border-black m-1 p-1">
        Large &#40;99+&#41;
      </li>

    </ul>
  )

}

export default WhoAreYou