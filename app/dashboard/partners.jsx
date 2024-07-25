import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { getMonthPartners, getTotalPartners } from "../actions/partner";

const Partners = async () => {
  const allpartners = await getTotalPartners();
  const monthPartners = await getMonthPartners();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Partners</CardTitle>
        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{allpartners}</div>
        <p className="text-xs text-muted-foreground">
          +{monthPartners} this month
        </p>
      </CardContent>
    </Card>
  );
};

export default Partners;
