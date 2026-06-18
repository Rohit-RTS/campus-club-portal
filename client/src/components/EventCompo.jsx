import { useState } from "react";
import "./EventCompo.css";

const events = [
  {
    title: "Hackathon: Build for Campus",
    date: "Sat, Jun 14 · 9:00 AM",
    location: "Engineering Block, Hall A",
    month: "Jun",
    day: "14",
    seats: 24,
    total: 120,
    gradient: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
    tag: "Tech",
  },
  {
    title: "Annual Photography Exhibition",
    date: "Fri, Jun 20 · 5:30 PM",
    location: "Fine Arts Gallery",
    month: "Jun",
    day: "20",
    seats: 8,
    total: 80,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    tag: "Arts",
  },
  {
    title: "Inter-College Robotics Meet",
    date: "Sun, Jun 29 · 10:00 AM",
    location: "Robotics Lab, Block C",
    month: "Jun",
    day: "29",
    seats: 56,
    total: 200,
    gradient: "linear-gradient(135deg, #0891b2, #4f46e5)",
    tag: "Engineering",
  },
];

function EventCompo() {
  const [saved, setSaved] = useState({});

  const toggle = (i) => {
    setSaved((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <section className="events-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">This month</span>
          <h2>Upcoming Events</h2>
          <p>
            Reserve your spot — registrations close 24 hours before each event.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={event.title}>
              <div
                className="event-banner"
                style={{ background: event.gradient }}
              >
                <span className="event-tag">{event.tag}</span>

                <button
                  className={`bookmark ${saved[index] ? "saved" : ""}`}
                  onClick={() => toggle(index)}
                >
                  🔖
                </button>

                <div className="event-date-badge">
                  <span>{event.month}</span>
                  <strong>{event.day}</strong>
                </div>
              </div>

              <div className="event-body">
                <h3>{event.title}</h3>

                <ul className="event-meta">
                  <li>{event.date}</li>
                  <li>{event.location}</li>
                </ul>

                <div className="event-foot">
                  <div className="event-people">
                    <div className="avatars">
                      <span className="av av-1">M</span>
                      <span className="av av-2">R</span>
                      <span className="av av-3">K</span>
                      <span className="av av-more">
                        +{event.total - event.seats - 3}
                      </span>
                    </div>

                    <small
                      className={
                        event.seats < 15 ? "seats low" : "seats"
                      }
                    >
                      {event.seats} seats left
                    </small>
                  </div>

                  <button className="event-register">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventCompo;