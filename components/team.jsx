import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Mr. Eliud Masereka",
    role: "Co-founder & Chairperson Board of Directors",
    description:
      "A conservationist & technology enthusiast with over 5 years experiences.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1721983907/builr262ny2qw6ymykop.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      gmail: "maserekaabbot@gmail.com",
    },
  },
  {
    id: 2,
    name: "Mr. Masereka Samson",
    role: "Co-founder & Projects Coordinator",
    description: "Brilliant strategist driving our technological advancements.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1721984335/yglkj7fy31oqm28olptn.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Developer",
    description: "Coding wizard with a passion for clean, efficient solutions.",
    image: "https://placekitten.com/302/302",
    socials: {
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson",
    },
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "UX Designer",
    description: "Creative mind behind our intuitive user experiences.",
    image: "https://placekitten.com/303/303",
    socials: {
      linkedin: "https://linkedin.com/in/emilybrown",
      twitter: "https://twitter.com/emilybrown",
    },
  },
  {
    id: 5,
    name: "Chris Lee",
    role: "Product Manager",
    description: "Expert in transforming ideas into successful products.",
    image: "https://placekitten.com/304/304",
    socials: {
      linkedin: "https://linkedin.com/in/chrislee",
      twitter: "https://twitter.com/chrislee",
    },
  },
  {
    id: 6,
    name: "Sarah Wilson",
    role: "Marketing Specialist",
    description: "Crafting compelling narratives to engage our audience.",
    image: "https://placekitten.com/305/305",
    socials: {
      linkedin: "https://linkedin.com/in/sarahwilson",
      twitter: "https://twitter.com/sarahwilson",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Meet Our Team</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={member.image}
              alt={member.name}
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <p className="text-sm text-gray-500 mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-blue-600" />
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl text-blue-400" />
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-gray-800" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
