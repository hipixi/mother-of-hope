import { CldUploadButton } from "next-cloudinary";
import { Image } from "lucide-react";

function ImageUploadButton({ editor }) {
  const handleUpload = (result) => {
    const imageUrl = result.info.secure_url;
    editor.chain().focus().setImage({ src: imageUrl }).run();
  };

  return (
    <CldUploadButton uploadPreset="dantemoh" onSuccess={handleUpload}>
      <button className="flex items-center justify-center">
        <Image className="w-4 h-4" />
      </button>
    </CldUploadButton>
  );
}

export default ImageUploadButton;
