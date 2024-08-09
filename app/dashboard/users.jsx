import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book } from "lucide-react";
import { getTotalUsers } from "../actions/get-user";
import { FaPeopleGroup } from "react-icons/fa6";

const TotalUsers = async () => {
  const numUsers = await getTotalUsers();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        <FaPeopleGroup className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardDescription className="px-6">All Users </CardDescription>
      <CardContent>
        <div className="text-2xl font-bold">{numUsers}</div>
      </CardContent>
    </Card>
  );
};

export default TotalUsers;
