import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full bg-white">

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10">

        {/* Hero Content */}
        <div>

          <p className="mb-5 text-sm font-semibold tracking-widest text-blue-600">
            YOUR CAMPUS. YOUR COMMUNITY.
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Discover Clubs.
            <br />
            <span className="text-blue-600">
              Build Your Community.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Explore student clubs, discover upcoming events,
            and connect with communities that match your interests.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <NavLink
              to="/clubs"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Explore Clubs
            </NavLink>

            <NavLink
              to="/events"
              className="rounded-lg border border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-50"
            >
              View Events
            </NavLink>

          </div>

        </div>

        {/* Hero Visual */}
        <div className="flex flex-col items-center gap-5 md:items-end">

          {/* Card 1 */}
          <div className="flex w-full max-w-md items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
            
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
              ✦
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Find Your Club
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Discover communities that match your interests.
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg md:mr-12">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
              +
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Join & Connect
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Meet students with similar interests.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;