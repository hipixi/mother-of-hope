"use server";

import dbConnect from "@/lib/dbConnect";
import Image from "@/models/Image";
import { unstable_cache } from "next/cache";

export const addImage = async (values) => {
  await dbConnect();
  const { url } = values;
  await Image.create({
    url,
  });
  return {
    success: "added image",
  };
};

export const getImages = async (page = 1, limit = 30) => {
  await dbConnect();
  try {
    const skip = (page - 1) * limit;
    const images = await Image.find({})
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Image.countDocuments();

    const convertedImages = images.map((image) => ({
      ...image,
      _id: image._id.toString(),
    }));

    return { images: convertedImages, total };
  } catch (error) {
    console.log(error);
    return { images: [], total: 0 };
  }
};

export async function deleteImage(id) {
  await dbConnect();

  try {
    await Image.deleteOne({ _id: id });
    return { sucess: "deleted" };
  } catch (error) {
    console.log("failed to delete image", error);
    return;
  }
}

export const getTotalImages = async () => {
  await dbConnect();
  try {
    const totalImages = await Image.countDocuments();
    return totalImages;
  } catch (error) {
    console.error("Error fetching total number of images:", error);
    return 0;
  }
};

export const getImagesSlider = unstable_cache(
  async () => {
    await dbConnect();
    try {
      // Only select the fields we need (url and _id)
      const images = await Image.find({}, { url: 1 })
        .sort({ updatedAt: -1 })
        .limit(10)
        .lean();

      const convertedImages = images.map((image) => ({
        url: image.url,
        _id: image._id.toString(),
      }));

      return { images: convertedImages };
    } catch (error) {
      console.log(error);
      return { images: [] };
    }
  },
  ["images-slider"],
  {
    revalidate: 14400, // 4 hours in seconds (4 * 60 * 60)
    tags: ["images-slider"], // Optional: useful for manual revalidation
  }
);
