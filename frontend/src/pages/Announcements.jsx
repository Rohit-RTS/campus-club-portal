import AnnouncementCard from "../components/AnnouncementCard";

function Announcements() {
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
    {
      id: 4,
      title: "Photography Club New Member Drive",
      category: "Club Update",
      description:
        "Photography Club is inviting students interested in photography and visual storytelling.",
      date: "21 Aug 2026",
    },
    {
      id: 5,
      title: "Inter College Sports Tournament",
      category: "Sports",
      description:
        "Registrations are open for students interested in representing the college.",
      date: "20 Aug 2026",
    },
    {
      id: 6,
      title: "Entrepreneurship Club Meetup",
      category: "Meetup",
      description:
        "Join the upcoming meetup to discuss startup ideas and entrepreneurship.",
      date: "18 Aug 2026",
    },
  ];

  return (
    <main className="w-full">

      {/* Page Header */}
      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-20">

          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-400">
            CAMPUS UPDATES
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Announcements
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Stay updated with the latest news, notices,
            and updates from campus clubs.
          </p>

        </div>

      </section>

      {/* Announcements Content */}
      <section className="w-full bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

          {/* Announcements Grid */}
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

    </main>
  );
}

export default Announcements;