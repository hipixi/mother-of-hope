import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import {
  getMonthTotalDonationAmount,
  getTotalDonationAmount,
} from "../actions/donation";

const Donations = async () => {
  const alldonations = await getTotalDonationAmount();
  const monthDonations = await getMonthTotalDonationAmount();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
        <CalendarIcon className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${alldonations}</div>
        <p className="text-xs text-muted-foreground">
          +${monthDonations} this month
        </p>
      </CardContent>
    </Card>
  );
};

export default Donations;
