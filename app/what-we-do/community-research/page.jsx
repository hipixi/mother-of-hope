import { Button } from "@/components/ui/button";
import React from "react";

const CommunityIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CommunityResearch = () => {
  return (
    <div className="bg-[#fefefe] px-4 lg:px-0 min-h-screen py-12">
      <div className="max-w-4xl py-6 border rounded-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <CommunityIcon className="w-24 h-24 text-teal-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Research
          </h1>
          <p className="text-xl text-gray-600">
            Empowering communities through knowledge and awareness
          </p>
        </div>

        <div className="bg-white border rounded-lg  p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-600 mb-6">
            We believe that through targeted awareness campaigns and community
            education, we can significantly reduce instances of domestic
            violence, child homelessness, family abandonment, and gender-based
            violence.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Focus Areas
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Domestic violence prevention</li>
            <li>Child welfare and protection</li>
            <li>Family support initiatives</li>
            <li>Gender-based violence awareness</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 mb-6">
            Through our community research efforts, we have:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              Conducted 50+ awareness campaigns reaching over 10,000 individuals
            </li>
            <li>
              Reduced reported cases of domestic violence by 30% in target
              communities
            </li>
            <li>
              Established support networks for at-risk families and children
            </li>
            <li>
              Partnered with local authorities to implement community-based
              intervention programs
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-gray-600 mb-6">
            {`We welcome volunteers and partners who share our vision for safer,
            more informed communities. Here's how you can contribute:`}
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Volunteer for our awareness campaigns</li>
            <li>Participate in our community research projects</li>
            <li>Donate to support our educational initiatives</li>
            <li>Spread awareness about our cause on social media</li>
          </ul>

          <div className="mt-8">
            <Button className="font-semibold">
              Contact Us to Get Involved
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityResearch;
