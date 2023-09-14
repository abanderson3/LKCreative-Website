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
    rawContent: string,
    preferredContent: string,
    contentAssistance: string,
    techProficiency: Array<string>
  },
  setSurveyData: (surveyData: any) => void
  onSelectionChange: (event: any) => void
}

// need handleSelect?

const WhoAreYou: FC<WhoAreYouProps> = ({onSelectionChange, surveyData, setSurveyData }) => {

  return (
    <ul className="font-josefine font-light flex flex-wrap justify-center">

      <li className="">
        <input
          type="radio"
          id="individual"
          name="whoAreYou"
          value={"Individual (1)"}
          onChange={onSelectionChange}
          checked={(surveyData as any)["whoAreYou"] === "Individual (1)"}
          className="hidden peer"
          required
        >
        </input>
        <label
          htmlFor="individual"
          className="border border-black m-1 p-1 peer-checked:text-blue-500 hover:text-red-600"
        >
        Individual &#40;1&#41;
        </label>
      </li>

      <li className="">
      <input
          type="radio"
          id="micro"
          name="whoAreYou"
          value={"Micro (2 - 4)"}
          onChange={onSelectionChange}
          checked={(surveyData as any)["whoAreYou"] === "Micro (2 - 4)"}
          className="hidden peer"
          required
        >
        </input>
        <label
          htmlFor="micro"
          className="border border-black m-1 p-1 peer-checked:text-blue-500 hover:text-red-600"
        >
        Micro &#40;2 - 4&#41;
        </label>
      </li>

      <li className="">
      <input
          type="radio"
          id="small"
          name="whoAreYou"
          value={"Small (5 - 19)"}
          onChange={onSelectionChange}
          checked={(surveyData as any)["whoAreYou"] === "Small (5 - 19)"}
          className="hidden peer"
          required
        >
        </input>
        <label
          htmlFor="small"
          className="border border-black m-1 p-1 peer-checked:text-blue-500 hover:text-red-600"
        >
        Small &#40;5 - 19&#41;
        </label>
      </li>

      <li className="">
      <input
          type="radio"
          id="medium"
          name="whoAreYou"
          value={"Medium (20 - 99"}
          onChange={onSelectionChange}
          checked={(surveyData as any)["whoAreYou"] === "Medium (20 - 99"}
          className="hidden peer"
          required
        >
        </input>
        <label
          htmlFor="medium"
          className="border border-black m-1 p-1 peer-checked:text-blue-500 hover:text-red-600"
        >
        Medium &#40;20 - 99&#41;
        </label>
      </li>

      <li className="">
      <input
          type="radio"
          id="large"
          name="whoAreYou"
          value={"Large (99+)"}
          onChange={onSelectionChange}
          checked={(surveyData as any)["whoAreYou"] === "Large (99+)"}
          className="hidden peer "
          required
        >
        </input>
        <label
          htmlFor="large"
          className="border border-black m-1 p-1 peer-checked:text-blue-500 hover:text-red-600"
        >
        Large &#40;99+&#41;
        </label>
      </li>

    </ul>
  )

}

export default WhoAreYou