"use client"
import { FC } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

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
    <ul className="font-josefine font-light max-w-3xl flex flex-wrap justify-center mx-auto sm:justify-evenly">

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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"facebook" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./facebook_icon.svg"
            alt="facebook_icon"
            width="42"
            height="42"
          />
        </motion.label>
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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"x/twitter" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./x_social_icon.svg"
            alt="x_icon"
            width="42"
            height="42"
          />
        </motion.label>
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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"instagram" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./instagram_icon.svg"
            alt="instagram_icon"
            width="42"
            height="42"
          />
        </motion.label>
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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"tiktok" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./tiktok_icon.svg"
            alt="tiktok_icon"
            width="42"
            height="42"
          />
        </motion.label>
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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"pinterest" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./pinterest_logo.svg"
            alt="pinterest_icon"
            width="42"
            height="42"
          />
        </motion.label>
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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"linkedin" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./linkedin_icon.svg"
            alt="linkedin_icon"
            width="42"
            height="42"
          />
        </motion.label>
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
        <motion.label
          whileTap={{ scale: 1.0 }}
          whileHover={{ scale: 1.1 }}
          htmlFor={"youtube" + listName}
          className="peer-checked:bg-customMint hover:bg-slate-300 rounded-lg flex p-2 m-1"
        >
          <Image
            className=""
            src="./youtube_icon.svg"
            alt="youtube_icon"
            width="42"
            height="42"
          />
        </motion.label>
      </li>

    </ul>
  )

}

export default SocialMediaSelection