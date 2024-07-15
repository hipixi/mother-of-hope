"use server";

import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";

export const addPost = async (values) => {
  await dbConnect();
  await Post.create({
    ...values,
  });
  return {
    success: "Post added successfully",
  };
};

// export const getImages = async () => {
//   await dbConnect();
//   try {
//     const images = await Image.find({}).sort({ updatedAt: -1 }).lean();

//     const convertedImages = images.map((image) => ({
//       ...image,
//       _id: image._id.toString(),
//     }));

//     return convertedImages;
//   } catch (error) {
//     console.log(error);

//     return [];
//   }
// };

// export async function deleteImage(id) {
//   await dbConnect();

//   try {
//     await Image.deleteOne({ _id: id });
//     return { sucess: "deleted" };
//   } catch (error) {
//     console.log("failed to delete image", error);
//     return;
//   }
// }
