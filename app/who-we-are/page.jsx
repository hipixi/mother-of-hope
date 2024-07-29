import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/header";
import GetInvolved from "@/components/get-involved";
import Footer from "@/components/footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Acme NGO
                </div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Empowering Communities, Transforming Lives
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Acme NGO is dedicated to creating positive and sustainable
                  change in the communities we serve. Through our innovative
                  programs and collaborative approach, we strive to empower
                  individuals, strengthen communities, and transform lives.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Story
                </h2>
                <div className="space-y-3">
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Mother of Hope Foundation Uganda is a Community-Based
                    non-profit organization located in Nyamwamba Division,
                    Kasese Municipality, Uganda. Founded in 2020 as a response
                    to the pressing economic and social challenges faced by the
                    local communities, the foundation strives to enact positive
                    change and holistic transformation for individuals who
                    grapple with economic and social disadvantages. Its very
                    name embodies its aspiration to serve as a beacon of hope,
                    fostering growth, empowerment, and progress within the
                    community.
                  </p>

                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The organization&#39;s commitment extends to leaving a
                    lasting imprint in Kasese by nurturing hope, promoting
                    education, facilitating empowerment, and catalyzing
                    community development. Through its comprehensive approach,
                    unwavering dedication to its mission, vision, and goals, the
                    foundation aims to forge a brighter future for the community
                    it serves.
                  </p>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The foundation&#39;s genesis is rooted in the myriad
                    challenges encountered within the community, with ripple
                    effects that extend to encompass the entire Kasese district
                    and even reverberate globally. Chief among these challenges
                    is the recurring inundation caused by the River Nyamwamba, a
                    formidable disaster that compels people to seek refuge far
                    from their homes. This cycle of flooding erodes soil
                    fertility along the riverbanks, aggravating the specter of
                    food insecurity across the broader Rwenzori sub-region.Flash
                    floods from the hills of Mount Rwenzori in the Busumba
                    region further compound the food security concerns,
                    particularly detrimental given the region&#39;s agrarian
                    reliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To create positive and sustainable change in the communities
                  we serve, empowering individuals and strengthening
                  communities.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Our Values</h3>
                <p className="text-sm text-muted-foreground">
                  Compassion, Integrity, Innovation, Collaboration, and
                  Sustainability.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Our Team</h3>
                <p className="text-sm text-muted-foreground">
                  Our dedicated team of experts, volunteers, and community
                  leaders work tirelessly to make a difference.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-start gap-8 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of passionate individuals is the driving force behind
                our success. Get to know the people who make Acme NGO a
                transformative force in our communities.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">
                    Executive Director
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  John has over 15 years of experience in the non-profit sector,
                  leading transformative initiatives that empower communities.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Sarah Adams</h4>
                  <p className="text-sm text-muted-foreground">
                    Program Manager
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sarah is a passionate advocate for social justice, with a
                  proven track record of designing and implementing impactful
                  community programs.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Michael Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">
                    Volunteer Coordinator
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {` Michael's passion for community engagement and volunteer management has been instrumental in
                  mobilizing our network of dedicated volunteers.`}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">Lisa Wang</h4>
                  <p className="text-sm text-muted-foreground">
                    Fundraising Coordinator
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {`Lisa's expertise in fundraising and donor relations has been crucial in securing the resources needed
                  to sustain and expand our programs.`}
                </p>
              </div>
            </div>
          </div>
        </section>
        <GetInvolved />
      </main>

      <Footer />
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
