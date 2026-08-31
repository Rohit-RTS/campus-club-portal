import { NavLink } from "react-router-dom";
import "./EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">

      <div className="event-date">
        <span className="event-day">{event.day}</span>
        <span className="event-month">{event.month}</span>
      </div>

      <div className="event-content">
        <p className="event-category">
          {event.category}
        </p>

        <h3>{event.title}</h3>

        <p className="event-club">
          Organized by {event.club}
        </p>

        <p className="event-location">
          {event.location}
        </p>

        <NavLink
          to={`/events/${event.id}`}
          className="event-link"
        >
          View Event →
        </NavLink>
      </div>

    </div>
  );
}

export default EventCard;