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
            <Badge className="bg-muted hover:bg-muted">{event.status}</Badge>
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
          <div className="px-4 py-6 flex-1 font-medium border rounded-lg">
            <h2 className="px-3">Volunteers for the event</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs lg:text-sm">Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="">Tel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {event.volunteers.map((volu) => (
                  <TableRow key={volu._id}>
                    <TableCell className="text-sm lg:text-sm">
                      {volu.name}
                    </TableCell>
                    <TableCell className="text-xs lg:text-sm">
                      {volu.email}
                    </TableCell>

                    <TableCell className="text-xs lg:text-sm">
                      {volu.tel}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </main>
  );
};

export default SingleEvent;
