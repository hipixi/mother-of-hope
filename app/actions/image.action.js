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

export const getImages = async () => {
  await dbConnect();
  try {
    const images = await Image.find({}).sort({ updatedAt: -1 }).lean();

    const convertedImages = images.map((image) => ({
      ...image,
      _id: image._id.toString(),
    }));

    return convertedImages;
  } catch (error) {
    console.log(error);

    return [];
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
