"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("");

  const addTag = () => {
    if (currentTag.trim() !== "" && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <div className="bg-white p-6 border rounded-lg shadow-md">
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="flex mb-2">
          <Input
            placeholder="Add a tag"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTag()}
          />
          <Button onClick={addTag} className="ml-2 font-bold">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 rounded-full text-sm"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-2 text-red-500"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
