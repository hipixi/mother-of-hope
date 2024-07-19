import Link from "next/link";
import React from "react";

// Custom SVG icons
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

const EducationIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const EnvironmentIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24"></path>
    <path d="M15 9.5L21 3"></path>
    <path d="M11 13V7"></path>
    <path d="M15 13V9"></path>
    <path d="M7 13v-3"></path>
  </svg>
);

const TechnologyIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const HealthIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const HumanRightsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
  </svg>
);

const activities = [
  {
    title: "Community Research",
    description:
      "We do believe that through targeted awareness campaigns and community education, we can significantly reduce instances of domestic violence, child homelessness, family abandonment, and gender-based violence.",
    icon: <CommunityIcon className="w-12 h-12" />,
  },
  {
    title: "Education Support",
    description:
      "We prioritize education and skill development to transform community mindsets in Nyamwamba Division. The area faces educational challenges due to flooding, low value placed on schooling, domestic issues, child labor in sand mining, neglect, and poverty.",
    icon: <EducationIcon className="w-12 h-12" />,
  },
  {
    title: "Environmental Conservation",
    description:
      "Mother of Hope Foundation Uganda leads local environmental conservation efforts, engaging the community in tree planting, particularly bamboo and indigenous species along Nyamwamba River, to improve water catchment and flood control.",
    icon: <EnvironmentIcon className="w-12 h-12" />,
  },
  {
    title: "Technology and Innovation",
    description:
      "We recognize the importance of modern technology in community development. The organization focuses on training primary and secondary students, as well as teachers, in essential technologies like machine learning, artificial intelligence, IoT, and basic computer and smartphone skills.",
    icon: <TechnologyIcon className="w-12 h-12" />,
  },
  {
    title: "Health",
    description:
      "While acknowledging government efforts to build health facilities, we work with local communities and authorities in Nyamwamba Division to address various health challenges through awareness campaigns, aiming to improve community well-being and engagement.",
    icon: <HealthIcon className="w-12 h-12" />,
  },
  {
    title: "Human Rights and Advocacy",
    description:
      "In collaboration with local authorities, we have established a platform to address human rights issues in Nyamwamba, focusing on combating gender-based violence, supporting street children, and providing counseling services.",
    icon: <HumanRightsIcon className="w-12 h-12" />,
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            What We Do
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-teal-600 sm:mt-4">
            Our initiatives to create positive change in the community
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border"
            >
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full">
                    {React.cloneElement(activity.icon, {
                      className: "w-12 h-12 text-teal-600",
                    })}
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/what-we-do/community-research"
                    className="text-teal-600 hover:text-teal-800 font-medium"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
