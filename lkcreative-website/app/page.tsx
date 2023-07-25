import Image from 'next/image'
import PageTitle from './lib/components/PageTitle'
import IntroText from './lib/components/IntroText'
import ElevatorPitch from './lib/components/ElevatorPitch'

export default function Home() {
  return (
    <main className="">
      {/* <PageTitle title="Home" /> */}
      <IntroText text="Let us craft your digital story" />
      <ElevatorPitch />
    </main>
  )
}
