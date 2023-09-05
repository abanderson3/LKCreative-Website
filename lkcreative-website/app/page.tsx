import Image from 'next/image'
import PageTitle from './lib/components/PageTitle'
import IntroText from './lib/components/IntroText'
import ElevatorPitch from './lib/components/ElevatorPitch'
import ServicesCards from './lib/components/ServicesCards'

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
    <main className="">
      {/* <PageTitle title="Home" /> */}
      <IntroText cursor={true} sequence={sequence} />
      {/* <ElevatorPitch /> */}
      <ServicesCards />
    </main>
  )
}
