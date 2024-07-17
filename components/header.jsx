import { AlignLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaHeart } from "react-icons/fa";
import { getUser } from "@/app/actions/get-user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SignOut from "./signout";
import { signOut } from "@/app/actions/auth.action";
const Header = async () => {
  const user = await getUser();
  return (
    <header className="h-24 border-b flex items-center justify-center bg-white sticky top-0 right-0 left-0 z-50">
      <nav className="w-full mx-auto flex items-center justify-between  md:gap-16 max-w-screen-xl px-4 lg:px-0">
        <div className="flex-shrink-0 mr-8">
          <Link href="/">
            <img src="/logo.svg" alt="MOHF Logo" className="w-24 md:h-24" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10 font-semibold flex-1">
          <Link
            href="/who-we-are"
            className="hover:text-rose-600 transition-colors"
          >
            who we are
          </Link>
          <Link
            href="/what-we-do"
            className="hover:text-rose-600 transition-colors"
          >
            what we do
          </Link>
          <Link
            href="/where-we-work"
            className="hover:text-rose-600 hidden lg:block transition-colors"
          >
            where we work
          </Link>
          <Link
            href="/how-to-help"
            className="hover:text-rose-600 hidden lg:block transition-colors"
          >
            how to help
          </Link>
        </div>

        <div className="flex gap-4   items-center  md:gap-6 ml-auto">
          <Search className="w-5 md:w-6 h-5 md:h-6" />
          <Button
            className={`font-bold bg-green-600 rounded hover:bg-green-800 text-base md:text-lg transition-colors h-9 px-3 sm:px-5 md:h-11 md:px-8 flex items-center gap-2 text-white ${
              user && "hidden md:flex"
            }`}
          >
            <FaHeart className="text-white animate-heart-pump" />
            Donate
          </Button>

          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="w-12 h-12 bg-yellow-400 rounded-full text-base md:text-lg font-bold justify-center items-center flex uppercase">
                  {user.fullname.split(" ")[0][0]}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={5} className="w-24">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>Users</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/dashboard/gallery">
                    Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="w-full" href="/dashboard/blog">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Events</DropdownMenuItem>
                <DropdownMenuItem>Contacts</DropdownMenuItem>
                <DropdownMenuItem>Emails</DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOut signout={signOut} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="w-6 md:w-7 h-6 md:h-7  ml-auto cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="flex  justify-center flex-col">
              <div className="flex  flex-col text-sm  gap-4 mt-6">
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
                  Wow to help
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-rose-600  transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  Our partners
                </Link>
                <Link
                  href="/gallery"
                  className="hover:text-rose-600  transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/how-to-help"
                  className="hover:text-rose-600  transition-colors"
                >
                  Contact us
                </Link>
              </div>

              <div className="mt-auto bottom-0">
                {user ? (
                  <>
                    <Button className="font-bold w-full bg-green-600 hover:bg-green-800 rounded text-base md:text-lg transition-colors h-9 px-3 sm:px-5 md:h-11 md:px-8 flex items-center gap-2 text-white ">
                      <FaHeart className="text-white animate-heart-pump" />
                      Donate
                    </Button>
                  </>
                ) : (
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      {" "}
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
