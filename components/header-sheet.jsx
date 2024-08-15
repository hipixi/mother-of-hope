import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import ScrollLink from "./scroll";

import { Button } from "./ui/button";

const SidebarSheet = ({ user }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignLeft className="w-6 md:w-7 h-6 md:h-7 lg:hidden ml-auto cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="flex justify-center flex-col">
        <div className="flex flex-col text-sm gap-4 mt-6">
          <Link
            href="/who-we-are"
            className="hover:text-rose-600 transition-colors flex items-start  w-full"
          >
            who we are
          </Link>
          <ScrollLink
            href="#what-we-do"
            className="hover:text-rose-600 transition-colors  w-full"
          >
            <SheetClose className="w-full flex items-start justify-start">
              What we do
            </SheetClose>
          </ScrollLink>

          <ScrollLink
            href="#get-involved"
            className="hover:text-rose-600 transition-colors w-full flex items-start justify-start"
          >
            <SheetClose className="w-full flex items-start justify-start">
              Get involved
            </SheetClose>
          </ScrollLink>
          <Link href="/blog" className="hover:text-rose-600 transition-colors">
            Blog
          </Link>
          <ScrollLink
            href="#our-partners"
            className="hover:text-rose-600 transition-colors w-full"
          >
            <SheetClose className="w-full flex items-start justify-start">
              Our partners
            </SheetClose>
          </ScrollLink>
          <Link
            href="/gallery"
            className="hover:text-rose-600 transition-colors w-full"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-rose-600 transition-colors "
          >
            Contact us
          </Link>
        </div>
        <div className="mt-auto bottom-0">
          {user ? (
            <></>
          ) : (
            <Link href="/login">
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarSheet;
