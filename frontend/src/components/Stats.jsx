function Stats(props) {
  return (
    <section className="w-full bg-slate-50">

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-10">

        {/* Active Clubs */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            25+
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Active Clubs
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            50+
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Upcoming Events
          </p>
        </div>

        {/* Student Members */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            1000+
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Student Members
          </p>
        </div>

        {/* Club Categories */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            10+
          </h2>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Club Categories
          </p>
        </div>

      </div>

    </section>
  );
}

export default Stats;