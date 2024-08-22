import { getMemberByName } from "@/app/actions/team.action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const TeamMember = async ({ params }) => {
  const name = params.slug.split("-").join(" ");
  const { member } = await getMemberByName(name);
  return (
    <main className="bg-[#f3f3f3]">
      <Header />

      <div className="mb-4 px-4 pt-6 max-w-screen-xl mx-auto ">
        <Breadcrumb className="w-full">
          <BreadcrumbList className="w-full">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/who-we-are">Who-we-are</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="max-w-screen-xl space-y-4 px-4 mx-auto py-12 pt-4 lg:pt-8 lg:py-20">
        <h1 className="text-2xl lg:text-3xl ">{member?.name}</h1>

        <div className="flex flex-col w-full lg:flex-row gap-3 lg:gap-7 justify-start lg:justify-normal">
          <div className="w-full h-full lg:w-[400px] ">
            <div className="relative w-full lg:w-[300px] h-[400px] lg:h-[300px]">
              <Image
                src={member.image}
                alt={`Profile picture of ${member.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="flex items-center space-x-2 my-3">
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
          </div>

          <p className="leading-relaxed  text-gray-600">{member.about}</p>
        </div>
        <Separator className="my-3" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {member?.education && (
            <div>
              <h1 className="text-xl font-medium space-y-4">Education</h1>

              {member.education.split(",").map((educ, i) => (
                <div key={i} className="text-sm my-3 text-gray-600">
                  {educ}
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {member?.position && (
            <div>
              <h1 className="text-xl font-medium space-y-4">Position</h1>

              <div className="text-sm my-3 text-gray-600">
                {member.position}
              </div>
            </div>
          )}
        </div>

        <div>
          {member?.tels && (
            <div>
              <h1 className="text-xl font-medium space-y-4">Contact</h1>

              {member.tels[0].split(",").map((cont, i) => (
                <div key={i} className="text-sm my-3 text-gray-600">
                  {cont}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TeamMember;

export async function generateMetadata({ params }) {
  const name = params.slug.split("-").join(" ");
  const { member } = await getMemberByName(name);
  return {
    title: `${member.name} | Mother of hope foundation uganda`,
    description: `${member.about}`,
    openGraph: {
      title: `${member.title} `,
      description: `${member.about}`,
      images: [
        {
          url: `${member.image}`,
          width: 800,
          height: 600,
          alt: `${member.name}`,
        },
      ],
    },
  };
}
