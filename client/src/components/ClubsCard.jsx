import "./ClubsCard.css";

const clubs = [
  {
    name: "Coding Club",
    desc: "Ship side-projects, prep for interviews, and contribute to open-source with peers.",
    tag: "Technology",
    members: 312,
    icon: "</>",
    accent: "#4f46e5",
    gradient: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
  },
  {
    name: "Robotics Club",
    desc: "Design, build, and compete with autonomous robots in regional tournaments.",
    tag: "Engineering",
    members: 198,
    icon: "⚙",
    accent: "#0891b2",
    gradient: "linear-gradient(135deg, #ecfeff, #cffafe)",
  },
  {
    name: "Photography Club",
    desc: "Weekly photo walks, peer critiques, and seasonal exhibitions across campus.",
    tag: "Creative",
    members: 154,
    icon: "◉",
    accent: "#b45309",
    gradient: "linear-gradient(135deg, #fef3c7, #fde68a)",
  },
  {
    name: "Dance Club",
    desc: "From contemporary to hip-hop — train, choreograph, and perform on the big stage.",
    tag: "Performing Arts",
    members: 221,
    icon: "♪",
    accent: "#be185d",
    gradient: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  },
];

function ClubsCard() {
  return (
    <section className="clubs">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Featured</span>
          <h2>Clubs students actually love</h2>
          <p>
            A handful of the most active communities this semester. Find your
            people, find your craft.
          </p>
        </div>

        <div className="clubs-grid">
          {clubs.map((club) => (
            <div className="club-card" key={club.name}>
              <div
                className="club-image"
                style={{ background: club.gradient }}
              >
                <div
                  className="club-logo"
                  style={{ color: club.accent }}
                >
                  {club.icon}
                </div>

                <span
                  className="club-badge"
                  style={{ color: club.accent }}
                >
                  {club.tag}
                </span>
              </div>

              <div className="club-body">
                <div className="club-head">
                  <h3>{club.name}</h3>

                  <span className="club-members">
                    {club.members} Members
                  </span>
                </div>

                <p>{club.desc}</p>

                <div className="club-foot">
                  <div className="club-avatars">
                    <span className="av av-1">A</span>
                    <span className="av av-2">M</span>
                    <span className="av av-3">K</span>
                  </div>

                  <button className="club-join">
                    Join →
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

export default ClubsCard;