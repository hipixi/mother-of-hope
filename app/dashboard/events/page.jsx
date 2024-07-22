import { getUser } from "@/app/actions/get-user";
import EventsWrapper from "./events-wrapper";
import { redirect } from "next/navigation";
import { getEvents } from "@/app/actions/event.action";

export const metadata = {
  title: "Events | Dashboard",
};

export default async function Events() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const events = await getEvents();

  return (
    <main className="flex max-w-screen-xl mx-auto px-4 lg:px-0 flex-col h-full">
      <EventsWrapper events={events} />
    </main>
  );
}
