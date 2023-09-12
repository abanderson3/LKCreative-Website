"use client"
import { useState, useEffect } from "react"
import { FC } from "react"
import WhoAreYou from "./WhoAreYou"
import SocialMediaHave from "./SocalMediaSelection"
import SocialMediaSelection from "./SocalMediaSelection"
import InvestmentLevel from "./InvestmentLevel"
import ServiceSelectors from "../serviceSelectors/ServiceSelectors"


interface SurveyProps {
  handleClose: () => void
}

const Survey: FC<SurveyProps> = ({handleClose}) => {
  const [ surveyData, setSurveyData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    whoAreYou: '',
    currentSocials: [],
    toWorkOnSocials: [],
    budget:'',
    services: {},
    targetAudience: {},
    rawContent: {},
    techProficiency: []
  })

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setSurveyData((curr) => ({
      ...curr,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // logic for sending email with sendgrid
    handleClose();
  }

  const questionStyle = "my-4 text-2xl font-light font-josefine"

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black flex flex-col justify-center text-center p-6 bg-customEgg rounded-2xl"
    >
      <div className="">
        <div className={questionStyle}>
          1. Contact Information
        </div>
        <div className="flex flex-col justify-center max-w-xl mx-auto">
          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={surveyData.firstName}
            onChange={handleChange}
          />

          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={surveyData.lastName}
            onChange={handleChange}
          />

          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="email"
            name="email"
            placeholder="Email"
            value={surveyData.email}
            onChange={handleChange}
          />

          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="number"
            name="phoneNumber"
            placeholder="Phone"
            value={surveyData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className={questionStyle}>
            2. Who are you?
          </div>
            <WhoAreYou surveyData={surveyData} setSurveyData={setSurveyData} />
          </div>
        <div>
          <div className={questionStyle}>
            3. What social media do you have?
          </div>
            <SocialMediaHave surveyData={surveyData} setSurveyData={setSurveyData}/>
            {/* need to add handleSelect */}
        </div>
        <div>
          <div className={questionStyle}>
            4. What social media do you want to work on?
          </div>
          <SocialMediaSelection surveyData={surveyData} setSurveyData={setSurveyData}/>
            {/* need to add handleSelect */}
        </div>
        <div>
          <div className={questionStyle}>
            5. What level of investment are you comfortable with?
          </div>
          <InvestmentLevel surveyData={surveyData} setSurveyData={setSurveyData}/>
        </div>
        <div>
          <div className={questionStyle}>
            6. What services are you looking for?
          </div>
          <ServiceSelectors surveyData={surveyData} setSurveyData={setSurveyData}/>
        </div>
        <div>
          <div className={questionStyle}>
            7. Who is your target audience?
          </div>
        </div>
        <div>
          <div className={questionStyle}>
            8. What kind of content do you prefer to use?
          </div>
        </div>
        <div>
          <div className={questionStyle}>
            9. Do you have raw images and videos available for social media content, and do you anticipate having more in the future?
          </div>
          {/* options for future content and current content */}
        </div>
        <div>
          <div className={questionStyle}>
          10. What is your level of technical proficiency?
          </div>
        </div>
      </div>
      <button type="submit" className="border border-black rounded-md mx-24 my-3 p-1 font-normal">Submit</button>
    </form>
  )
}

export default Survey