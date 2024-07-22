"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const statusOptions = [
  { value: "Upcoming", label: "Upcoming" },
  { value: "Ongoing", label: "Ongoing" },
  { value: "Completed", label: "Completed" },
];

export default function EventFilterSwitcher({ isCollapsed, onFilterChange }) {
  const [selectedStatus, setSelectedStatus] = React.useState("Upcoming");

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
    onFilterChange(value);
  };

  return (
    <Select value={selectedStatus} onValueChange={handleStatusChange}>
      <SelectTrigger
        className={cn(
          "flex items-center w-fit gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          isCollapsed &&
            "flex h-7 w-7 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        )}
        aria-label="Select event status filter"
      >
        <SelectValue placeholder="Filter events">
          {
            statusOptions.find((status) => status.value === selectedStatus)
              ?.icon
          }
          <span className={cn("ml-2", isCollapsed && "hidden")}>
            {
              statusOptions.find((status) => status.value === selectedStatus)
                ?.label
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="w-fit">
        {statusOptions.map((status) => (
          <SelectItem key={status.label} value={status.value}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {status.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
