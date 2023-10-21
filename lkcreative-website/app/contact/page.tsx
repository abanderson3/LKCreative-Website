import PageTitle from "../lib/components/PageTitle"
import IntroText from "../lib/components/IntroText"
import EmailForm from "../lib/components/EmailForm"
import SurveyButton from "../lib/components/survey/SurveyButton"
import Link from "next/link"
import Image from "next/image"


export default function Contact({}) {


  return (
    <main className="flex flex-col">
        <div className="flex flex-col md:flex-row ">
          <div className=" flex flex-col md:w-2/5 my-3">
            <div className="text-center font-josefine font-light italic text-4xl my-3">
              Where to find us!
            </div>
            {/* add email address in box somewhere */}

            <div className="flex justify-between p-4 h-full md:flex-col items-center">
              <Link href="https://www.instagram.com/lkcreativeagency/">
                <div className=" hover:cursor-pointer">
                  <Image
                    className="rounded-lg"
                    src="./instagram_icon.svg"
                    alt="instagram_icon"
                    width="50"
                    height="50"
                  />
                </div>
              </Link>

              <Link href="https://www.facebook.com/lkcreativeagency/">
                <div className=" hover:cursor-pointer">
                  <Image
                    className="rounded-lg"
                    src="./facebook_icon.svg"
                    alt="facebook_icon"
                    width="50"
                    height="50"
                  />
                </div>
              </Link>

              <Link href="https://www.linkedin.com/company/lkcreativeagency/">
                <div className=" hover:cursor-pointer">
                  <Image
                    className="rounded-lg"
                    src="./linkedin_icon.svg"
                    alt="Linkedin_icon"
                    width="50"
                    height="50"
                  />
                </div>
              </Link>
            </div>

          </div>
          <EmailForm/>
        </div>

      <div className="font-josefine font-light text-4xl italic text-center my-4 px-3 md:max-w-2xl place-self-center">
        Or take our questionnaire to recieve a detailed quote.
      </div>
      <div className="text-center">
        <SurveyButton/>
      </div>
    </main>
  )
}