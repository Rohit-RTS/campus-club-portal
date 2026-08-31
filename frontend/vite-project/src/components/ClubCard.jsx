import { NavLink } from "react-router-dom";
import "./ClubCard.css";

function ClubCard({ club }) {
  return (
    <div className="club-card">

      {/* Club Icon */}
      <div className="club-card-icon">
        {club.icon}
      </div>

      {/* Club Information */}
      <div className="club-card-content">

        <h3>{club.name}</h3>

        <span className="club-category">
          {club.category}
        </span>

        <p className="club-description">
          {club.description}
        </p>

      </div>

      {/* View Club */}
      <NavLink
        to={`/clubs/${club.id}`}
        className="club-card-link"
      >
        View Club →
      </NavLink>

    </div>
  );
}

export default ClubCard;