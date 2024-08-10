"use client";
import { getDonations } from "@/app/actions/donation";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";

import { Skeleton } from "@/components/ui/skeleton";

const DonationsWrapper = () => {
  const [recentDonations, setRecentDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const donations = await getDonations(limit);
        setRecentDonations(donations);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch donations:", error);
        setIsLoading(false);
      }
    };

    fetchDonations();
  }, [limit]);

  const handleLimitChange = (value) => {
    setLimit(Number(value));
  };

  if (isLoading) {
    return (
      <div className="w-[97%] mt-4 max-w-screen-xl mx-auto">
        <Skeleton className="h-8 mb-4 w-full" />

        <Skeleton className=" h-[300px] md:h-[400px]" />
      </div>
    );
  }

  return (
    <div className="px-4  max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl mt-3 md:text-2xl font-bold mb-6">Donations</h1>
        <div className="relative">
          <Select
            onValueChange={handleLimitChange}
            defaultValue={limit.toString()}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select limit" />
            </SelectTrigger>
            <SelectContent
              className="bg-white w-[150px] border z-[1000]"
              position="popper"
              align="end"
              sideOffset={5}
            >
              <SelectItem value="10">10 items</SelectItem>
              <SelectItem value="20">20 items</SelectItem>
              <SelectItem value="50">50 items</SelectItem>
              <SelectItem value="100">100 items</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden lg:table-cell">Email</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="hidden lg:table-cell">Frequency</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDonations.map((donation) => (
              <TableRow key={donation._id}>
                <TableCell className="font-medium ">
                  {" "}
                  {donation.paypalDetails.payer.name.given_name}{" "}
                  {donation.paypalDetails.payer.name.surname}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {donation.paypalDetails.payer.email_address}
                </TableCell>
                <TableCell>${donation.amount}</TableCell>
                <TableCell className="hidden lg:table-cell">
                  {donation.frequency}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  {new Intl.DateTimeFormat("en-UK", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                  }).format(new Date(donation.createdAt))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DonationsWrapper;
