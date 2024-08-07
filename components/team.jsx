import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const teamMembers = [
  {
    id: 1,
    name: "Mr.Eliud Masereka",
    role: "Co-founder & Chairperson Board of Directors",
    description:
      "A conservationist & technology enthusiast with over 5 years experiences.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1723021554/builr262ny2qw6ymykop_1_txjoac.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/eliud-masereka-243621129/",
      email: "maserekaabbot@gmail.com",
    },
  },
  {
    id: 2,
    name: "Mr.Masereka Samson",
    role: "Co-founder & Projects Coordinator",
    description: "Brilliant strategist driving our technological advancements.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1721984335/yglkj7fy31oqm28olptn.jpg",
    socials: {
      linkedin: "",
      email: "maserekasamky@gmail.com",
    },
  },

  {
    id: 3,
    name: "Ms.Biira Ellen",
    role: "Executive Director",
    description: "Coding wizard with a passion for clean, efficient solutions.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1723040667/w3sgo2hljwjngqet3w9a.jpg",
    socials: {
      linkedin: "",
      email: "ellenbiira2@gmail.com ",
    },
  },
  {
    id: 4,
    name: "Mr.Masereka Geofrey",
    role: "Co-founder & Finance Coordinator",
    description: "Coding wizard with a passion for clean, efficient solutions.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1723036159/msksvvjstghxeqkr66yi.jpg",
    socials: {
      linkedin: "",
      email: "maserekageofrey81@gmail.com",
    },
  },
  {
    id: 4,
    name: "Ms.Masika Joaquine ",
    role: "Grants & Partnerships Coordinator",
    description: "Creative mind behind our intuitive user experiences.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1723040791/kuurmb02l8iamblriw2u.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/emilybrown",
      email: "https://twitter.com/emilybrown",
    },
  },
  {
    id: 5,
    name: "Mr.Moses Bwambale Sapeho",
    role: "Front Desk Officer",
    description: "Expert in transforming ideas into successful products.",
    image:
      "https://res.cloudinary.com/dop7clqdc/image/upload/v1723036783/odznct9suoljqpdae6bh.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/chrislee",
      email: "sapehomevents@gmail.com ",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="bg-primary rounded-t-[2.5rem] -top-6 relative px-4 py-16 lg:py-28 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <header>
          <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>

          <p className="my-3 text-lg text-center mb-12">
            The wonderful people fighting each day to see a positive impact is
            made in kasese
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="text-center p-6 bg-[#ffeecc] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-32 h-32  object-cover object-top border rounded-full mx-auto mb-4"
                src={member.image}
                alt={`Photo of ${member.name}, ${member.role}`}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.description}</p>
              <div className="flex items-center justify-center space-x-2">
                {member.socials.email && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <FaLinkedin size={27} />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <BiLogoGmail size={27} className="text-red-600" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
