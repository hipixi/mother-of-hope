import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
import { getTeam } from "@/app/actions/team.action";

const OurTeam = async () => {
  const teamMembers = await getTeam();
  return (
    <section className="bg-[#3cdd8c] mt-8 rounded-t-[2.5rem] -top-6 relative px-4 py-20 lg:py-32 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <header>
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            Meet Our Team
          </h1>

          <p className="my-3 text-lg lg:text-xl text-center mb-12">
            The wonderful people fighting each day to see a positive impact is
            made in kasese
          </p>
        </header>
        <div className="grid grid-cols-1 gap-14 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member._id}
              className="text-center p-6 py-10 bg-[#f3f3f3] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mx-auto w-32 h-32 p-2">
                <img
                  className="border object-cover object-top rounded-full  w-full h-full"
                  src={member.image}
                  alt={`Photo of ${member.name}, ${member.position}`}
                />
              </div>

              <h3 className="text-xl font-semibold mt-2">
                <Link href={`/team/${member.name.split(" ").join("-")}`}>
                  {member.name}
                </Link>
              </h3>
              <p className="text-gray-600 my-2">
                <Link href={`/team/${member.name.split(" ").join("-")}`}>
                  {member.position}
                </Link>
              </p>

              <div className="flex items-center justify-center space-x-2">
                {member?.linkedin && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={member?.linkedin}
                    className="text-blue-600 hover:text-blue-800"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <FaLinkedin size={27} />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
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
