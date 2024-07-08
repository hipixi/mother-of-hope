import Cores from "@/components/cores";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Values from "@/components/values";
import Component from "@/components/we-are";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Component />
      <WhatWeDo />
      <Cores />
      {/* <Values /> */}
    </main>
  );
}
