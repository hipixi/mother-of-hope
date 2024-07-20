import { Button } from "./ui/button";

const GetInvolved = () => {
  return (
    <section className=" bg-gradient-to-b from-blue-900 to-blue-800 py-12 md:py-16 lg:py-28">
      <div className="mx-auto px-4 lg:px-0 max-w-screen-xl">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 capitalize text-white ">
          Get Involved
        </h1>
        <p className="max-w-lg text-lg text-white mb-8">
          Help us improve kasese by joining either our volunteer program or our
          partners program
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted border shadow py-8 p-6 rounded-lg">
            <h2 className="font-semibold text-2xl mb-4">Volunteer</h2>
            <p className="mb-4">
              Join our community of dedicated volunteers and make a difference.
              We have various opportunities available to suit your skills and
              interests.
            </p>

            <Button className="rounded-none font-bold ">
              Sign Up to Volunteer
            </Button>
          </div>

          <div className="bg-muted shadow p-6 border rounded-lg">
            <h2 className="font-semibold  text-2xl mb-4">Partner With Us</h2>
            <p className="mb-4">
              We believe in the power of collaboration. Partner with us to
              create meaningful impact and achieve shared goals.
            </p>

            <Button className="rounded-none font-bold ">
              Become a partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
