import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  Users,
  Leaf,
  DollarSign,
  BookOpen,
  LineChart,
} from "lucide-react";

const opportunitiesData = [
  {
    title: "Community Outreach",
    description:
      "Educate local communities on sustainable farming and economic empowerment.",
    icon: Users,
  },
  {
    title: "Eco-Project Support",
    description:
      "Assist in reforestation, clean energy initiatives, and waste management programs.",
    icon: Leaf,
  },
  {
    title: "Fundraising and Grant Writing",
    description:
      "Help secure resources for our poverty alleviation and conservation projects.",
    icon: DollarSign,
  },
  {
    title: "Skill-Sharing Workshops",
    description:
      "Teach valuable skills to empower individuals economically while promoting environmental stewardship.",
    icon: BookOpen,
  },
  {
    title: "Research and Data Analysis",
    description:
      "Support our efforts with evidence-based insights on poverty-environment connections.",
    icon: LineChart,
  },
];

export default function VolunteerPage() {
  return (
    <main>
      <Header />

      <div className="min-h-screen bg-muted">
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <section className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800">
              Volunteer with Mother of Hope Foundation Uganda
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to combat poverty while preserving our
              environment. Your time and skills can create lasting change!
            </p>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Why Volunteer?
            </h2>
            <div className="grid grid-cols-1  gap-6">
              {[
                "Directly impact communities in need",
                "Contribute to sustainable environmental practices",
                "Gain valuable experience in development work",
                "Be part of a global movement for positive change",
              ].map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <ChevronRight className="text-green-500 mr-2" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">
              Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunitiesData.map((opportunity, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <opportunity.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-green-700">
                      {opportunity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {opportunity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-20 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              How to Apply
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Fill out our online application form</li>
              <li>Attend a virtual information session</li>
              <li>Complete a brief interview with our volunteer coordinator</li>
              <li>Undergo necessary training for your chosen role</li>
            </ol>
            <Button className="mt-8 bg-green-600 hover:bg-green-700">
              Start Application
            </Button>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">
              Requirements
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {[
                  "Passion for social and environmental causes",
                  "Commitment to 10 hours/week for at least 3 months",
                  "Relevant skills or willingness to learn",
                  "Access to a computer and reliable internet connection",
                ].map((req, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              {` Have questions? We're here to help!`}
            </p>
            <p className="text-gray-800 font-semibold">
              Email: volunteer@ecopovertysolutions.org
            </p>
            <p className="text-gray-800 font-semibold">Phone: (555) 123-4567</p>
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
              Get in Touch
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
}
