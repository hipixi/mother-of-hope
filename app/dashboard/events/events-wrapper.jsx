"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AddEvent from "./add-event";
import EventFilterSwitcher from "./filter-switcher";
import { getStatus } from "./event-status";

export default function EventsWrapper({ events }) {
  const [filter, setFilter] = useState("Upcoming");

  const filteredEvents = useMemo(() => {
    const now = new Date();
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      if (filter === "Upcoming") {
        return eventDate > now;
      } else if (filter === "Completed") {
        return eventDate < now;
      } else if (filter === "Ongoing") {
        const eventEndDate = new Date(event.endDate);
        return eventDate <= now && eventEndDate >= now;
      }
      return true;
    });
  }, [events, filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-background  py-4">
        <EventFilterSwitcher
          isCollapsed={false}
          onFilterChange={handleFilterChange}
        />
        <div>
          <AddEvent />
        </div>
      </div>
      <div className="flex-1 overflow-auto border rounded-md my-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs lg:text-sm">Event</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="hidden lg:table-cell">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/dashboard/events/${event._id}`}
                    prefetch={false}
                  >
                    {event.title}
                  </Link>
                </TableCell>
                <TableCell className="text-xs lg:text-sm">
                  {new Intl.DateTimeFormat("en-UK", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }).format(new Date(event.date))}
                </TableCell>

                <TableCell className="text-left hidden lg:table-cell">
                  <Badge
                    variant={
                      event.status === "upcoming"
                        ? "secondary"
                        : event.status === "ongoing"
                        ? "primary"
                        : "outline"
                    }
                  >
                    {getStatus(event)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
