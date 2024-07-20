import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section className=" bg-gray-100 py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            What We Do
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-teal-600 sm:mt-4">
            Our initiatives to create positive change in the community
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {activities.map((acc) => (
            <div
              className="font-extrabold shadow h-16 flex items-center justify-between text-sky-600 bg-white rounded px-4"
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
