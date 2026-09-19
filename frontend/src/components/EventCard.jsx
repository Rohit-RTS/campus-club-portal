import { NavLink } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">

      {/* Date */}
      <div className="flex h-fit min-w-16 flex-col items-center rounded-xl bg-blue-50 px-3 py-3 text-center">

        <span className="text-2xl font-bold text-blue-600">
          {event.day}
        </span>

        <span className="text-sm font-semibold uppercase text-slate-500">
          {event.month}
        </span>

      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">

        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {event.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          {event.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          Organized by {event.club}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {event.location}
        </p>

        <NavLink
          to={`/events/${event.id}`}
          className="mt-5 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
        >
          View Event →
        </NavLink>

      </div>

    </div>
  );
}

export default EventCard;