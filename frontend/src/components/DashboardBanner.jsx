export default function DashboardBanner() {
  return (
    <section className="w-full min-h-[280px] rounded-2xl bg-gradient-to-r from-slate-800 to-slate-600 px-12 py-12 flex items-center text-white">

      <div className="max-w-2xl">

        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
          Campus Club Portal
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          Welcome back, Rohit 👋
        </h1>

        <p className="mb-6 text-base leading-7 text-slate-200">
          Discover clubs, explore upcoming events, and stay updated
          with everything happening on campus.
        </p>

        <button className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-200">
          Explore Clubs
        </button>

      </div>

    </section>
  );
}

