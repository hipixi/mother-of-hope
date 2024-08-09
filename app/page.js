import Cores from "@/components/cores";
import UpcomingEvents from "@/components/events";
import Footer from "@/components/footer";
import GetInvolved from "@/components/get-involved";
import Happening from "@/components/happening";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import OurTeam from "@/components/team";
import { Separator } from "@/components/ui/separator";
import Vision from "@/components/vision";
import Component from "@/components/we-are";
import WeDo from "@/components/we-do";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="who-we-are">
        <Component />
      </section>
      <Vision />
      <Separator />
      <Happening />
      <Cores />
      <section id="what-we-do">
        <WeDo />
      </section>
      <section id="get-involved">
        <GetInvolved />
      </section>
      <Separator />
      <UpcomingEvents />
      <section id="our-team">
        <OurTeam />
      </section>
      <section id="our-partners">
        <Partners />
      </section>
      <Footer />
    </main>
  );
}
