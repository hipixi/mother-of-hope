const Vision = () => {
  return (
    <section className="bg-transparent w-[95%] max-w-screen-xl mx-auto py-12">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 bottom-6 lg:grid-cols-3 w-full">
          <div
            className="bg-cover h-[300px] flex flex-col gap-4  p-10"
            style={{
              backgroundImage: "url('/indigo.png')",
            }}
            role="banner"
          >
            <h2 className="font-bold text-2xl lg:text-3xl text-white">
              Our Mission
            </h2>
            <p className="text-lg">
              To mobilize educational and empowerment programs as well as
              resources with the goal of transforming the well-being of the
              community
            </p>
          </div>
          <div
            className="bg-cover h-[300px] flex flex-col gap-4  p-10"
            style={{
              backgroundImage: "url('/yellow.png')",
            }}
            role="banner"
          >
            <h2 className="font-bold text-2xl lg:text-3xl text-white">
              Our Vision
            </h2>

            <p className="text-lg">
              To create a resilient community that thrives even in the face of
              economic and sustainability challenges.
            </p>
          </div>
          <div
            className="bg-cover h-[300px] flex flex-col gap-4  p-10"
            style={{
              backgroundImage: "url('/blue.png')",
            }}
            role="banner"
          >
            <h2 className="font-bold text-2xl lg:text-3xl text-white">
              Our reach
            </h2>

            <p className="text-lg text-slate-100">
              We serve more-than 100,000 people in Nyamwamba Division and Kasese
              at whole. Planted 1000s of tree since our founding in 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
