import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import { TableSkeleton } from "./table-skeleton";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Posts | Dashboard",
};

const PostTable = dynamic(() => import("./table"), {
  loading: () => <TableSkeleton />,
});
export default async function BlogDashboard() {
  return (
    <main>
      <div className="py-2 max-w-screen-xl mx-auto">
        <div className="bg-background  px-4 lg:px-0 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Posts</h1>
          <Button
            size="sm"
            variant="outline"
            className="text-xs font-semibold ml-auto "
          >
            <Link
              href="/dashboard/blog/new"
              className="flex items-center gap-1"
            >
              <Plus /> New Post
            </Link>
          </Button>
        </div>
      </div>

      <PostTable />
    </main>
  );
}
