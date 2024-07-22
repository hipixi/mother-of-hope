import { getOtherEvents } from "@/app/actions/event.action";
import { Clock, LocateIcon } from "lucide-react";
import Link from "next/link";

const OtherEvents = async ({ id }) => {
  const events = await getOtherEvents(id);
  return (
    <>
      <h2 className="font-semibold">Other Events</h2>

      <div className="flex flex-col my-3 gap-4">
        {events.map((event) => (
          <Link
            href={`/events/${event._id}`}
            key={event._id}
            className="border bg-white border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="bg-slate-100 py-4 text-center">
              <span className=" font-bold text-sm">
                {new Intl.DateTimeFormat("en-US", {
                  day: "2-digit",
                  month: "long",
                }).format(new Date(event.date))}
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-sm mb-2">{event.title}</h2>
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
    </>
  );
};

export default OtherEvents;
