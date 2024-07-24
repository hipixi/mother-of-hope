import {
  getConfirmedVolunteers,
  getGeneral,
  getRecentUnconfirmedVolunteers,
} from "@/app/actions/general";
import { getUser } from "@/app/actions/get-user";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import Confirm from "./confirm";
import UnConfirmButton from "./unconfirm";

export const metadata = {
  title: "Volunteers | Dashboard",
};

export default async function Volunteers() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const volunteers = await getRecentUnconfirmedVolunteers();
  const confirmedvolunteers = await getConfirmedVolunteers();

  return (
    <main className="flex max-w-screen-xl mx-auto px-4 lg:px-0 flex-col h-full">
      <div className="flex items-center justify-between bg-background  py-4">
        <h1 className="text-2xl font-bold">Volunteers</h1>
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h2 className="font-medium text-lg">Recent Requests</h2>
        <Separator className="my-2" />

        {volunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="border-b last-of-type:border-b-0 py-2 flex justify-between items-center"
          >
            <div>
              <h2 className="font-medium">{volunteer.name}</h2>
              <p className="text-muted-foreground text-sm">{volunteer.email}</p>
              <p className="text-muted-foreground text-sm">{volunteer.tel}</p>
            </div>
            <Confirm volunteerId={volunteer._id} />
          </div>
        ))}
      </div>

      <div className="rounded-lg my-3 p-6 border">
        <h2 className="font-medium text-lg">Confirmed Volunteers</h2>
        <Separator className="my-2" />

        {confirmedvolunteers.map((volunteer) => (
          <div
            key={volunteer._id}
            className="border-b last-of-type:border-b-0 py-2 flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium text-sm md:text-base">
                {volunteer.name}
              </h3>
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
