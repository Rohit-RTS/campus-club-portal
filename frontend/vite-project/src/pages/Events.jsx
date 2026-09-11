import EventCard from "../components/EventCard";
// import EventFilters from "../components/EventFilters";

import "./Events.css";

function Events() {
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
    {
      id: 5,
      title: "Photography Walk",
      category: "Arts",
      club: "Photography Club",
      day: "20",
      month: "OCT",
      location: "Campus",
    },
    {
      id: 6,
      title: "Entrepreneurship Talk",
      category: "Business",
      club: "Entrepreneurship Club",
      day: "25",
      month: "OCT",
      location: "Seminar Hall",
    },
  ];

  return (
    <main className="events-page">

      {/* Page Header */}

      <section className="events-header">

        <div className="events-header-container">

          <p className="events-label">
            CAMPUS ACTIVITIES
          </p>

          <h1>Upcoming Events</h1>

          <p>
            Discover workshops, competitions, cultural activities,
            and events happening around campus.
          </p>

        </div>

      </section>

      {/* Events Content */}

      <section className="events-content">

        <div className="events-container">

          {/* <EventFilters /> */}

          {/* Events Grid */}

          <div className="events-grid">

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

export default Events;