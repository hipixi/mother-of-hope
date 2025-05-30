const Cores = () => {
  const values = [
    {
      name: "Sustainability",
      desc: "We ensure a lasting and (un tempered) impact ",
    },
    {
      name: "Inclusivity",
      desc: "We serve people of different diversity perspective",
    },
    {
      name: "Equality",
      desc: "We serve people of all categories without discrimination",
    },
    {
      name: "Integrity",
      desc: "We ensure top notch diligence among our employees and associated stakeholders",
    },
    {
      name: "Accountability",
      desc: "We ensure transparency in implementation and communication to the community and partners",
    },
    {
      name: "Impartiality",
      desc: "We treat everyone with fairness whenever a decision is made for the good will of the people",
    },
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#3cdd8c] rounded-t-[2.5rem]">
      <div className="max-w-screen-xl px-4 md:px-6 mx-auto">
        <div className="w-full max-w-2xl mx-auto flex justify-center items-center text-center ">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-5xl text-balance text-white uppercase ">
              The principles that drive us
            </h2>
            <div className="w-16 h-2 bg-yellow-500 flex justify-center mx-auto"></div>

            <div className="space-y-4 md:space-y-6 lg:space-y-8 bg-[#f3f3f3] rounded-3xl p-8 py-12">
              {values.map((item, idx) => (
                <div key={idx} className="lg:text-xl">
                  <span className="font-bold ">{item.name}: </span> {item.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cores;
