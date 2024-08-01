"use server";
import { cache } from "react";

import dbConnect from "@/lib/dbConnect";
import Donation from "@/models/Donation";

export const getMonthDonations = cache(async () => {
  await dbConnect();
  try {
    const now = new Date();

    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const donations = await Donation.countDocuments({
      createdAt: {
        $gte: firstDayOfMonth,
        $lte: lastDayOfMonth,
      },
    });

    return donations;
  } catch (error) {
    console.error("Error fetching total number of Donations:", error);
    return 0;
  }
});

export const getDonations = async () => {
  await dbConnect();

  try {
    const donations = await Donation.find({}).sort({ createdAt: -1 }).lean();
    const convertedDonations = donations.map((partner) => ({
      ...partner,
      _id: partner._id.toString(),
    }));

    return convertedDonations;
  } catch (error) {
    console.log("failed to fetch", error.message);
    return {
      error: "Failed to fetch",
    };
  }
};

export const getTotalDonationAmount = cache(async () => {
  await dbConnect();
  try {
    const result = await Donation.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: { $toDouble: "$amount" } },
        },
      },
    ]);

    return result[0]?.totalAmount || 0;
  } catch (error) {
    console.error("Error fetching total donation amount:", error);
    return 0;
  }
});

export const getMonthTotalDonationAmount = cache(async () => {
  await dbConnect();
  try {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const result = await Donation.aggregate([
      {
        $match: {
          createdAt: {
            $gte: firstDayOfMonth,
            $lte: lastDayOfMonth,
          },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: { $toDouble: "$amount" } },
        },
      },
    ]);

    return result[0]?.totalAmount || 0;
  } catch (error) {
    console.error("Error fetching total donation amount for the month:", error);
    return 0;
  }
});
