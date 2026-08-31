import { NavLink } from "react-router-dom";
import EventCard from "./EventCard";

import "./UpcomingEvents.css";

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
    <section className="upcoming-events">

      <div className="upcoming-events-container">

        {/* Header */}

        <div className="upcoming-events-header">

          <div>
            <p className="section-label">
              WHAT'S HAPPENING
            </p>

            <h2>Upcoming Events</h2>

            <p className="section-description">
              Don't miss what's happening around campus.
            </p>
          </div>

          <NavLink
            to="/events"
            className="view-all-events"
          >
            View All Events →
          </NavLink>

        </div>

        {/* Events */}

        <div className="events-grid">

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