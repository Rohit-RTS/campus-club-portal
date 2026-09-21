import EventCard from "../components/EventCard";

export default function  DashEvents() {
  const events = [
    {
      id: 1,
      title: "Hackathon 2026",
      category: "Technology",
      club: "Coding Club",
      day: "28",
      month: "SEP",
      location: "Main Auditorium",
    },
    {
      id: 2,
      title: "Robotics Workshop",
      category: "Workshop",
      club: "Robotics Club",
      day: "02",
      month: "OCT",
      location: "Innovation Lab",
    },
    {
      id: 3,
      title: "Cultural Fest",
      category: "Cultural",
      club: "Cultural Club",
      day: "10",
      month: "OCT",
      location: "College Ground",
    },
    {
      id: 4,
      title: "Web Development Workshop",
      category: "Technology",
      club: "Coding Club",
      day: "15",
      month: "OCT",
      location: "Computer Lab",
    },
    
  ];

  return (
    <main className="w-full">

      {/* Page Header */}
      <section className="bg-slate-900">

        <div className="mx-auto  py-5 text-center md:py-20">

        
          <h1 className="text-4xl font-bold text-white md:text-5xl">
              Your Events
          </h1>

      

        </div>

      </section>

      {/* Events Content */}
      <section className="w-full bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

