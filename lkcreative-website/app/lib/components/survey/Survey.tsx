"use client"
import { useState, useEffect } from "react"
import { FC } from "react"
import WhoAreYou from "./WhoAreYou"
import SocialMediaHave from "./SocalMediaSelection"
import SocialMediaSelection from "./SocalMediaSelection"
import InvestmentLevel from "./InvestmentLevel"
import ServiceSelectors from "./ServiceSelectors"
import SimpleList from "./SimpleList"


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
    rawContent: "",
    preferredContent: "",
    contentAssistance: "",
    techProficiency: []
  })

  const handleFormChange = (event: { target: { name: string; value: string } }) => {
    setSurveyData((curr) => ({
      ...curr,
      [event.target.name]: event.target.value
    }));
  }

  const handleSurveySubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // logic for sending email with sendgrid
    handleClose();
  }

  const investmentLevelOptions = ["Budget is not a primary concern.", "Willing to invest in high quality services.", "Moderate and flexible, open to recommendations.", "Limited, need to be mindful of costs.", "Prefer not to discuss budget at this time."];
  const preferredContentOptions = ["Text/Blogs", "Videos", "Photos", "Infographics", "Other"];
  const rawContentOptions = ["None.", "Some saved, rarely produced.", "A lot saved, rarely produced.", "Often produced.", "Other"]
  const contentAssistanceOptions = ["I will not need help producing content.", "I need for reccomendations for content production.", "I may occassionally need help producing content", "I will need help producing content regularly.", "Other"]
  const questionStyle = "my-4 text-2xl font-light font-josefine";

  return (
    <form
      onSubmit={handleSurveySubmit}
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
            onChange={handleFormChange}
          />

          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={surveyData.lastName}
            onChange={handleFormChange}
          />

          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="email"
            name="email"
            placeholder="Email"
            value={surveyData.email}
            onChange={handleFormChange}
          />

          <input
            required
            className="border border-black m-1 rounded-md p-1 text-center"
            type="number"
            name="phoneNumber"
            placeholder="Phone"
            value={surveyData.phoneNumber}
            onChange={handleFormChange}
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
          <SimpleList listName={"budget"} listOptions={investmentLevelOptions} surveyData={surveyData} setSurveyData={setSurveyData}/>
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
          <SimpleList listName={"preferredContent"} listOptions={preferredContentOptions} surveyData={surveyData} setSurveyData={setSurveyData}/>
        </div>
        <div>
          <div className={questionStyle}>
            9. Do you have raw images and videos available for social media content, and do you anticipate having more in the future?
          </div>
          <SimpleList listName={"rawContent"} listOptions={rawContentOptions} surveyData={surveyData} setSurveyData={setSurveyData}/>
          {/* options for future content and current content */}
        </div>
        <div>
          <div className={questionStyle}>
          10. Will you need assistance producing raw images and video content?
          </div>
          <SimpleList listName={"contentAssistance"} listOptions={contentAssistanceOptions} surveyData={surveyData} setSurveyData={setSurveyData}/>
        </div>
        <div>
          <div className={questionStyle}>
          11. What is your level of technical proficiency?
          </div>
        </div>
      </div>
      <button type="submit" className="border border-black rounded-md mx-24 my-3 p-1 font-normal">Submit</button>
    </form>
  )
}

export default Survey