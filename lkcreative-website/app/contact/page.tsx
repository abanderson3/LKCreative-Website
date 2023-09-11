import PageTitle from "../lib/components/PageTitle"
import IntroText from "../lib/components/IntroText"
import EmailForm from "../lib/components/EmailForm"
import Survey from "../lib/components/survey/Survey"
import SurveyButton from "../lib/components/survey/SurveyButton"

export default function Contact({}) {


  return (
    <main className="flex flex-col">
        <div className="flex flex-col md:flex-row ">
          <div className="border border-black flex flex-col md:w-2/5">
            <div className="text-center font-josefine font-light italic text-4xl mt-6">
              Where to find us!
              {/* Icons: insta, facebook, linkedin */}
            </div>
          </div>
          <EmailForm/>
        </div>

      <div className="font-josefine font-light text-4xl italic text-center my-4 px-3 md:max-w-2xl place-self-center">
        Or take our questionnaire to recieve a detailed quote.
      </div>
      <div className="text-center">
        {/* <Survey/> */}
        <SurveyButton/>
      </div>
    </main>
  )
}