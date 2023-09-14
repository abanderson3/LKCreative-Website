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

const SocialMediaSelection: FC<SocialMediaSelectionProps> = ({listName, surveyData, onSelectionChange,setSurveyData}) => {

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
    <ul className="font-josefine font-light flex flex-wrap justify-center">

      <li className="">
        <input
          type="checkbox"
          id={"facebook" + listName}
          name="socials"
          value={"Facebook"}
          onChange={onChange}
          checked={isChecked("Facebook")}
          className="peer hidden"
          // onClick={(e: any) => console.log(listName, e.target.value, (surveyData as any)[listName])}
        />
        <label
          htmlFor={"facebook" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
          Facebook
        </label>
      </li>

      <li className="">
        <input
          type="checkbox"
          id={"x/twitter" + listName}
          name="socials"
          value={"X/Twitter"}
          onChange={onChange}
          checked={isChecked("X/Twitter")}
          className="peer hidden"
          // onClick={(e: any) => console.log(listName, e.target.value, (surveyData as any)[listName])}
        />
        <label
          htmlFor={"x/twitter" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
          X/Twitter
        </label>
      </li>

      <li className="">
        <input
          type="checkbox"
          id={"instagram" + listName}
          name="socials"
          value={"Instagram"}
          onChange={onChange}
          checked={isChecked("Instagram")}
          className="peer hidden"
        />
        <label
          htmlFor={"instagram" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
          Instagram
        </label>
      </li>

      <li className="">
        <input
          type="checkbox"
          id={"tiktok" + listName}
          name="socials"
          value={"TikTok"}
          onChange={onChange}
          checked={isChecked("TikTok")}
          className="peer hidden"
        />
        <label
          htmlFor={"tiktok" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
        TikTok
        </label>
      </li>

      <li className="">
        <input
          type="checkbox"
          id={"pinterest" + listName}
          name="socials"
          value="Pinterest"
          onChange={onChange}
          checked={isChecked("Pinterest")}
          className="peer hidden"
        />
        <label
          htmlFor={"pinterest" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
          Pinterest
        </label>
      </li>

      <li className="">
        <input
          type="checkbox"
          id={"linkedin" + listName}
          name="socials"
          value="Linkedin"
          onChange={onChange}
          checked={isChecked("Linkedin")}
          className="peer hidden"
        />
        <label
          htmlFor={"linkedin" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
          Linkedin
        </label>
      </li>

      <li className="">
        <input
          type="checkbox"
          id={"youtube" + listName}
          name="socials"
          value="YouTube"
          onChange={onChange}
          checked={isChecked("YouTube")}
          className="peer hidden"
        />
        <label
          htmlFor={"youtube" + listName}
          className="peer-checked:text-blue-500 hover:text-red-600 border border-black m-1 p-1"
        >
          YouTube
        </label>
      </li>

    </ul>
  )

}

export default SocialMediaSelection