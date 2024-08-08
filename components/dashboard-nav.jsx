"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/donations", label: "Donations" },
  { href: "/dashboard/users", label: "Users" },
  { href: "/dashboard/events", label: "Events" },
  { href: "/dashboard/blog", label: "Blog" },
  { href: "/dashboard/contacts", label: "Contacts" },
  { href: "/dashboard/volunteers", label: "Volunteers" },
  { href: "/dashboard/partners", label: "Partners" },
  { href: "/dashboard/gallery", label: "Gallery" },
];

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto max-w-screen-xl px-4 lg:px-0">
      <ul className="flex items-center gap-6 overflow-x-auto lg:overflow-hidden py-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-xs py-2 md:text-sm ${
                pathname === item.href
                  ? "font-bold border-b-2 border-b-black"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardNav;
