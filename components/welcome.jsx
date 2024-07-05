import { GiftIcon, PowerIcon, VoteIcon } from "lucide-react";

const Welcome = () => {
  return (
    <section className="py-16 text-center my-8 md:my-12 ">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="max-w-xl mx-auto">
          <h3 className="text-sm md:text-lg font-semibold text-gray-500">
            WELCOME TO Mother Of Hope Foundation Uganda
          </h3>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">
            We Believe that we can Build{" "}
            <span className="text-red-600">Kasese</span> with our core values
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-8 mt-12 md:grid-cols-4">
          <div className="flex flex-col items-center border-r px-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <PowerIcon className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Sustainability</h4>
            <p className="mt-2 text-gray-500">
              We ensure a lasting and (un tempered) impact 
            </p>
          </div>
          <div className="flex flex-col items-center border-r px-2">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <PowerIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Equality</h4>
            <p className="mt-2 text-gray-500">
              We serve people of all categories without discrimination
            </p>
          </div>
          <div className="flex flex-col items-center border-r px-2">
            <div className="w-28 h-28 bg-red-100 rounded-full flex items-center justify-center ">
              <VoteIcon className="w-16 h-16 text-red-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Inclusivity</h4>
            <p className="mt-2 text-gray-500">
              (We serve people of different diversity perspective)
            </p>
          </div>
          <div className="flex flex-col items-center px-2">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <GiftIcon className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Donations</h4>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
