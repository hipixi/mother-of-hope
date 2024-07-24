import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const UpcomingSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-20 mb-1" />
        <Skeleton className="h-4 w-32" />
      </CardContent>
    </Card>
  );
};

export default UpcomingSkeleton;
