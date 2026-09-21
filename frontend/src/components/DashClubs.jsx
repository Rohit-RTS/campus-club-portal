import ClubCard from "../components/ClubCard";

export default function DashClubs() {
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
    }
  ]

  return (
    <main className="w-full">

      {/* Page Header */}
      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-5 text-center md:px-10 md:py-20">

        

          <h1 className="text-4xl font-bold text-white md:text-5xl">
           Member of
          </h1>

         
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

