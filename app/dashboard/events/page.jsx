import EventsWrapper from "./events-wrapper";
import { getEvents } from "@/app/actions/event.action";

export const metadata = {
  title: "Events | Dashboard",
};

export default async function Events() {
  const events = await getEvents();

  return (
    <main className="flex max-w-screen-xl mx-auto px-4 flex-col h-full">
      <EventsWrapper events={events} />
    </main>
  );
}
