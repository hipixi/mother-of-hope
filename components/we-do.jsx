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
  },
  {
    title: "Education Support",
    desc: "Mother of Hope Foundation Uganda looks at learning and skilling the community members as a very vital role in transforming the mind-set of its citizens.",
    icon: GraduationCap,
  },
  {
    title: "Environmental Conservation",
    desc: "We are planting trees, planting of bamboo and indigenous trees around Nyamwamba to support water catchment and control flooding, control of wastes majorly solid waste",
    icon: Leaf,
  },
  {
    title: "Technology and Innovation",
    desc: "We have embarked on training the members of the communities mostly those studying in primary, secondary, and then primary teachers and secondary teachers who still lack knowledge of using such gadgets.",
    icon: Laptop,
  },
  {
    title: "Health",
    desc: "Together with the community and local authority, we conduct community health sensitization and awareness campaigns to enrich the communities with health related support",
    icon: HeartPulse,
  },
  {
    title: "Human Rights and Advocacy",
    desc: "We have established a platform together with the local authority on how to address issues related to human rights and advocacy for example issues of rampant gender based violence, street children handling",
    icon: Scale,
  },
];

const WeDo = () => {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-16 lg:py-28">
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
              className="bg-white border rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6 space-y-3">
                <div className="bg-sky-100 h-16 mx-auto w-16 rounded-full p-3  flex items-center justify-center">
                  <activity.icon className="h-7 w-7 text-sky-600" />
                </div>
                <div className="flex justify-center text-center items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeDo;
