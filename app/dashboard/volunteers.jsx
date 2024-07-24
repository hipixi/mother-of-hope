import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UsersIcon } from "lucide-react";
import { getGeneral, getMonthGeneral } from "../actions/general";

const Volunteers = async () => {
  const volunteers = await getGeneral();
  const monthVolunteers = await getMonthGeneral();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Volunteers</CardTitle>
        <UsersIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{volunteers.length}</div>
        <p className="text-xs text-muted-foreground">
          +{monthVolunteers.length} this month
        </p>
      </CardContent>
    </Card>
  );
};

export default Volunteers;
