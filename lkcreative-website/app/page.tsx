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
    <main className="text-center overflow-hidden">
      {/* <PageTitle title="Home" /> */}
      <div className='bg-gradient-to-r from-customEgg to-blue-300 pb-10 flex flex-col sm:flex-row'>
        <div className='relative w-full sm:w-1/3 flex justify-center items-center transform translate-y-16 -translate-x-28 md:-translate-x-20 sm:-translate-x-16 sm:translate-y-0 md:translate-y-5 xl:-translate-x-38 lg:-translate-x-28 scale-75 md:scale-100'>
          <HeroAnimation/>
        </div>
        <div className='w-full sm:w-2/3'>
          <IntroText cursor={true} sequence={sequence} />
          <SurveyButton/>
        </div>


      </div>

      {/* <ElevatorPitch /> */}
      <ServicesCards />
    </main>
  )
}
