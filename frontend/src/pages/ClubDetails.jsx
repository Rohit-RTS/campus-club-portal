
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ClubDetails() {

    const { clubId } = useParams();

  

    const [clubDetails, setClubDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchClubDetails = async () => {

            try {

                const response = await fetch(
                    `http://localhost:5000/api/club/${clubId}`
                );

                const data = await response.json();

                console.log(data);

                setClubDetails(data);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        fetchClubDetails();

    }, [clubId]);


    // Loading
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-slate-500">Loading club details...</p>
                </div>
            </div>
        );
    }


    // Club not found
    if (!clubDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">
                        Club not found
                    </h2>

                    <Link
                        to="/clubs"
                        className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Back to Clubs
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 text-white">

                <div className="max-w-7xl mx-auto px-6 py-12">

                    <Link
                        to="/clubs"
                        className="inline-flex items-center text-slate-300 hover:text-white mb-8"
                    >
                        ← Back to Clubs
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-center gap-6">

                        {/* Club Icon */}
                        <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-5xl">
                            🎓
                        </div>

                        {/* Club Info */}
                        <div>
                            <span className="inline-block px-3 py-1 mb-3 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full">
                                {clubDetails.category}
                            </span>

                            <h1 className="text-4xl md:text-5xl font-bold">
                                {clubDetails.club_name}
                            </h1>

                            <p className="mt-3 max-w-3xl text-slate-300 text-lg">
                                {clubDetails.description}
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT - Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* About Club */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                About the Club
                            </h2>

                            <p className="text-slate-600 leading-7">
                                {clubDetails.description}
                            </p>

                        </section>


                        {/* Club Members */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <div className="flex items-center justify-between mb-6">

                                <h2 className="text-2xl font-bold text-slate-800">
                                    Club Members
                                </h2>

                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                    {clubDetails.members?.length || 0} Members
                                </span>

                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                {clubDetails.members?.map((member) => (

                                    <div
                                        key={member.user_id}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition"
                                    >

                                        {/* Avatar */}
                                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                                            {member.name?.charAt(0)}
                                        </div>

                                        <div className="min-w-0">

                                            <h3 className="font-semibold text-slate-800 truncate">
                                                {member.name}
                                            </h3>

                                            <p className="text-sm text-slate-500 truncate">
                                                {member.email}
                                            </p>

                                            <p className="text-xs text-slate-400 mt-1">
                                                {member.department} • Year {member.year}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* Achievements */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <h2 className="text-2xl font-bold text-slate-800 mb-5">
                                Achievements
                            </h2>

                            <div className="space-y-4">

                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <h3 className="font-semibold text-slate-800">
                                        No achievements added yet
                                    </h3>

                                    <p className="text-sm text-slate-500 mt-1">
                                        Club achievements will appear here.
                                    </p>
                                </div>

                            </div>

                        </section>


                        {/* Events */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <h2 className="text-2xl font-bold text-slate-800 mb-5">
                                Upcoming Events
                            </h2>

                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">

                                <h3 className="font-semibold text-slate-800">
                                    No upcoming events
                                </h3>

                                <p className="text-sm text-slate-500 mt-1">
                                    Upcoming club events will appear here.
                                </p>

                            </div>

                        </section>

                    </div>


                    {/* RIGHT SIDEBAR */}
                    <aside className="space-y-6">

                        {/* Faculty Coordinator */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-slate-800 mb-5">
                                Faculty Coordinator
                            </h2>

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold">
                                    {clubDetails.faculty_name?.charAt(0)}
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-800">
                                        {clubDetails.faculty_name}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Faculty
                                    </p>

                                </div>

                            </div>

                            <div className="mt-5 pt-5 border-t border-slate-100">

                                <p className="text-sm text-slate-500">
                                    Email
                                </p>

                                <p className="text-sm font-medium text-slate-700 break-all mt-1">
                                    {clubDetails.faculty_email}
                                </p>

                            </div>

                        </section>


                        {/* Club Head */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-slate-800 mb-5">
                                Club Head
                            </h2>

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
                                    {clubDetails.club_head_name?.charAt(0)}
                                </div>

                                <div>

                                    <h3 className="font-semibold text-slate-800">
                                        {clubDetails.club_head_name}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Club Head
                                    </p>

                                </div>

                            </div>

                            <div className="mt-5 pt-5 border-t border-slate-100">

                                <p className="text-sm text-slate-500">
                                    Email
                                </p>

                                <p className="text-sm font-medium text-slate-700 break-all mt-1">
                                    {clubDetails.club_head_email}
                                </p>

                            </div>

                        </section>


                        {/* Club Information */}
                        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">

                            <h2 className="text-lg font-bold text-slate-800 mb-5">
                                Club Information
                            </h2>

                            <div className="space-y-4">

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Category
                                    </p>

                                    <p className="font-medium text-slate-800">
                                        {clubDetails.category}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Club ID
                                    </p>

                                    <p className="font-medium text-slate-800">
                                        #{clubDetails.club_id}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Members
                                    </p>

                                    <p className="font-medium text-slate-800">
                                        {clubDetails.members?.length || 0}
                                    </p>
                                </div>

                            </div>

                        </section>

                    </aside>

                </div>

            </main>

        </div>
    );
}

