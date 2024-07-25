import Header from "@/components/header";
import { Separator } from "@/components/ui/separator";
import WhyVolunteer from "../get-involved/volunteer/why-volunteer";
import Opportunity from "../get-involved/volunteer/opportunity";
import Requirements from "../get-involved/volunteer/requirements";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat";
import FormVolunteer from "../get-involved/volunteer/form-volunteer";
import Image from "next/image";
import Link from "next/link";
import ScrollLink from "../get-involved/volunteer/scrolllink";

export default function VolunteerPage() {
  return (
    <main>
      <Header />

      <div className="min-h-screen bg-muted">
        <div className=" px-4 py-12">
          <section className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8 mb-16">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                  Make a Difference:
                  <br />
                  <span className="text-green-600">
                    Join Our Volunteer Program
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Empower communities and preserve our environment. Your skills
                  and dedication can create lasting positive change!
                </p>
                <ScrollLink
                  href="#volunteer-form"
                  className="inline-block bg-green-600 text-white font-semibold py-2 md:py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-green-700 hover:shadow-lg"
                >
                  Apply Now
                </ScrollLink>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square max-w-[600px] max-h-[600px] mx-auto">
                  <Image
                    width={600}
                    height={600}
                    alt="Volunteers working together"
                    src="/volunteer-hero.svg"
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          <h2 className="text-3xl font-semibold mb-8 text-center">FAQS</h2>

          <WhyVolunteer />
          <Opportunity />
          <Requirements />

          <Separator className="my-12" />

          <section className="max-w-3xl mx-auto" id="volunteer-form">
            <FormVolunteer />
          </section>
        </div>
      </div>

      <Footer />
      <ChatWidget />
    </main>
  );
}
