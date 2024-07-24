import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import { getHomeEvents } from "../actions/event.action";
import Link from "next/link";

const Events = async () => {
  const events = await getHomeEvents();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {events?.map((event) => (
            <li key={event._id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-xs text-muted-foreground">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                  }).format(new Date(event.date))}
                </div>
              </div>
              <Link href={`/dashboard/events/${event._id}`}>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Events;
