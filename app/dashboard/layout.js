import DashboardFooter from "@/components/dashboard-footer";
import DashboardHeader from "@/components/header-dashboard";
import { getUser } from "../actions/get-user";

export default async function RootLayout({ children }) {
  const currentUser = await getUser();

  if (!currentUser) {
    redirect("/login");
  }
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-grow pb-16">{children}</main>
      <DashboardFooter />
    </div>
  );
}
