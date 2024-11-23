"use server";
import { cache } from "react";

import dbConnect from "@/lib/dbConnect";
import Partner from "@/models/Partner";
import { unstable_cache } from "next/cache";

export const addPartner = async (values) => {
  await dbConnect();
  const { email, tel } = values;
  try {
    const existingPartner = await Partner.findOne({
      $or: [{ email }, { tel }],
    });

    if (existingPartner) {
      return { error: "Partner Request already exists." };
    }

    await Partner.create({
      ...values,
    });

    return {
      success: "Partner successfully added",
    };
  } catch (error) {
    console.error("Error adding partner:", error.message);
    return {
      error: "Failed to add partner",
    };
  }
};

export const getMonthPartners = cache(async () => {
  await dbConnect();
  try {
    const now = new Date();

    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const partners = await Partner.countDocuments({
      createdAt: {
        $gte: firstDayOfMonth,
        $lte: lastDayOfMonth,
      },
    });

    return partners;
  } catch (error) {
    console.error("Error fetching total number of Partners:", error);
    return 0;
  }
});

export const getPartners = unstable_cache(
  async () => {
    await dbConnect();

    try {
      const partners = await Partner.find({}).sort({ updatedAt: -1 }).lean();
      const convertedPartners = partners.map((partner) => ({
        ...partner,
        _id: partner._id.toString(),
      }));

      return convertedPartners;
    } catch (error) {
      console.log("failed to fetch", error.message);
      return {
        error: "Failed to fetch",
      };
    }
  },
  ["partners"],
  {
    revalidate: 14400, // 4 hours in seconds (4 * 60 * 60)
    tags: ["partners"], // Optional: useful for manual revalidation
  }
);

export const confirmPartner = async (id) => {
  await dbConnect();

  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      id,
      { confirmed: true },
      { new: true }
    );

    if (!updatedPartner) {
      return { error: "Partner not found" };
    }

    return {
      success: "Partner successfully confirmed",
    };
  } catch (error) {
    console.error("Error confirming partner:", error.message);
    return {
      error: "Failed to confirm partner",
    };
  }
};

export const unconfirmPartner = async (id) => {
  await dbConnect();

  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      id,
      { confirmed: false },
      { new: true }
    );

    if (!updatedPartner) {
      return { error: "Partner not found" };
    }

    return {
      success: "Partner successfully unconfirmed",
    };
  } catch (error) {
    console.error("Error unconfirming partner:", error.message);
    return {
      error: "Failed to unconfirm partner",
    };
  }
};

export const getRecentUnconfirmedPartners = async () => {
  await dbConnect();

  try {
    const partners = await Partner.find({ confirmed: false })
      .sort({ createdAt: -1 })
      .lean();

    const convertedPartners = partners.map((volunteer) => ({
      ...volunteer,
      _id: volunteer._id.toString(),
    }));

    return convertedPartners;
  } catch (error) {
    console.log("Failed to fetch unconfirmed partners:", error.message);
    return {
      error: "Failed to fetch unconfirmed partners",
    };
  }
};

export const getConfirmedPartners = async () => {
  await dbConnect();

  try {
    const partners = await Partner.find({ confirmed: true })
      .sort({ updatedAt: -1 })
      .lean();

    const convertedPartners = partners.map((volunteer) => ({
      ...volunteer,
      _id: volunteer._id.toString(),
    }));

    return convertedPartners;
  } catch (error) {
    console.log("Failed to fetch confirmed partners:", error.message);
    return {
      error: "Failed to fetch confirmed partners",
    };
  }
};

export const getTotalPartners = async () => {
  await dbConnect();
  try {
    const totalPartners = await Partner.countDocuments();
    return totalPartners;
  } catch (error) {
    console.error("Error fetching total number of Partners:", error);
    return 0;
  }
};

export const updatePartnerLogo = async (id, logo) => {
  await dbConnect();
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      id,
      { logo: logo },
      { new: true }
    );
    if (!updatedPartner) {
      return { error: "Partner not found" };
    }
    return { success: "partner updated successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update partner" };
  }
};
