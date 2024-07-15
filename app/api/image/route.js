import { Buffer } from "buffer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return new Response(JSON.stringify({ error: "No file uploaded" }), {
      status: 400,
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${buffer.toString("base64")}`
    );

    return new Response(JSON.stringify({ url: result.secure_url }), {
      status: 200,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(JSON.stringify({ error: "Upload failed" }), {
      status: 500,
    });
  }
}
