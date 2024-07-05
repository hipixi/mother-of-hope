import { Button } from "./ui/button";

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-screen-lg w-full mx-auto px-2">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 relative">
            <div className="w-full pt-[100%] relative">
              <svg
                viewBox="0 0 800 800"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <clipPath id="africa-clip">
                    <path d="M400,100 Q550,150 600,300 Q650,450 550,600 Q450,750 300,700 Q150,650 200,500 Q250,350 300,250 Q350,150 400,100 Z" />
                  </clipPath>
                </defs>
                <image
                  href="https://live.staticflickr.com/65535/53836574558_ff18fdda7c_z.jpg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clip-path="url(#africa-clip)"
                />
              </svg>
            </div>
            {/* Decorative dots */}
            <svg
              className="absolute -bottom-4 -left-4 w-24 h-24 text-orange-200"
              fill="currentColor"
              viewBox="0 0 100 100"
            >
              <circle cx="10" cy="10" r="3" />
              <circle cx="30" cy="10" r="3" />
              <circle cx="50" cy="10" r="3" />
              <circle cx="10" cy="30" r="3" />
              <circle cx="30" cy="30" r="3" />
              <circle cx="50" cy="30" r="3" />
              <circle cx="10" cy="50" r="3" />
              <circle cx="30" cy="50" r="3" />
              <circle cx="50" cy="50" r="3" />
            </svg>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 md:pl-16">
            <h3 className="text-2xl font-bold">Who We Are</h3>
            <p className="mt-4 text-gray-600">
              Mother of Hope Foundation Uganda is a Community-Based non-profit
              organization located in Nyamwamba Division, Kasese Municipality,
              Uganda. Founded in 2020 as a response to the pressing economic and
              social challenges faced by the local communities.
            </p>
            <p className="mt-4 text-gray-600">
              The foundation strives to enact positive change and holistic
              transformation for individuals who grapple with economic and
              social disadvantages.
            </p>
            <div className="flex items-center mt-8 space-x-4">
              <Button className="bg-orange-600 hover:bg-orange-700 rounded-full text-white transition duration-300 ease-in-out transform hover:scale-105">
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Additional decorative dots */}
      <svg
        className="absolute top-4 right-4 w-24 h-24 text-orange-200"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="10" cy="10" r="3" />
        <circle cx="30" cy="10" r="3" />
        <circle cx="50" cy="10" r="3" />
        <circle cx="10" cy="30" r="3" />
        <circle cx="30" cy="30" r="3" />
        <circle cx="50" cy="30" r="3" />
        <circle cx="10" cy="50" r="3" />
        <circle cx="30" cy="50" r="3" />
        <circle cx="50" cy="50" r="3" />
      </svg>
    </section>
  );
};

export default WhoWeAre;
