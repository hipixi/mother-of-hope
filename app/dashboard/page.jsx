import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Upcoming from "./upcoming";
import Volunteers from "./volunteers";
import Events from "./events";
import Posts from "./posts";
import { DollarSignIcon } from "lucide-react";
import Partners from "./partners";

export const metadata = {
  title: "Overview | Dashboard",
};

export default function Component() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 lg:px-0 min-h-screen bg-background">
      <main className="flex-1 mt-4 ">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Donations
              </CardTitle>
              <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">+0 this month</p>
            </CardContent>
          </Card>
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
