import Header from "@/components/header";

import Footer from "@/components/footer";
import OurTeam from "@/components/team";
import Vision from "@/components/vision";

export const metadata = {
  title: "Who We Are",
  description:
    "Read about our story, meet our team, vision, mission and our reach in kasese municipality",
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh bg-[#3cdd8c]">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-muted pt-6 pb-12 lg:pt-16lg:pb-32">
          <div className="max-w-screen-2xl mx-auto  px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl mb-6 font-bold tracking-tighter sm:text-5xl">
                  Read Our Story
                </h2>
                <div className="space-y-4 max-w-[900px] mx-auto text-lg/relaxed text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <p>
                    Mother of Hope Foundation Uganda is a Community-Based
                    non-profit organization located in Nyamwamba Division,
                    Kasese Municipality, Uganda.
                  </p>
                  <p>
                    Founded in 2020 as a response to the pressing economic and
                    social challenges faced by the local communities, the
                    foundation strives to enact positive change and holistic
                    transformation for individuals who grapple with economic and
                    social disadvantages. Its very name embodies its aspiration
                    to serve as a beacon of hope, fostering growth, empowerment,
                    and progress within the community.
                  </p>
                  <p>
                    The organization&#39;s commitment extends to leaving a
                    lasting imprint in Kasese by nurturing hope, promoting
                    education, facilitating empowerment, and catalyzing
                    community development. Through its comprehensive approach,
                    unwavering dedication to its mission, vision, and goals, the
                    foundation aims to forge a brighter future for the community
                    it serves.
                  </p>
                  <p>
                    The foundation&#39;s genesis is rooted in the myriad
                    challenges encountered within the community, with ripple
                    effects that extend to encompass the entire Kasese district
                    and even reverberate globally. Chief among these challenges
                    is the recurring inundation caused by the River Nyamwamba, a
                    formidable disaster that compels people to seek refuge far
                    from their homes.
                  </p>
                  <p>
                    This cycle of flooding erodes soil fertility along the
                    riverbanks, aggravating the specter of food insecurity
                    across the broader Rwenzori sub-region. Flash floods from
                    the hills of Mount Rwenzori in the Busumba region further
                    compound the food security concerns, particularly
                    detrimental given the region&#39;s agrarian reliance.
                  </p>
                  <p>
                    Concurrently, domestic violence casts a long shadow over
                    families in Kasese Municipality and the larger district,
                    yielding dire consequences. The scarcity of resources
                    prompts many children to forego education, opting to remain
                    at home due to their parents&#39; inability to cover school
                    fees and essential needs.
                  </p>
                  <p>
                    This vulnerability exposes them to exploitation, with girls
                    lacking access to proper sanitation provisions and boys
                    resorting to detrimental activities like riverbank sand
                    mining. Unemployment emerges as a substantial challenge in
                    these communities, partly stemming from the instability
                    caused by River Nyamwamba&#39;s flooding and the lack of
                    educational facilities in certain areas, hindering
                    residents&#39; competitiveness in the job market.
                  </p>
                  <p>
                    The fabric of the Rwenzori region is further strained by
                    tribal conflicts and land disputes, ignited by ADF attacks
                    that intensify the region&#39;s destabilization, fostering
                    an environment rife with insecurity.
                  </p>

                  <p>
                    Tragically, these conflicts result in the loss of parents
                    who are essential pillars of support and nurturance for the
                    younger generation, endangering the future prospects of the
                    world&#39;s children.
                  </p>
                  <p>
                    Mother of Hope Foundation Uganda&#39;s raison extends beyond
                    merely highlighting these complex challenges. It endeavors
                    to marshal resources, awareness, and direct interventions to
                    confront them head-on. By addressing these multifaceted
                    issues, the Foundation not only uplifts the immediate
                    community but also resonates as a resounding call to action
                    for the global community, invoking a shared responsibility
                    to drive positive transformation and forge a brighter
                    collective future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Vision />

        <OurTeam />
      </main>

      <Footer />
    </div>
  );
}
