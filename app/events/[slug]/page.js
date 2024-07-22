import { getEventBySlug } from "@/app/actions/event.action";
import ChatWidget from "@/components/chat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Clock, LocateIcon } from "lucide-react";
import Volunteer from "./volunteer";
import OtherEvents from "./other";

const SingleEvent = async ({ params }) => {
  const { event } = await getEventBySlug(params.slug);

  return (
    <main>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0">
        <div className="mx-auto   my-6 flex flex-col lg:flex-row gap-8">
          <div className="relative px-4 py-8  border rounded-lg w-full lg:w-7/12 ">
            <h1 className="text-2xl md:text-3xl font-medium">{event.title}</h1>
            <p className="text-muted-foreground my-2">{event.description}</p>

            <p className="text-gray-600 mb-2 flex items-center gap-2">
              {" "}
              <Clock className="w-4 h-4" />
              {event.startTime} - <span>{event.endTime}</span>
            </p>
            <p className="text-gray-600 flex items-center gap-2 mb-4">
              <LocateIcon className="w-4 h-4" /> {event.location}
            </p>
            <Badge className="bg-muted hover:bg-muted">{event.status}</Badge>

            <div className="px-4 py-6 flex-1  border rounded-lg min-h-44 mt-8">
              <Volunteer id={event._id} />
            </div>
          </div>
          <div className="px-4 py-6 w-full lg:w-5/12  border rounded-lg min-h-44">
            <OtherEvents id={event._id} />
          </div>
        </div>
      </div>
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default SingleEvent;

export async function generateMetadata({ params }) {
  const { event } = await getEventBySlug(params.slug);
  return {
    title: `${event.title} | Mother of hope foundation uganda`,
    description: `${event.description}`,
    openGraph: {
      title: `${event.title} `,
      description: `${event.description}`,
    },
  };
}
