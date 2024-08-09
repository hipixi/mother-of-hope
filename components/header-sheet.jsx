import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import ScrollLink from "./scroll";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import PopupDonate from "./donate-pop";

const SidebarSheet = ({ user }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignLeft className="w-6 md:w-7 h-6 md:h-7 ml-auto cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left" className="flex justify-center flex-col">
        <div className="flex flex-col text-sm gap-4 mt-6">
          <ScrollLink
            href="#who-we-are"
            className="hover:text-rose-600 transition-colors lg:hidden"
          >
            <SheetClose>Who we are</SheetClose>
          </ScrollLink>
          <ScrollLink
            href="#what-we-do"
            className="hover:text-rose-600 transition-colors lg:hidden"
          >
            <SheetClose>What we do</SheetClose>
          </ScrollLink>
          <ScrollLink
            href="#our-team"
            className="hover:text-rose-600 transition-colors lg:hidden"
          >
            <SheetClose>Our Team</SheetClose>
          </ScrollLink>
          <ScrollLink
            href="#get-involved"
            className="hover:text-rose-600 transition-colors"
          >
            <SheetClose>Get involved</SheetClose>
          </ScrollLink>
          <Link href="/blog" className="hover:text-rose-600 transition-colors">
            Blog
          </Link>
          <ScrollLink
            href="#our-partners"
            className="hover:text-rose-600 transition-colors"
          >
            <SheetClose>Our partners</SheetClose>
          </ScrollLink>
          <Link
            href="/gallery"
            className="hover:text-rose-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="hover:text-rose-600 transition-colors lg:hidden"
          >
            Contact us
          </Link>
        </div>
        <div className="mt-auto bottom-0">
          {user ? (
            <Dialog>
              <DialogTrigger>
                <Button
                  size="lg"
                  className="font-bold w-full rounded bg-green-600 hover:bg-green-800 text-base md:text-lg transition-colors h-9 px-3 sm:px-5 md:h-11 md:px-8 flex items-center gap-2 text-white"
                >
                  <FaHeart className="text-white animate-heart-pump" />
                  Donate
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-center">
                      Help Build a Resilient{" "}
                      <span className="text-rose-600">Kasese</span>
                    </h1>
                  </DialogTitle>
                </DialogHeader>
                <PopupDonate />
              </DialogContent>
            </Dialog>
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
