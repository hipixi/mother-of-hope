import { getUser } from "@/app/actions/get-user";
import { getPartners } from "@/app/actions/partner";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Partners | Dashboard",
};

export default async function Volunteers() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const partners = await getPartners();
  return (
    <main className="flex max-w-screen-xl mx-auto px-4 lg:px-0 flex-col h-full">
      <div className="flex items-center justify-between bg-background  py-4">
        <h1 className="text-2xl font-bold">Partners</h1>
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h2 className="font-medium text-lg">Recent Requests</h2>
        <Separator className="my-2" />

        {partners.map((partner) => (
          <div
            key={partner._id}
            className="border-b last-of-type:border-b-0 py-2 flex flex-col"
          >
            <h2 className="font-medium">{partner.companyname}</h2>
            <p className="text-muted-foreground text-sm">{partner.email}</p>
            <p className="text-muted-foreground text-sm">{partner.tel}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
