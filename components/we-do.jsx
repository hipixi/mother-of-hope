import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const activities = [
  {
    title: "Community Research",
  },
  {
    title: "Education Support",
  },
  {
    title: "Environmental Conservation",
  },
  {
    title: "Technology and Innovation",
  },
  {
    title: "Health",
  },
  {
    title: "Human Rights and Advocacy",
  },
];

const WeDo = () => {
  return (
    <section className=" bg-white py-16 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What We Do
          </h1>
          <p className="mt-3 text-xl text-gray-800 sm:mt-2">
            Our initiatives to create positive change in the community
          </p>
        </div>

        <Separator className="my-3 lg:hidden" />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {activities.map((acc) => (
            <div
              className="font-extrabold shadow h-16 flex items-center justify-between text-sky-600 bg-white rounded-lg border px-4"
              key={acc.title}
            >
              <h3>{acc.title}</h3>
              <ArrowRight className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeDo;
