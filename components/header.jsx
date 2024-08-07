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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SearchCommand from "./search-command";
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

        <div className="hidden md:flex items-center gap-10 font-semibold flex-1 capitalize">
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
          <SearchCommand />
          <Button
            className={`font-bold rounded bg-green-600 hover:bg-green-800  text-base md:text-lg transition-colors h-9 px-3 sm:px-5 md:h-11 md:px-8 flex items-center gap-2 text-white ${
              user && "hidden md:flex"
            }`}
          >
            <FaHeart className="text-white animate-heart-pump" />
            Donate
          </Button>

          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-12 w-12 rounded-full">
                  <AvatarImage src={user.image || "/placeholder-user.jpg"} />
                  <AvatarFallback className="font-bold">
                    {user.fullname[0]}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={5} className="w-24">
                <DropdownMenuLabel>{user.fullname}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link className="w-full" href="/profile">
                    Profile
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link className="w-full" href="/dashboard">
                    Dashboard
                  </Link>
                </DropdownMenuItem>

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
                    <Button className="font-bold w-full rounded bg-green-600 hover:bg-green-800  text-base md:text-lg transition-colors h-9 px-3 sm:px-5 md:h-11 md:px-8 flex items-center gap-2 text-white ">
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
