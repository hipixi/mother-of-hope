import { getUser } from "@/app/actions/get-user";
import {
  getConfirmedPartners,
  getRecentUnconfirmedPartners,
} from "@/app/actions/partner";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import ConfirmButton from "./confirm";
import UnConfirmButton from "./unconfirm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddLogo from "./add-logo";

export const metadata = {
  title: "Partners | Dashboard",
};

export default async function Volunteers() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const partners = await getRecentUnconfirmedPartners();
  const confirmedPartners = await getConfirmedPartners();
  return (
    <main className="flex max-w-screen-xl mx-auto px-4 lg:px-0 flex-col h-full">
      <div className="flex items-center justify-between bg-background  py-4">
        <h1 className="text-2xl font-bold">Partners</h1>
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h3 className="font-medium text-sm md:text-base">Recent Requests</h3>
        <Separator className="my-2" />

        {partners.map((partner) => (
          <div
            key={partner._id}
            className="border-b last-of-type:border-b-0 py-2 flex items-center justify-between"
          >
            <div>
              <h4 className="font-medium text-xs md:text-sm">
                {partner.companyname}
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm">
                {partner.email}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {partner.tel}
              </p>
            </div>

            <ConfirmButton partnerId={partner._id} />
          </div>
        ))}
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h3 className="font-medium text-sm lg:text-base">Confirmed Partners</h3>
        <Separator className="my-2" />

        {confirmedPartners.map((partner) => (
          <div
            key={partner._id}
            className="border-b last-of-type:border-b-0 py-2 flex justify-between items-center"
          >
            <Dialog>
              <DialogTrigger className="p-0 flex flex-col items-start">
                <div className="flex flex-col items-start">
                  <img
                    src={partner?.logo}
                    className="w-[100px] h-12 object-contain"
                  />
                  <h4 className="font-medium text-xs md:text-sm">
                    {partner.companyname}
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {partner.email}
                  </p>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {partner.tel}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <AddLogo id={partner._id} />
              </DialogContent>
            </Dialog>

            <UnConfirmButton partnerId={partner._id} />
          </div>
        ))}
      </div>
    </main>
  );
}
