import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Upcoming from "./upcoming";
import Volunteers from "./volunteers";
import Events from "./events";
import Posts from "./posts";
import { DollarSignIcon } from "lucide-react";
import Partners from "./partners";
import Donations from "./donations";

export const metadata = {
  title: "Overview | Dashboard",
};

export default function Component() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 lg:px-0 min-h-screen bg-background">
      <main className="flex-1 mt-4 ">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Donations />
          <Volunteers />
          <Upcoming />
          <Partners />
        </div>
        <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Posts />
          <Events />
        </div>
      </main>
    </div>
  );
}
