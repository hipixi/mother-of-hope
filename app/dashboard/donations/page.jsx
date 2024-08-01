"use client";
import { getDonations } from "@/app/actions/donation";
import { useEffect, useState } from "react";

const Donations = () => {
  const [recentDonations, setRecentDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(recentDonations);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const donations = await getDonations();
        setRecentDonations(donations.slice(0, 10)); // Get only the 10 most recent
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch donations:", error);
        setIsLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (isLoading) {
    return <div className="max-w-screen-xl w-[97%] mx-auto">Loading...</div>;
  }

  return (
    <div className="px-4 lg:px-0 max-w-screen-xl mx-auto">
      <h1 className="text-xl mt-3 md:text-2xl font-bold mb-6">
        Recent Donations
      </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 hidden lg:table-cell text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium hidden lg:table-cell text-gray-500 uppercase tracking-wider">
                Frequency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium hidden md:table-cell text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentDonations.map((donation) => (
              <tr key={donation._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base">
                  {donation.paypalDetails.payer.name.given_name}{" "}
                  {donation.paypalDetails.payer.name.surname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  {donation.paypalDetails.payer.email_address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base">
                  ${donation.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  {donation.frequency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                  {new Date(donation.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donations;
