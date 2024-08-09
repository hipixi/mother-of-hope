import { getPosts } from "./actions/blog.action";
import { getAllEvents } from "./actions/event.action";

export default async function sitemap() {
  const events = await getAllEvents();
  const posts = await getPosts();
  return [
    {
      url: "https://www.motherofhopefoundationuganda.org/",
      lastModified: new Date(),
    },
    {
      url: "https://www.motherofhopefoundationuganda.org/login",
      lastModified: new Date(),
    },
    {
      url: "https://www.motherofhopefoundationuganda.org/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.motherofhopefoundationuganda.org/blog",
      lastModified: new Date(),
    },
    {
      url: "https://www.motherofhopefoundationuganda.org/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://www.motherofhopefoundationuganda.org/get-involved/partner",
      lastModified: new Date(),
    },
    {
      url: "https://www.motherofhopefoundationuganda.org/get-involved/volunteer",
      lastModified: new Date(),
    },

    ...events.map((event) => ({
      url: `https://www.motherofhopefoundationuganda.org/events/${event._id}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `https://www.motherofhopefoundationuganda.org/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
