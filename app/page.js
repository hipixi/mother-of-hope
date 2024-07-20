import Blog from "@/components/blog";
import ChatWidget from "@/components/chat";
import Cores from "@/components/cores";
// import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Happening from "@/components/happening";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import Component from "@/components/we-are";
import WeDo from "@/components/we-do";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Component />
      <Happening />
      {/* <Featured /> */}
      <Separator />
      {/* <WhatWeDo /> */}
      {/* <Blog /> */}
      <Cores />
      <WeDo />
      {/* <Gallery /> */}
      <Footer />
      <ChatWidget />
    </main>
  );
}
