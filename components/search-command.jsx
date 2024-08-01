"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { getEvents } from "@/app/actions/event.action";
import { getPosts } from "@/app/actions/blog.action";

const searchItems = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Where We Work", href: "/where-we-work" },
  { name: "How to Help", href: "/how-to-help" },
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const SearchCommand = ({ ...props }) => {
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
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "relative h-8 w-8 md:h-9 md:w-9 justify-center rounded-full"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="w-5 md:w-6 h-5 md:h-6" />
      </Button>
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

export default SearchCommand;
