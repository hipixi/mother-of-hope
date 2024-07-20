import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Community Clean-up Day",
      date: "July 15",
      time: "9:00 AM - 1:00 PM",
      location: "Central Park",
      description:
        "Join us for a day of community service as we clean up our local park.",
    },
    {
      id: 2,
      title: "Fundraising Gala",
      date: "August 5",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hotel Ballroom",
      description:
        "An elegant evening to raise funds for our ongoing community projects.",
    },
    {
      id: 3,
      title: "Workshop: Sustainable Living",
      date: "August 20",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      description:
        "Learn practical tips for leading a more sustainable lifestyle.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto px-4 lg:px-0 max-w-screen-xl">
        <h1 className="font-bold text-3xl text-gray-800 md:text-3xl mb-8">
          Upcoming Events
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="border bg-white border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="bg-rose-600 text-white py-4 text-center">
                <span className=" font-bold text-base">{event.date}</span>
              </div>
              <div className="p-6">
                <h2 className="font-semibold text-base mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.time}</p>
                <p className="text-gray-600 mb-4">{event.location}</p>
                <p className="text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
