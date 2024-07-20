import React from "react";
import { Button } from "./ui/button";

const Partners = () => {
  const partners = [
    { id: 1, name: "Tech Innovators Inc.", logo: "/images/partner1.png" },
    { id: 2, name: "Green Earth Foundation", logo: "/images/partner2.png" },
    {
      id: 3,
      name: "Community Builders Association",
      logo: "/images/partner3.png",
    },
    { id: 4, name: "Local Government", logo: "/images/partner4.png" },
    { id: 5, name: "Education First", logo: "/images/partner5.png" },
    { id: 6, name: "Health & Wellness Group", logo: "/images/partner6.png" },
  ];

  return (
    <section className=" py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 lg:px-0 max-w-screen-xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-8 text-center">
          Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {`We're proud to work with these amazing organizations to make a
          difference in our community.`}
        </p>
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-[200px] mx-8">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="font-bold rounded-none">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
