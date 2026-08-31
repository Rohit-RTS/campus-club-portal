import { NavLink } from "react-router-dom";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <div className="cta-content">

          <p className="cta-label">
            FIND YOUR COMMUNITY
          </p>

          <h2>
            Ready to find your club?
          </h2>

          <p>
            Explore student clubs, discover new interests,
            and connect with people who share your passion.
          </p>

          <NavLink
            to="/clubs"
            className="cta-button"
          >
            Explore Clubs →
          </NavLink>

        </div>

      </div>

    </section>
  );
}

export default CTA;