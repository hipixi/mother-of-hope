import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Mr.Eliud Masereka",
    role: "Co-founder & Chairperson Board of Directors",
    description:
      "A conservationist & technology enthusiast with over 5 years experiences.",
    image: "https://i.imgur.com/oHCMVwP.jpeg",
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
    image: "https://i.imgur.com/TMwCewL.jpeg",
    socials: {
      linkedin: "",
      email: "maserekasamky@gmail.com",
    },
  },

  {
    id: 3,
    name: "Ms.Biira Ellen",
    role: "Executive Director",

    image: "https://i.imgur.com/aRezUCT.jpeg",
    socials: {
      linkedin: "",
      email: "ellenbiira2@gmail.com ",
    },
  },
  {
    id: 4,
    name: "Mr.Masereka Geofrey",
    role: "Co-founder & Finance Coordinator",

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

    image: "https://i.imgur.com/FfNZDD3.jpeg",
    socials: {
      linkedin: "https://linkedin.com/in/chrislee",
      email: "sapehomevents@gmail.com ",
    },
  },
];

const OurTeam = () => {
  return (
    <section className="bg-primary rounded-t-[2.5rem] -top-6 relative px-4 py-20 lg:py-32 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <header>
          <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>

          <p className="my-3 text-lg text-center mb-12">
            The wonderful people fighting each day to see a positive impact is
            made in kasese
          </p>
        </header>
        <div className="grid grid-cols-1 gap-14 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="text-center p-6 py-10 bg-[#ffeecc] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mx-auto w-32 h-32 p-2">
                <Image
                  fill
                  className="border object-cover object-right-top rounded-full"
                  src={member.image}
                  alt={`Photo of ${member.name}, ${member.role}`}
                />
              </div>

              <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600 my-2">{member.role}</p>

              <div className="flex items-center justify-center space-x-2">
                {member.socials.email && (
                  <a
                    href={member.socials.linkedin}
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
