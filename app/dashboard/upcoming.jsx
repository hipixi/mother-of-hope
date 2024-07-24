import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { getEvents, getMonthEvents } from "../actions/event.action";

const Upcoming = async () => {
  const allEvents = getEvents();
  const monthEvents = await getMonthEvents();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{(await allEvents).length}</div>
        <p className="text-xs text-muted-foreground">
          +{monthEvents.length} this month
        </p>
      </CardContent>
    </Card>
  );
};

export default Upcoming;
