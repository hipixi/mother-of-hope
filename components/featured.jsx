const Featured = () => {
  const stories = [
    {
      title: "Clean Water Project Transforms Rural Community",
      description:
        "Our recent initiative brought clean, accessible water to over 500 families in Nyamwamba Division, significantly reducing waterborne diseases and improving daily life for residents.",
      date: "June 15, 2024",
      image: "https://live.staticflickr.com/65535/53844314177_1c247ed44a_z.jpg",
    },
    {
      title: "Youth Empowerment Program Launches",
      description:
        "MOHFU's new skills training program equips local youth with valuable job skills and entrepreneurship knowledge, fostering economic growth and reducing unemployment in the community.",
      date: "July 3, 2024",
      image: "https://live.staticflickr.com/65535/53844323107_a2c097cd57_z.jpg",
    },
  ];

  return (
    <section className="w-full bg-sky-900 py-12 md:py-24 lg:py-32">
      <div className="max-w-screen-xl px-3 md:px-6 mx-auto">
        <div className="flex justify-center md:justify-start mb-12">
          <h2 className="text-3xl w-fit border-green-500 border-b-8 text-white text-center md:text-left font-bold">
            Stories Of Hope
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-md overflow-hidden border border-slate-200"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-white font-semibold md:text-3xl mb-2">
                  {story.title}
                </h3>
                <p className="text-slate-100 my-4">{story.description}</p>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-yellow-500">Read more</div>
                  <p className="text-sm bg-green-700 text-white w-fit rounded-xl px-3 py-[2px]">
                    {story.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
