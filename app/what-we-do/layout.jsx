import ChatWidget from "@/components/chat";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
      <ChatWidget />
    </main>
  );
}
