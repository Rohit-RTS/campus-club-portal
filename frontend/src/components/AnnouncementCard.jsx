import { NavLink } from "react-router-dom";

function AnnouncementCard({ announcement }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">

      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
        !
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">

        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {announcement.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {announcement.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {announcement.description}
        </p>

        <p className="mt-3 text-xs text-slate-500">
          {announcement.date}
        </p>

        <NavLink
          to={`/announcements/${announcement.id}`}
          className="mt-5 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
        >
          Read More →
        </NavLink>

      </div>

    </div>
  );
}

export default AnnouncementCard;