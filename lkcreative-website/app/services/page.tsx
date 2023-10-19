import PageTitle from "../lib/components/PageTitle"
import ServiceBreakdown from "../lib/components/ServiceBreakdown/ServiceBreakdown"
import Image from "next/image"
import ServiceGroups from "../lib/components/ServiceBreakdown/ServiceGroups"


export default function Services() {




  return (
    <main className="flex flex-col font-josefine ">
      {/* <PageTitle title="Services" /> */}
      <div className="text-center font-josefine font-light italic text-5xl p-3 mt-5">
        What We Offer
      </div>

      <div className="flex flex-col font-light ">
        <ServiceGroups/>
      </div>

    </main>
  )
}