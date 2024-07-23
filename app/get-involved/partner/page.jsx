import ChatWidget from "@/components/chat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import FormPartner from "./form-partner";

export const metadata = {
  title: "Partner | Mother of hope foundation uganda",
};
const Partner = () => {
  return (
    <main>
      <Header />
      <section className="my-6 w-[97%] p-4 lg:p-8 mx-auto max-w-2xl rounded-lg border ">
        <h1 className="text-3xl lg:text-3xl font-semibold">Become A partner</h1>

        <FormPartner />
      </section>
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Partner;
