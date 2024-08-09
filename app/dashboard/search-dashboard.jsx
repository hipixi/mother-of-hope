"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { getEvents } from "@/app/actions/event.action";
import { getPosts } from "@/app/actions/blog.action";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const searchItems = [
  { name: "Home", href: "/" },
  { name: "Overview", href: "/dashboard" },
  { name: "Users", href: "/dashboard/users" },
  { name: "Events", href: "/dashboard/events" },
  { name: "Blog", href: "/dashboard/blog" },
  { name: "Contacts", href: "/dashboard/contacts" },
  { name: "Volunteers", href: "/dashboard/volunteers" },
  { name: "Partners", href: "/dashboard/partners" },
  { name: "Gallery", href: "/dashboard/gallery" },
];

const SearchDashboard = ({ ...props }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const down = (e) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command) => {
    setOpen(false);
    command();
  }, []);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const evnts = await getEvents();
      setEvents(evnts);
    };

    fetchEvents();
  }, []);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const pts = await getPosts();
      setPosts(pts);
    };

    fetchPosts();
  }, []);
  return (
    <>
      <div
        className="w-52 h-7 cursor-pointer sm:w-64 md:w-80 rounded bg-muted px-3 text-xs flex items-center"
        onClick={() => setOpen(true)}
        {...props}
      >
        search...
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                value={item.name}
                onSelect={() => {
                  runCommand(() => router.push(item.href));
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Events">
            {events?.map((item) => (
              <CommandItem
                key={item._id}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(`/events/${item._id}`));
                }}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Blog">
            {posts?.map((item) => (
              <CommandItem
                key={item._id}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(`/blog/${item.slug}`));
                }}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchDashboard;
