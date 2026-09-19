import ClubCard from "../components/ClubCard";

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
    <main className="w-full">

      {/* Page Header */}
      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-20">

          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-400">
            CAMPUS COMMUNITY
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Explore Clubs
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Discover clubs, meet like-minded students,
            and explore new interests.
          </p>

        </div>

      </section>

      {/* Clubs Content */}
      <section className="w-full bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

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