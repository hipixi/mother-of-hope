import { getUser, getUsers } from "@/app/actions/get-user";

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
import EditUser from "./edit-user";

export const metadata = {
  title: "Users | Dashboard",
};
export default async function Users() {
  const currentUser = await getUser();

  if (!currentUser) {
    redirect("/login");
  }
  if (currentUser && currentUser.role === "user") {
    redirect("/dashboard");
  }
  const users = await getUsers();
  return (
    <main>
      <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto">
        <header className="bg-background  px-4  py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Users</h1>
          <AddUser />
        </header>
        <main className="flex-1 p-4">
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
                    <TableCell className="text-right ">
                      <div className="flex justify-end space-x-2 items-center">
                        <EditUser user={user} />
                        <DeleteUser id={user._id} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </main>
  );
}
