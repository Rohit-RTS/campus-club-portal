
import { useContext } from "react";
import ClubCard from "../components/ClubCard";
import { ClubsContext } from "../context/ClubsContext";


function Clubs() {

  const {clubs} = useContext(ClubsContext);



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