import ClubCard from "../components/ClubCard";
// import ClubFilters from "../components/ClubFilters";

import "./Clubs.css";

function Clubs() {
  const clubs = [
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
    {
      id: 4,
      name: "Photography Club",
      category: "Arts & Culture",
      description: "Learn photography and capture memorable moments.",
      icon: "📷",
    },
    {
      id: 5,
      name: "Sports Club",
      category: "Sports",
      description: "Take part in sports activities and campus tournaments.",
      icon: "⚽",
    },
    {
      id: 6,
      name: "Entrepreneurship Club",
      category: "Business",
      description: "Explore startups, business ideas and entrepreneurship.",
      icon: "💡",
    },
  ];

  return (
    <main className="clubs-page">

      {/* Page Header */}

      <section className="clubs-header">

        <div className="clubs-header-container">

          <p className="clubs-label">
            CAMPUS COMMUNITY
          </p>

          <h1>Explore Clubs</h1>

          <p>
            Discover clubs, meet like-minded students,
            and explore new interests.
          </p>

        </div>

      </section>

      {/* Filters */}

      <section className="clubs-content">

        <div className="clubs-container">


          {/* Clubs Grid */}

          <div className="clubs-grid">

            {clubs.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Clubs;