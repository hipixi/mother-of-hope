import Link from "next/link";
import { Button } from "./ui/button";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PopupDonate from "./donate-pop";
import SidebarSheet from "./header-sheet";
import ScrollLink from "./scroll";
const Header = async () => {
  const user = await getUser();
  return (
    <header className="h-24 border-b flex items-center justify-center bg-white sticky top-0 right-0 left-0 z-50">
      <nav className="w-full mx-auto flex items-center justify-between  md:gap-4 max-w-screen-xl px-4">
        <div className="flex-shrink-0 mr-8">
          <Link href="/">
            <img src="/logo.svg" alt="MOHF Logo" className="w-24 md:h-24" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 flex-1 capitalize">
          <Link
            href="/who-we-are"
            className="hover:text-rose-600 transition-colors"
          >
            who we are
          </Link>
          <ScrollLink
            href="#what-we-do"
            className="hover:text-rose-600 transition-colors"
          >
            what we do
          </ScrollLink>

          <ScrollLink
            href="#get-involved"
            className="hover:text-rose-600  transition-colors  "
          >
            Get involved
          </ScrollLink>
          <Link href="/blog" className="hover:text-rose-600 transition-colors">
            Blog
          </Link>
          <Link
            href="/gallery"
            className="hover:text-rose-600 transition-colors"
          >
            Gallery
          </Link>

          <ScrollLink
            href="#our-partners"
            className="hover:text-rose-600 transition-colors"
          >
            Our partners
          </ScrollLink>

          <Link
            href="/contact"
            className="hover:text-rose-600  transition-colors"
          >
            contact us
          </Link>
        </div>

        <div className="flex gap-4   items-center  md:gap-6 ml-auto">
          <SearchCommand />

          <Dialog>
            <DialogTrigger>
              <Button
                size="lg"
                className={`font-bold rounded-none bg-green-600 hover:bg-green-800  text-base md:text-lg transition-colors h-10 lg:h-11 px-4 sm:px-5 md:h-11 md:px-8 flex items-center gap-2 text-white ${
                  user && "hidden md:flex"
                }`}
              >
                Donate
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold  text-center ">
                    Help Build a Resilient{" "}
                    <span className="text-rose-600">Kasese</span>
                  </h1>
                </DialogTitle>
              </DialogHeader>
              <PopupDonate />
            </DialogContent>
          </Dialog>

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
          <SidebarSheet user={user} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
