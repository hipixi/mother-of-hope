import Donate from "./donate";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[750px] md:h-[800px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://live.staticflickr.com/65535/53836398621_176c33a1cb_c.jpg')",
      }}
      role="banner"
      aria-label="Building a resilient Kasese community"
    >
      <Donate />
    </section>
  );
};

export default Hero;
