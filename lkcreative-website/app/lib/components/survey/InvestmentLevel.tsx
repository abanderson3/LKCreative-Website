"use client"
import { FC } from "react"

interface InvestmentLevelProps {
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

const InvestmentLevel: FC<InvestmentLevelProps> = ({surveyData, setSurveyData}) => {

  return (
    <ul className="font-josefine font-light flex flex-wrap justify-center">

      <li className="border border-black m-1 p-1 w-11/12 max-w-sm">
        Budget is not a primary concern.
      </li>

      <li className="border border-black m-1 p-1 w-11/12 max-w-sm">
        Willing to invest in high quality services.
      </li>

      <li className="border border-black m-1 p-1 w-11/12 max-w-sm">
        Moderate and flexible, open to recommendations.
      </li>

      <li className="border border-black m-1 p-1 w-11/12 max-w-sm">
        Limited, need to be mindful of costs.
      </li>

      <li className="border border-black m-1 p-1 w-11/12 max-w-sm">
        Prefer not to discuss budget at this time.
      </li>

    </ul>
  )
}

export default InvestmentLevel