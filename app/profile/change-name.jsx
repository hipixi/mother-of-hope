"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { updateUserEmailName } from "../actions/update-user";

const ChangeName = ({ user }) => {
  const [fullname, setFullname] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [isLoading, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(() => {
      updateUserEmailName(user.id, fullname, email).then((data) => {
        if (data?.success) {
          router.refresh();
        }
      });
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:col-span-3">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <div className="mt-1">
          <Input
            id="name"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-3 mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end items-center mt-4">
          {message && (
            <p
              className={`text-sm ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
          <Button
            type="submit"
            className="ml-3 bg-black hover:bg-gray-800 text-slate-100 px-4"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChangeName;
