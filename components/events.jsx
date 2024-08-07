import { getHomeEvents } from "@/app/actions/event.action";
import { Clock, LocateIcon } from "lucide-react";
import Link from "next/link";

const UpcomingEvents = async () => {
  const events = await getHomeEvents();
  return (
    <>
      {events && events.length > 0 && (
        <section className="bg-muted rounded-t-[2.5rem] pt-12 pb-32">
          <div className="mx-auto px-4 lg:px-0 max-w-screen-xl">
            <h1 className="font-bold text-center text-3xl text-gray-800 md:text-4xl mb-8">
              Upcoming Events
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
              {events.map((event) => (
                <Link
                  href={`/events/${event._id}`}
                  key={event._id}
                  className="border bg-white border-gray-200 rounded-3xl overflow-hidden shadow-sm"
                >
                  <div className="bg-[#3cdd8c] text-white py-4 text-center">
                    <span className=" font-bold text-base">
                      {new Intl.DateTimeFormat("en-US", {
                        day: "2-digit",
                        month: "long",
                      }).format(new Date(event.date))}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-semibold text-base mb-2">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 mb-2 flex items-center gap-2">
                      {" "}
                      <Clock className="w-4 h-4" />
                      {event.startTime} - <span>{event.endTime}</span>
                    </p>
                    <p className="text-gray-600 mb-4 flex items-center gap-2">
                      <LocateIcon className="w-4 h-4" /> {event.location}
                    </p>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UpcomingEvents;
