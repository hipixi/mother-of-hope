import { getUser } from "@/app/actions/get-user";
import { getEmails } from "@/app/actions/mail";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Maillist | Dashboard",
};
export default async function Users() {
  const currentUser = await getUser();

  if (!currentUser) {
    redirect("/login");
  }
  const mails = await getEmails();
  return (
    <main>
      <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto">
        <header className="bg-background  px-4 lg:px-0 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Maillist</h1>
        </header>
        <main className="flex-1 p-4 lg:px-0">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mails.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell className="font-medium ">{user.email}</TableCell>
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
