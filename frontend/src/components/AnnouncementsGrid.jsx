import { NavLink } from "react-router-dom";
import AnnouncementCard from "./AnnouncementCard";

function AnnouncementsGrid() {
  const announcements = [
    {
      id: 1,
      title: "Coding Club Registrations Are Open",
      category: "Registration",
      description:
        "Students can now register for the Coding Club for the new academic year.",
      date: "26 Aug 2026",
    },

    {
      id: 2,
      title: "Robotics Workshop Registration Started",
      category: "Workshop",
      description:
        "Registration is now open for the upcoming robotics workshop.",
      date: "25 Aug 2026",
    },

    {
      id: 3,
      title: "Cultural Fest Auditions Announced",
      category: "Cultural",
      description:
        "Auditions for the annual cultural fest will begin next week.",
      date: "23 Aug 2026",
    },
  ];

  return (
    <section className="w-full bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-blue-600">
              STAY UPDATED
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Latest Announcements
            </h2>

            <p className="mt-3 text-slate-600">
              Stay updated with the latest news from campus clubs.
            </p>
          </div>

          <NavLink
            to="/announcements"
            className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
          >
            View All →
          </NavLink>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default AnnouncementsGrid;