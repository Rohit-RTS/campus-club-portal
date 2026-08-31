import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-tag">
            YOUR CAMPUS. YOUR COMMUNITY.
          </p>

          <h1>
            Discover Clubs.
            <br />
            <span>Build Your Community.</span>
          </h1>

          <p className="hero-description">
            Explore student clubs, discover upcoming events,
            and connect with communities that match your interests.
          </p>

          <div className="hero-buttons">

            <a href="/clubs" className="hero-primary-btn">
              Explore Clubs
            </a>

            <a href="/events" className="hero-secondary-btn">
              View Events
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-card">
            <div className="hero-card-icon">
              ✦
            </div>

            <div>
              <h3>Find Your Club</h3>
              <p>Discover communities that match your interests.</p>
            </div>
          </div>

          <div className="hero-card hero-card-small">
            <div className="hero-card-icon">
              +
            </div>

            <div>
              <h3>Join & Connect</h3>
              <p>Meet students with similar interests.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;