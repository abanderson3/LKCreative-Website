import Image from 'next/image'
import PageTitle from './lib/components/PageTitle'
import IntroText from './lib/components/IntroText'
import ElevatorPitch from './lib/components/ElevatorPitch'
import ServicesCards from './lib/components/ServicesCards'
import SurveyButton from './lib/components/survey/SurveyButton'
import HeroAnimation from './lib/components/HeroAnimation'

export default function Home() {
  const sequence = [
    "Let us craft your digital brand",
    1000,
    "Let us craft your digital image",
    1000,
    "Let us craft your digital presence",
    1000,
    "Let us craft your digital story.",
    1000
  ]


  return (
    <main className="text-center">
      {/* <PageTitle title="Home" /> */}
      <div className='bg-gradient-to-r from-white to-blue-200 pb-10 flex flex-col sm:flex-row'>
        <div className='w-full sm:w-1/2 flex justify-center items-center '>
          <HeroAnimation/>
        </div>
        <div className='w-full sm:w-1/2'>
          <IntroText cursor={true} sequence={sequence} />
          <SurveyButton/>
        </div>


      </div>

      {/* <ElevatorPitch /> */}
      <ServicesCards />
    </main>
  )
}
