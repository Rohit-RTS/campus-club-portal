import { NavLink } from "react-router-dom";
import ClubCard from "./ClubCard";

import "./FeaturedClubs.css";

function FeaturedClubs() {
  const featuredClubs = [
    {
      id: 1,
      name: "Coding Club",
      category: "Technology",
      description: "Learn programming and build real-world projects.",
      icon: "💻",
    },
    {
      id: 2,
      name: "Robotics Club",
      category: "Engineering",
      description: "Explore robotics, automation and hardware projects.",
      icon: "🤖",
    },
    {
      id: 3,
      name: "Cultural Club",
      category: "Arts & Culture",
      description: "Participate in creative and cultural activities.",
      icon: "🎭",
    },
  ];

  return (
    <section className="featured-clubs">

      <div className="featured-clubs-container">

        {/* Section Header */}
        <div className="featured-clubs-header">

          <div>
            <p className="section-label">
              DISCOVER
            </p>

            <h2>Featured Clubs</h2>

            <p className="section-description">
              Explore communities and find a club that matches your interests.
            </p>
          </div>

          <NavLink
            to="/clubs"
            className="view-all-clubs"
          >
            View All Clubs →
          </NavLink>

        </div>

        {/* Club Cards */}
        <div className="featured-clubs-grid">

          {featuredClubs.map((club) => (
            <ClubCard
              key={club.id}
              club={club}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedClubs;