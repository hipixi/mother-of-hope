import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book } from "lucide-react";
import { getTotalPosts } from "../actions/blog.action";

const TotalPosts = async () => {
  const numPosts = await getTotalPosts();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
        <Book className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardDescription className="px-6">All Posts </CardDescription>
      <CardContent>
        <div className="text-2xl font-bold">{numPosts}</div>
      </CardContent>
    </Card>
  );
};

export default TotalPosts;
