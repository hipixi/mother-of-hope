import { Button } from "./ui/button";

const GetInvolved = () => {
  return (
    <section className=" bg-gradient-to-b from-blue-900 to-blue-800 py-12 md:py-16 lg:py-28">
      <div className="mx-auto px-4 lg:px-0 flex flex-col-reverse lg:flex-row max-w-screen-xl">
        <img
          src="/love.svg"
          className="w-full text-black h-[350px] md:h-[500px]"
        />

        <div>
          <h1 className="font-bold text-3xl md:text-4xl mb-4 capitalize text-white ">
            Get Involved
          </h1>
          <p className="max-w-lg text-lg text-white mb-8">
            Help us improve kasese by joining our volunteer program or our
            partners program
          </p>

          <div className="">
            <div className="bg-muted border shadow py-8 p-6 rounded-lg">
              <h2 className="font-semibold text-2xl mb-4">Volunteer</h2>
              <p className="mb-4">
                Join our community of dedicated volunteers and make a
                difference. We have various opportunities available to suit your
                skills and interests.
              </p>

              <Button className="rounded-none font-bold ">
                Sign Up to Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
