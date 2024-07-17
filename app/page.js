import Blog from "@/components/blog";
import ChatWidget from "@/components/chat";
import Cores from "@/components/cores";
// import Featured from "@/components/featured";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import Component from "@/components/we-are";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Component />
      {/* <Featured /> */}
      <Separator />
      <WhatWeDo />
      <Blog />
      <Cores />
      <Gallery />
      <Footer />
      <ChatWidget />
    </main>
  );
}
