import { getEventBySlug } from "@/app/actions/event.action";
import { getUser } from "@/app/actions/get-user";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";
import DeleteEvent from "./delete-event";
import EditEvent from "../edit-event";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatus } from "../event-status";

const SingleEvent = async ({ params }) => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const { event } = await getEventBySlug(params.slug);
  return (
    <main className="mx-auto max-w-screen-xl mt-4 px-4 lg:px-0">
      <div className="my-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/events">
                Events Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{event.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="  my-6 flex flex-col lg:flex-row gap-8">
        <div className="relative px-4 py-8  border rounded-lg flex-1 ">
          <h1 className="text-3xl font-medium">{event.title}</h1>
          <p className="text-muted-foreground my-2">{event.description}</p>

          <p className="text-gray-600 mb-2">
            {event.startTime} - <span>{event.endTime}</span>
          </p>
          <p className="text-gray-600 mb-4">{event.location}</p>
          <div className="flex items-center justify-between">
            <Badge className="bg-muted hover:bg-muted">
              {getStatus(event)}
            </Badge>
            <DeleteEvent id={event._id} />
          </div>
          <EditEvent event={event} />
        </div>
        {event.volunteers.length === 0 && (
          <div className="px-4 py-6 flex-1 flex items-center justify-center bg-muted font-medium border rounded-lg min-h-44">
            No volunteers for this event so far
          </div>
        )}
        {event.volunteers.length > 0 && (
          <div className="px-4 py-6 flex-1 font-medium border rounded-lg bg-white shadow-md">
            <h2 className="border-b py-2 text-lg font-semibold">
              Volunteers for the event
            </h2>
            {event.volunteers.map((volunteer) => (
              <div
                key={volunteer._id}
                className="border-b last-of-type:border-b-0 py-4 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600">
                    {volunteer.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium text-lg">{volunteer.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {volunteer.email}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {volunteer.tel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default SingleEvent;
