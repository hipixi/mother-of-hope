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
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-background.jpg')" }}
          ></div>
          <div className="relative px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="bg-white bg-opacity-80 p-6 rounded-lg">
                <div className="inline-block rounded-lg bg-blue-600 text-white px-3 py-1 text-sm">
                  Mother of Hope Foundation Uganda
                </div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] mt-4">
                  Empowering Communities, Transforming Lives
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl mt-4">
                  We are dedicated to creating positive and sustainable change
                  in the communities we serve. Through our innovative programs
                  and collaborative approach, we strive to empower individuals,
                  strengthen communities, and transform lives.
                </p>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Story
                </h2>
                <div className="space-y-4 max-w-[900px] mx-auto">
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Founded in 2020, Mother of Hope Foundation Uganda is a
                    Community-Based non-profit organization located in Nyamwamba
                    Division, Kasese Municipality, Uganda. We aim to address
                    pressing economic and social challenges faced by local
                    communities.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our commitment extends to leaving a lasting imprint in
                    Kasese by nurturing hope, promoting education, facilitating
                    empowerment, and catalyzing community development.
                  </p>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We tackle challenges such as flooding from River Nyamwamba,
                    soil erosion, and food insecurity in the Rwenzori
                    sub-region. Our holistic approach aims to create a brighter
                    future for the communities we serve.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-3 md:gap-12 lg:max-w-5xl">
              {["Our Mission", "Our Values", "Our Team"].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold mb-2">{item}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item === "Our Mission"
                      ? "To create positive and sustainable change in the communities we serve, empowering individuals and strengthening communities."
                      : item === "Our Values"
                      ? "Compassion, Integrity, Innovation, Collaboration, and Sustainability."
                      : "Our dedicated team of experts, volunteers, and community leaders work tirelessly to make a difference."}
                  </p>
                </div>
              ))}
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
                our success. Get to know the people who make Mother of Hope
                Foundation Uganda a transformative force in our communities.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "John Doe", role: "Executive Director" },
                { name: "Sarah Adams", role: "Program Manager" },
                { name: "Michael Rodriguez", role: "Volunteer Coordinator" },
                { name: "Lisa Wang", role: "Fundraising Coordinator" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-4 text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: "1000+", description: "Individuals Empowered" },
                { metric: "50+", description: "Community Projects" },
                { metric: "5", description: "Years of Service" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GetInvolved />
      </main>

      <Footer />
    </div>
  );
}
