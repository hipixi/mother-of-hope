import ChatWidget from "@/components/chat";
import DashboardFooter from "@/components/dashboard-footer";
import DashboardHeader from "@/components/header-dashboard";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-grow pb-16">{children}</main>
      <DashboardFooter />
      <ChatWidget />
    </div>
  );
}
