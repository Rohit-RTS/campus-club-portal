import AnnouncementCard from "../components/AnnouncementCard";


import "./Announcements.css";

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
    <main className="announcements-page">

      {/* Page Header */}

      <section className="announcements-page-header">

        <div className="announcements-page-header-container">

          <p className="announcements-page-label">
            CAMPUS UPDATES
          </p>

          <h1>Announcements</h1>

          <p>
            Stay updated with the latest news, notices,
            and updates from campus clubs.
          </p>

        </div>

      </section>

      {/* Announcements Content */}

      <section className="announcements-page-content">

        <div className="announcements-page-container">


          {/* Announcements Grid */}

          <div className="announcements-page-grid">

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