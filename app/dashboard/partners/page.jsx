import {
  getConfirmedPartners,
  getRecentUnconfirmedPartners,
} from "@/app/actions/partner";
import { Separator } from "@/components/ui/separator";
import ConfirmButton from "./confirm";
import UnConfirmButton from "./unconfirm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddLogo from "./add-logo";

export const metadata = {
  title: "Partners | Dashboard",
};

export default async function Partners() {
  const partners = await getRecentUnconfirmedPartners();
  const confirmedPartners = await getConfirmedPartners();
  return (
    <main className="flex max-w-screen-xl mx-auto px-4 flex-col h-full">
      <div className="flex items-center justify-between bg-background  py-4">
        <h1 className="text-2xl font-bold">Partners</h1>
      </div>

      <div className="rounded-lg my-3 border">
        <h3 className="font-medium p-4 text-sm md:text-base">
          Recent Requests
        </h3>
        <Separator className="my-2" />

        {partners.map((partner) => (
          <div
            key={partner._id}
            className="border-b last-of-type:border-b-0 py-2 flex items-center px-4 justify-between"
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

      <div className="rounded-lg my-3  border">
        <h3 className="font-medium p-4 text-sm lg:text-base">
          Confirmed Partners
        </h3>
        <Separator className="my-2" />

        {confirmedPartners.map((partner) => (
          <div
            key={partner._id}
            className="border-b last-of-type:border-b-0 px-4 py-2 "
          >
            <Dialog>
              <DialogTrigger className="w-full">
                <div className="space-y-2 ">
                  <img
                    src={partner?.logo}
                    alt={`${partner.companyname} logo`}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-xs md:text-sm">
                      {partner.companyname}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {partner.email}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {partner.tel}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <AddLogo id={partner._id} />
              </DialogContent>
            </Dialog>

            <div className="mt-2 flex justify-end">
              <UnConfirmButton partnerId={partner._id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
