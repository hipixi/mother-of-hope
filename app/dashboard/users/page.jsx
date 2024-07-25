import { getUser, getUsers } from "@/app/actions/get-user";
import ChatWidget from "@/components/chat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import AddUser from "./add-user";
import { redirect } from "next/navigation";
import DeleteUser from "./delete-user";

export const metadata = {
  title: "Users | Dashboard",
};
export default async function Users() {
  const currentUser = await getUser();

  if (!currentUser) {
    redirect("/login");
  }
  const users = await getUsers();
  return (
    <main>
      <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto">
        <header className="bg-background  px-4 lg:px-0 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Users</h1>
          <AddUser />
        </header>
        <main className="flex-1 p-4 lg:px-0">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden lg:table-cell">Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium ">
                      {user.fullname}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell ">
                      {user.email}
                    </TableCell>
                    <TableCell className="">{user.role}</TableCell>
                    <TableCell className="text-right">
                      <DeleteUser id={user._id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
        <footer className="bg-muted max-w-screen-xl mx-auto w-full border-t px-4 py-4 flex items-center justify-between">
          <div className="text-muted-foreground rounded">
            Total users: <span className="font-medium">{users.length}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
