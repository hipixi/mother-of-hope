import {
  Users,
  GraduationCap,
  Leaf,
  Laptop,
  HeartPulse,
  Scale,
} from "lucide-react";
import { Separator } from "./ui/separator";

const activities = [
  {
    title: "Community Research",
    desc: "We are taking a lead in engaging the community through different interventions like campaigns, sensitization and research together with the community members and the local authority",
    icon: Users,
    color: "bg-[#fdbc24]",
  },
  {
    title: "Education Support",
    desc: "Mother of Hope Foundation Uganda looks at learning and skilling the community members as a very vital role in transforming the mind-set of its citizens.",
    icon: GraduationCap,
    color: "bg-[#3a2234]",
  },
  {
    title: "Environmental Conservation",
    desc: "We are planting trees, planting of bamboo and indigenous trees around Nyamwamba to support water catchment and control flooding, control of wastes majorly solid waste",
    icon: Leaf,
    color: "bg-[#3cdd8c]",
  },
  {
    title: "Technology and Innovation",
    desc: "We have embarked on training the members of the communities mostly those studying in primary, secondary, and then primary teachers and secondary teachers who still lack knowledge of using such gadgets.",
    icon: Laptop,
    color: "bg-[#3514f3]",
  },
  {
    title: "Health",
    desc: "Together with the community and local authority, we conduct community health sensitization and awareness campaigns to enrich the communities with health related support",
    icon: HeartPulse,
    color: "bg-[#f785e4]",
  },
  {
    title: "Human Rights and Advocacy",
    desc: "We have established a platform together with the local authority on how to address issues related to human rights and advocacy for example issues of rampant gender based violence, street children handling",
    icon: Scale,
    color: "bg-rose-600",
  },
];

const WeDo = () => {
  return (
    <section className="bg-[#f3f3f3] rounded-t-[2.5rem] relative -top-8 py-16 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            What We Do
          </h1>
          <p className="mt-3 text-xl text-gray-600 max-w-2xl mx-auto">
            Our initiatives to create positive change in the community
          </p>
          <Separator className="mt-8 " />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`${activity.color} rounded-[3.5rem] shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white `}
            >
              <div className="p-6 py-8 flex flex-col items-center justify-center space-y-3">
                <activity.icon className="h-20 w-20 text-white" />
                <div className="flex justify-center text-center items-center mb-4">
                  <h3
                    className={`text-xl  text-gray-800 font-semibold ${
                      index == 1 && "text-slate-200"
                    }`}
                  >
                    {activity.title}
                  </h3>
                </div>
                {/* <p className="text-gray-100 mb-4">{activity.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeDo;
