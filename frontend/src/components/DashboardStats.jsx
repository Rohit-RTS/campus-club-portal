export default function DashboardStats() {
  return (
    <section className="w-full bg-slate-50">

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-10">

        {/* Active Clubs */}
        <div className="text-center">
         

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            My Clubs
          </p>

           <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            3+
          </h2>
        </div>

        {/* Upcoming Events */}
        <div className="text-center">
        

          <p className="mt-2 text-sm text-slate-600 md:text-base">
           Events
          </p>
            <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            10+
          </h2>
        </div>

        {/* Student Members */}
        <div className="text-center">
        

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Registerd
          </p>
            <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            1000+
          </h2>
        </div>

        {/* Club Categories */}
        <div className="text-center">
         
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            News
          </p>
           <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            10+
          </h2>

        </div>

      </div>

    </section>
  );
}
