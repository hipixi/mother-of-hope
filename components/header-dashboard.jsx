import { getUser } from "@/app/actions/get-user";
import { Input } from "./ui/input";
import SignOut from "./signout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "@/app/actions/auth.action";
import DashboardNav from "./dashboard-nav";
import SearchDashboard from "@/app/dashboard/search-dashboard";

const DashboardHeader = async () => {
  const user = await getUser();

  return (
    <header className="border-b sticky bg-white z-50 top-0 left-0 right-0 py-2 overflow-x-hidden">
      <nav className="mx-auto w-full max-w-screen-xl px-4 flex items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo.svg" className="w-16 h-16" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <SearchDashboard />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-12 w-12 rounded-full">
                <AvatarImage src={user.image} />
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
                <Link className="w-full" href="/">
                  Home
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <SignOut signout={signOut} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <DashboardNav />
    </header>
  );
};

export default DashboardHeader;
