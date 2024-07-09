import { AlignLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaHeart } from "react-icons/fa";
const Header = () => {
  return (
    <header className="h-24 border-b flex items-center justify-center bg-white sticky top-0 right-0 left-0 z-50">
      <nav className="w-full mx-auto flex items-center justify-between gap-8 md:gap-16 max-w-screen-xl px-4 lg:px-0">
        <div className="flex-shrink-0 mr-8">
          {/* <img src="/logo.png" alt="MOHF Logo" width={100} height={50} /> */}
          <h1 className="text-xl md:text-2xl font-bold">
            <Link href="/" aria-label="MOHF Home">
              MOHFU
            </Link>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 uppercase font-semibold flex-1">
          <Link
            href="/who-we-are"
            className="hover:text-rose-600 transition-colors"
          >
            Who we are
          </Link>
          <Link
            href="/what-we-do"
            className="hover:text-rose-600 transition-colors"
          >
            What we do
          </Link>
          <Link
            href="/where-we-work"
            className="hover:text-rose-600 hidden lg:block transition-colors"
          >
            Where we work
          </Link>
          <Link
            href="/how-to-help"
            className="hover:text-rose-600 hidden lg:block transition-colors"
          >
            How to help
          </Link>
        </div>

        <div className="flex gap-4   items-center  md:gap-6 ml-auto">
          <Search className="w-5 md:w-6 h-5 md:h-6" />
          <Button className="font-bold bg-green-600 hover:bg-green-800 rounded-none text-base md:text-lg transition-colors h-10 px-4 sm:px-5 md:h-11 md:px-8 flex items-center gap-2">
            <FaHeart className="text-white animate-heart-pump" />
            Donate
          </Button>
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="w-6 md:w-7 h-6 md:h-7 lg:hidden ml-auto cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex  flex-col  gap-6 uppercase font-semibold mt-6">
                <Link
                  href="/who-we-are"
                  className="hover:text-rose-600 transition-colors"
                >
                  Who we are
                </Link>
                <Link
                  href="/what-we-do"
                  className="hover:text-rose-600 transition-colors"
                >
                  What we do
                </Link>
                <Link
                  href="/where-we-work"
                  className="hover:text-rose-600 transition-colors"
                >
                  Where we work
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  How to help
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  Our Partners
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-auto bottom-0">
                <img src="./logo.svg" className="w-36 h-36" />
                <p className="text-sm text-gray-500 mt-2">
                  © {new Date().getFullYear()} Mother of Hope Foundation Uganda.
                  All rights reserved.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
