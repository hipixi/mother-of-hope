"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { updateUserPassword } from "../actions/update-user";
import { useRouter } from "next/navigation";

const ChangePassword = ({ user }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    startTransition(() => {
      updateUserPassword(user.id, newPassword, oldPassword).then((data) => {
        if (data.success) {
          router.refresh();
        } else {
          setErrorMessage(data.error);
        }
      });
    });
  };
  return (
    <>
      <div className="pt-6 space-y-4">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Password
          </h2>
          <p className="mt-1 text-sm text-gray-500">Update your password.</p>

          {errorMessage && (
            <p className="text-destructive font-medium">{errorMessage}</p>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-4">
            <div className="sm:col-span-3">
              <label
                htmlFor="current-password"
                className="block text-sm font-medium text-gray-700"
              >
                Current Password
              </label>
              <div className="mt-1">
                <Input
                  id="current-password"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1">
                <Input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <Button
              disabled={pending}
              type="submit"
              className="ml-3 bg-black hover:bg-gray-800 text-slate-100 px-4"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
