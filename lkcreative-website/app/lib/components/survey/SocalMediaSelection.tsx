"use client"
import { FC } from "react"

interface SocialMediaSelectionProps {
  listName: string,
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

// need to add handleSelect prop
// want to conditionally render text entry field for links?

const SocialMediaSelection: FC<SocialMediaSelectionProps> = ({listName, surveyData, onSelectionChange ,setSurveyData}) => {

  return (
    <ul className="font-josefine font-light flex flex-wrap justify-center">

      <li className="border border-black m-1  p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
          Facebook
      </li>

      <li className="border border-black m-1 p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
          X/Twitter
      </li>

      <li className="border border-black m-1 p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
          Instagram
      </li>

      <li className="border border-black m-1 p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
          TikTok
      </li>

      <li className="border border-black m-1 p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
          Pinterest
      </li>

      <li className="border border-black m-1 p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
          Linkedin
      </li>

      <li className="border border-black m-1 p-1">
        <input
          type="radio"
          id=""
          name="socials"
          value=""
          onChange={onSelectionChange}
          checked={(surveyData as any)[listName] === ""}
          className="peer hidden"
        />
        YouTube
      </li>

    </ul>
  )

}

export default SocialMediaSelection