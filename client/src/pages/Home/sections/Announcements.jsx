import "./Announcements.css";
import {
  Megaphone,
  Trophy,
  Mic2,
  LibraryBig,
} from "lucide-react";

const items = [
  {
    icon: <Megaphone size={20} />,
    title: "Semester Registration Open",
    date: "Jun 25, 2026",
    text: "Register for fall semester clubs and activities by July 5th.",
  },
  {
    icon: <Trophy size={20} />,
    title: "Inter-College Sports Meet",
    date: "Jun 22, 2026",
    text: "Tryouts for the annual sports meet begin next Monday at 7 AM.",
  },
  {
    icon: <Mic2 size={20} />,
    title: "Guest Lecture: AI in Industry",
    date: "Jun 20, 2026",
    text: "Renowned researcher Dr. Mehta will speak in Auditorium B at 5 PM.",
  },
  {
    icon: <LibraryBig size={20} />,
    title: "Library Hours Extended",
    date: "Jun 18, 2026",
    text: "The central library will stay open until midnight during exam week.",
  },
];

export default function Announcement() {
  return (
    <section className="announce section" id="announcements">
      <div className="container">
        <div className="announce-head">
          <h2 className="section-heading">Latest Announcements</h2>
          <p className="section-sub">
            Stay informed with notices from your college.
          </p>
        </div>

        <div className="announce-list">
          {items.map((item) => (
            <article key={item.title} className="announce-card">
              <div className="announce-icon">{item.icon}</div>

              <div className="announce-body">
                <div className="announce-row">
                  <h3 className="announce-title">{item.title}</h3>
                  <span className="announce-date">{item.date}</span>
                </div>

                <p className="announce-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}