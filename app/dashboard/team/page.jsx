import { getTeam } from "@/app/actions/team.action";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import Link from "next/link";
import DeleteMember from "./delete-member";

export const metadata = {
  title: "Team | Dashboard",
};

const Team = async () => {
  const team = await getTeam();
  return (
    <div className="flex flex-col h-full w-full max-w-screen-xl mx-auto">
      <header className="bg-background  px-4  py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Team</h1>
        <div className="ml-auto">
          <Button
            size="sm"
            variant="outline"
            className="text-xs font-semibold flex items-center gap-1"
          >
            <Link
              href="/dashboard/team/add"
              className="flex items-center gap-1"
            >
              <Plus /> New Member
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden lg:table-cell">Email</TableHead>
                <TableHead>Position</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {team.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium ">{user.name}</TableCell>
                  <TableCell className="hidden lg:table-cell ">
                    {user.email}
                  </TableCell>
                  <TableCell className="">{user.position}</TableCell>
                  <TableCell className="text-right ">
                    <div className="flex justify-end space-x-2 items-center">
                      <Link href={`/dashboard/team/edit/${user._id}`}>
                        edit
                      </Link>
                      <DeleteMember id={user._id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Team;
