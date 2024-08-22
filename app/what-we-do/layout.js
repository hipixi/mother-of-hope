import Footer from "@/components/footer";
import Header from "@/components/header";

export default function WhatWeDoLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
