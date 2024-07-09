import { Handshake, LucidePalmtree } from "lucide-react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaComputer, FaPeopleGroup } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";

const activities = [
  {
    title: "Community Research",
    description:
      "We do believe that through targeted awareness campaigns and community education, we can significantly reduce instances of domestic violence, child homelessness, family abandonment, and gender-based violence.",
    icon: <Handshake className="w-8 h-8 text-yellow-700" />,
  },
  {
    title: "Education Support",
    description:
      "We prioritize education and skill development to transform community mindsets in Nyamwamba Division. The area faces educational challenges due to flooding, low value placed on schooling, domestic issues, child labor in sand mining, neglect, and poverty.",
    icon: <FaBookOpen className="w-9 h-9 text-blue-700" />,
  },
  {
    title: "Environmental Conservation",
    description:
      "Mother of Hope Foundation Uganda leads local environmental conservation efforts, engaging the community in tree planting, particularly bamboo and indigenous species along Nyamwamba River, to improve water catchment and flood control.",
    icon: <LucidePalmtree className="w-9 h-9 text-green-700" />,
  },
  {
    title: "Technology and Innovation",
    description:
      "We recognize the importance of modern technology in community development. The organization focuses on training primary and secondary students, as well as teachers, in essential technologies like machine learning, artificial intelligence, IoT, and basic computer and smartphone skills.",
    icon: <FaComputer className="w-9 h-9" />,
  },
  {
    title: "Health",
    description:
      "While acknowledging government efforts to build health facilities,we works with local communities and authorities in Nyamwamba Division to address various health challenges through awareness campaigns, aiming to improve community well-being and engagement.",
    icon: <GiHealthNormal className="w-9 h-9 text-rose-600" />,
  },
  {
    title: "Human rights and Advocacy",
    description:
      "In collaboration with local authorities,we have established a platform to address human rights issues in Nyamwamba, focusing on combating gender-based violence, supporting street children, and providing counseling services.",
    icon: <FaPeopleGroup className="w-9 h-9 text-green-700" />,
  },
];

const WhatWeDo = () => {
  return (
    <section className=" py-16">
      <div className="relative max-w-screen-xl mx-auto px-4 z-10">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-3xl md:text-3xl text-gray-900 text-center mb-8">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg ring-1 ring-gray-600  px-4 py-6 md:p-6 "
            >
              <div className="bg-gray-200 flex items-center justify-center rounded-full w-16 h-16 mx-auto my-4">
                {activity?.icon}
              </div>
              <h3 className="text-2xl text-center text-gray-800 mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
