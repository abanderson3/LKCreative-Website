import PageTitle from "../lib/components/PageTitle"
import ServiceBreakdown from "../lib/components/ServiceBreakdown/ServiceBreakdown"
import Image from "next/image"
import ServiceGroups from "../lib/components/ServiceBreakdown/ServiceGroups"


export default function Services() {




  return (
    <main className="flex flex-col font-josefine border border-black">
      {/* <PageTitle title="Services" /> */}
      <div className="border border-black text-center font-josefine font-light italic text-4xl">
        What We Offer
      </div>

      <div className="flex flex-col">
        <ServiceGroups/>
      </div>

    </main>
  )
}