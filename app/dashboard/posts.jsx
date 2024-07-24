import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityIcon, ArrowRightIcon } from "lucide-react";
import { getPosts } from "../actions/blog.action";
import Link from "next/link";

const Posts = async () => {
  const posts = await getPosts();
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Recent Posts</CardTitle>
        <ActivityIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ul className="space-y-2  max-h-[calc(100%-2rem)]">
          {posts?.map((post) => (
            <li className="flex items-center justify-between" key={post._id}>
              <div className="flex-grow min-w-0 mr-2">
                <div className="font-medium truncate">{post.title}</div>
                <div className="text-xs text-muted-foreground">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "long",
                  }).format(new Date(post.updatedAt))}
                </div>
              </div>
              <Link href="#">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full flex-shrink-0"
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Posts;
