import { Handshake } from "lucide-react";
import React from "react";

const activities = [
  {
    title: "Community Research",
    description:
      "We do believe that through targeted awareness campaigns and community education, we can significantly reduce instances of domestic violence, child homelessness, family abandonment, and gender-based violence.",
    icon: <Handshake className="w-8 h-8" />,
  },
  {
    title: "Education Support",
    description:
      "We prioritize education and skill development to transform community mindsets in Nyamwamba Division. The area faces educational challenges due to flooding, low value placed on schooling, domestic issues, child labor in sand mining, neglect, and poverty.",
  },
  {
    title: "Environmental Conservation",
    description:
      "Mother of Hope Foundation Uganda leads local environmental conservation efforts, engaging the community in tree planting, particularly bamboo and indigenous species along Nyamwamba River, to improve water catchment and flood control.",
  },
  {
    title: "Technology and Innovation",
    description:
      "We recognize the importance of modern technology in community development. The organization focuses on training primary and secondary students, as well as teachers, in essential technologies like machine learning, artificial intelligence, IoT, and basic computer and smartphone skills.",
  },
  {
    title: "Health",
    description:
      "Fostering economic growth through entrepreneurship and job creation programs.",
  },
  {
    title: "Housing Solutions",
    description:
      "Providing safe and affordable housing options for those in need.",
  },
];

const WhatWeDo = () => {
  return (
    <section className=" py-16">
      <div className="relative max-w-screen-xl mx-auto px-4 z-10">
        <h2 className="text-4xl font-bold text-center text-gray-950 mb-12">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-lg  border p-3 py-4 md:p-6  shadow-md "
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
