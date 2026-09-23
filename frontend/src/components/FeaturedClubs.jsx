import { NavLink } from "react-router-dom";
import ClubCard from "./ClubCard";

import { ClubsContext } from "../context/ClubsContext";
import { useContext } from "react";

function FeaturedClubs() {

    const { clubs } = useContext(ClubsContext);

    return (
        <section className="w-full bg-slate-50">

            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                    <div>
                        <p className="mb-2 text-sm font-semibold tracking-widest text-blue-600">
                            DISCOVER
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                            Featured Clubs
                        </h2>

                        <p className="mt-3 max-w-xl text-slate-600">
                            Explore communities and find a club that matches your interests.
                        </p>
                    </div>

                    <NavLink
                        to="/clubs"
                        className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                    >
                        View All Clubs →
                    </NavLink>

                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {clubs.slice(0, 3).map((club) => (
                        <ClubCard
                            key={club.club_id}
                            club={club}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default FeaturedClubs;