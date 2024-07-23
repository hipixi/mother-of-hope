import Link from "next/link";
import { Button } from "./ui/button";

const GetInvolved = () => {
  return (
    <section className="rounded-xl bg-muted font-medium  flex justify-center items-center flex-col max-w-screen-xl my-12 md:my-16 py-12 lg:py-24 lg:my-24 px-4 lg:px-8 w-[95%] mx-auto">
      <div className="mx-auto max-w-3xl flex flex-col justify-center items-center my-4">
        <h1 className="text-4xl font-bold text-balance my-3 lg:text-5xl  text-center">
          Join Our Family, Become a Partner
        </h1>

        <p className="text-center my-3 lg:text-lg text-slate-700">
          You can get involved with our activities by either volunteering,
          becoming a volunteer or donating to our course
        </p>
      </div>

      <div className="flex  flex-col items-center lg:flex-row gap-2 lg:gap-6 my-3">
        <Button className="px-10 font-bold " size="lg">
          <Link href="/get-involved/partner">Become a Partner</Link>
        </Button>
        <div>OR</div>
        <Button className="  font-bold " size="lg" variant="outline">
          <Link href="/get-involved/volunteer">Become a Volunteer</Link>
        </Button>
      </div>
    </section>
  );
};

export default GetInvolved;
