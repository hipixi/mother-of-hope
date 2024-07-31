import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const GetInvolved = () => {
  return (
    <Card className="rounded-[2.5rem] bg-[#3a2234] shadow font-medium  flex justify-center items-center flex-col max-w-screen-xl my-12 md:my-16 py-12 lg:py-24 lg:my-24 px-4 lg:px-8 w-[95%] mx-auto ">
      <div className="mx-auto max-w-3xl flex flex-col justify-center items-center my-4">
        <h1 className="text-5xl text-white font-extrabold text-balance my-3 lg:text-6xl  text-center">
          Get Involved
        </h1>

        <p className="text-center my-3 lg:text-lg text-slate-200">
          You can get involved with our activities by either volunteering,
          becoming a partner or donating to our course
        </p>
      </div>

      <div className="flex  flex-col items-center  gap-2 lg:gap-4 my-6">
        <Button className="px-10 font-bold h-14 text-lg" size="lg">
          <Link href="/get-involved/partner">Become a Partner</Link>
        </Button>
        <div className="text-white">OR</div>
        <Button
          className="h-14 text-lg  font-bold "
          size="lg"
          variant="outline"
        >
          <Link href="/get-involved/volunteer">Become a Volunteer</Link>
        </Button>
      </div>
    </Card>
  );
};

export default GetInvolved;
