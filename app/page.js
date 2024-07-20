import ChatWidget from "@/components/chat";
import Cores from "@/components/cores";
import Footer from "@/components/footer";
import Happening from "@/components/happening";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import Component from "@/components/we-are";
import WeDo from "@/components/we-do";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Component />
      <Happening />
      <Separator />
      <Cores />
      <WeDo />
      <Footer />
      <ChatWidget />
    </main>
  );
}
