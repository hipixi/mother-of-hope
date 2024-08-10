import {
  getConfirmedVolunteers,
  getRecentUnconfirmedVolunteers,
} from "@/app/actions/general";
import { Separator } from "@/components/ui/separator";
import Confirm from "./confirm";
import UnConfirmButton from "./unconfirm";

export const metadata = {
  title: "Volunteers | Dashboard",
};

export default async function Volunteers() {
  const volunteers = await getRecentUnconfirmedVolunteers();
  const confirmedvolunteers = await getConfirmedVolunteers();

  return (
    <main className="flex max-w-screen-xl mx-auto px-4 flex-col h-full">
      <div className="flex items-center justify-between bg-background  py-4">
        <h1 className="text-2xl font-bold">Volunteers</h1>
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h3 className="font-medium text-sm md:text-base">Recent Requests</h3>
        <Separator className="my-2" />

        {volunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="border-b last-of-type:border-b-0 py-2 flex justify-between items-center"
          >
            <div>
              <h4 className="font-medium text-xs md:text-sm">
                {volunteer.name}
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm">
                {volunteer.email}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {volunteer.tel}
              </p>
            </div>
            <Confirm volunteerId={volunteer._id} />
          </div>
        ))}
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h3 className="font-medium text-sm lg:text-base">
          Confirmed Volunteers
        </h3>
        <Separator className="my-2" />

        {confirmedvolunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="border-b last-of-type:border-b-0 py-2 flex justify-between items-center"
          >
            <div>
              <h4 className="font-medium text-xs md:text-sm">
                {volunteer.name}
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm">
                {volunteer.email}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                {volunteer.tel}
              </p>
            </div>
            <UnConfirmButton volunteerId={volunteer._id} />
          </div>
        ))}
      </div>
    </main>
  );
}
