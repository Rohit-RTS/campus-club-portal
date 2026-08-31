import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stat-item">
          <h2>25+</h2>
          <p>Active Clubs</p>
        </div>

        <div className="stat-item">
          <h2>50+</h2>
          <p>Upcoming Events</p>
        </div>

        <div className="stat-item">
          <h2>1000+</h2>
          <p>Student Members</p>
        </div>

        <div className="stat-item">
          <h2>10+</h2>
          <p>Club Categories</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;