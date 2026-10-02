import { Link } from "react-router-dom";

function ClubCard({ club }) {
  return (
    <div className="p-5 bg-white rounded-2xl">

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

      <Link to={`/clubs/${club.club_id}`}>
        View Club →
      </Link>

    </div>
  );
}

export default ClubCard;