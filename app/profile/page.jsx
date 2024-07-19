import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat";
import { getUser } from "../actions/get-user";
import { redirect } from "next/navigation";
import ChangeImage from "./change-image";
import ChangeName from "./change-name";
import ChangePassword from "./change-password";

export default async function Profile() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }
  return (
    <main>
      <Header />
      <section className="px-4 lg:px-0">
        <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8 border rounded-xl my-6">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Profile Settings
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Manage your account information and preferences.
              </p>
            </div>
            <div className="space-y-6 divide-y divide-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Update your name, email, and profile image.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <ChangeImage user={user} />
                  <ChangeName user={user} />
                </div>
              </div>
              <ChangePassword user={user} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  );
}
