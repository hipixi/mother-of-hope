import { createImageUpload } from "novel/plugins";

const onUpload = async (file) => {
  try {
    // First, get the presigned URL from your API
    const response = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get upload URL");
    }

    const { url: presignedUrl, filename } = await response.json();

    // Use the presigned URL to upload the file directly to R2
    const uploadResponse = await fetch(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });

    if (!uploadResponse.ok) {
      throw new Error("Upload to R2 failed");
    }

    // Return the public URL for the uploaded file
    // You'll need to adjust this URL pattern to match your R2 configuration
    const publicUrl = `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`;
    return publicUrl;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export const uploadFn = createImageUpload({
  onUpload,
  validateFn: (file) => {
    // Validate file type
    if (!file.type.includes("image/")) {
      console.log("File type not supported.");
      return false;
    }

    // Validate file size (20MB limit)
    if (file.size / 1024 / 1024 > 20) {
      console.log("File size too big (max 20MB).");
      return false;
    }

    return true;
  },
});
