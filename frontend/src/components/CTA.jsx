import { NavLink } from "react-router-dom";

function CTA() {
  return (
    <section className="w-full bg-blue-600">

      <div className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-20">

        <div className="mx-auto max-w-2xl">

          {/* Label */}
          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-100">
            FIND YOUR COMMUNITY
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to find your club?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100 md:text-lg">
            Explore student clubs, discover new interests,
            and connect with people who share your passion.
          </p>

          {/* Button */}
          <NavLink
            to="/clubs"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-blue-50"
          >
            Explore Clubs →
          </NavLink>

        </div>

      </div>

    </section>
  );
}

export default CTA;