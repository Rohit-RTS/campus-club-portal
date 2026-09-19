import { NavLink } from "react-router-dom";
import EventCard from "./EventCard";

function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Hackathon 2026",
      category: "Technology",
      club: "Coding Club",
      day: "28",
      month: "Aug",
      location: "Main Auditorium",
    },
    {
      id: 2,
      title: "Robotics Workshop",
      category: "Workshop",
      club: "Robotics Club",
      day: "02",
      month: "Sep",
      location: "Innovation Lab",
    },
    {
      id: 3,
      title: "Cultural Fest",
      category: "Cultural",
      club: "Cultural Club",
      day: "10",
      month: "Sep",
      location: "College Ground",
    },
  ];

  return (
    <section className="w-full bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-blue-600">
              WHAT'S HAPPENING
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Upcoming Events
            </h2>

            <p className="mt-3 text-slate-600">
              Don't miss what's happening around campus.
            </p>
          </div>

          <NavLink
            to="/events"
            className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
          >
            View All Events →
          </NavLink>

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default UpcomingEvents;