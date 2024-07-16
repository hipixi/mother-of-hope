import Link from "next/link";
import { Card, CardContent } from "./ui/card";

const BlogPost = ({ title, date, image }) => (
  <Card className="border-slate-300">
    <CardContent className="p-0">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div>
        <h3 className="text-base p-2 font-semibold mb-2">{title}</h3>
        <p className="text-xs p-2 text-muted-foreground font-semibold border-t mb-2">
          {date}
        </p>
      </div>
    </CardContent>
  </Card>
);

const Blog = () => {
  const blogPosts = [
    {
      title: "Community Health Initiative Launches in Nyamwamba",

      date: "July 15, 2024",
      image: "https://live.staticflickr.com/65535/53845976345_a0042aa14d_z.jpg",
    },
    {
      title: "Empowering Girls: Menstrual Health Education Program",

      date: "August 2, 2024",
      image: "https://live.staticflickr.com/65535/53845907289_ed291e27bb_z.jpg",
    },
    {
      title: "MOHFU Partners with Wildlife Conservation Group",

      date: "August 20, 2024",
      image: "https://live.staticflickr.com/65535/53844658942_3c3e43a925_z.jpg",
    },
    {
      title: "Volunteer Spotlight: Meet Our Dedicated Team",
      excerpt:
        "Get to know the passionate individuals driving change in our community through their tireless volunteer work with MOHFU.",
      date: "September 5, 2024",
      image: "https://live.staticflickr.com/65535/53845546466_c16a358444_z.jpg",
      slug: "volunteer-spotlight",
    },
  ];

  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="max-w-screen-xl px-3 md:px-6 lg:px-0 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl w-fit border-yellow-500 border-b-4 text-gray-900 text-center md:text-left font-bold">
            Latest Updates
          </h2>

          <Link
            href="/blog"
            className="font-bold text-sm text-sky-600 border-b border-sky-600"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
