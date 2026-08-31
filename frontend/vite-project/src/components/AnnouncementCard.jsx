import { NavLink } from "react-router-dom";
import "./AnnouncementCard.css";

function AnnouncementCard({ announcement }) {
  return (
    <div className="announcement-card">

      <div className="announcement-icon">
        !
      </div>

      <div className="announcement-content">

        <p className="announcement-category">
          {announcement.category}
        </p>

        <h3>{announcement.title}</h3>

        <p className="announcement-description">
          {announcement.description}
        </p>

        <p className="announcement-date">
          {announcement.date}
        </p>

        <NavLink
          to={`/announcements/${announcement.id}`}
          className="announcement-link"
        >
          Read More →
        </NavLink>

      </div>

    </div>
  );
}

export default AnnouncementCard;