import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[600px] md:h-[550px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://live.staticflickr.com/65535/53836398621_176c33a1cb_c.jpg')",
      }}
      role="banner"
      aria-label="Building a resilient Kasese community"
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto md:mx-4 m-4 shadow-lg flex flex-col items-center bg-white max-w-xl rounded-md p-3 py-10 md:px-6 md:py-20 text-black">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold  text-center max-w-4xl">
            Building a Resilient <span className="text-rose-600">Kasese</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-center max-w-2xl">
            Creating a community that thrives despite economic and
            sustainability challenges
          </p>
          <Button className="mt-6 bg-yellow-400 hover:bg-orange-600 text-lg text-gray-900 font-semibold px-6 py-3 rounded-none transition duration-300 ease-in-out transform hover:scale-105">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
