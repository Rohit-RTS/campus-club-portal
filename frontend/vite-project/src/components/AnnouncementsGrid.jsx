import { NavLink } from "react-router-dom";
import AnnouncementCard from "./AnnouncementCard";

import "./AnnouncementsGrid.css";

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
    <section className="announcements">

      <div className="announcements-container">

        {/* Header */}

        <div className="announcements-header">

          <div>
            <p className="section-label">
              STAY UPDATED
            </p>

            <h2>Latest Announcements</h2>

            <p className="section-description">
              Stay updated with the latest news from campus clubs.
            </p>
          </div>

          <NavLink
            to="/announcements"
            className="view-all-announcements"
          >
            View All →
          </NavLink>

        </div>

        {/* Grid */}

        <div className="announcements-grid">

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