"use server";

import dbConnect from "@/lib/dbConnect";
import Image from "@/models/Image";

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
