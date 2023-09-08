import PageTitle from "../lib/components/PageTitle"
import IntroText from "../lib/components/IntroText"
import EmailForm from "../lib/components/EmailForm"
import Survey from "../lib/components/Survey"

export default function Contact({}) {


  return (
    <main className="flex flex-col">
      <div className="">
        <EmailForm/>
      </div>
      <div className="font-josefine font-light text-4xl italic text-center my-4 px-3 md:max-w-2xl place-self-center">
        Or take our questionnaire below to recieve a detailed quote.
      </div>
      <div>
        <Survey/>
      </div>
    </main>
  )
}