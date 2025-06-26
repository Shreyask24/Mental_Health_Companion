import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// src/pages/Home.jsx
export default function Home() {
    return (
        <>
            <section className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center px-6">
                <div className="max-w-2xl text-center">
                    <h2 className="text-4xl font-bold text-amber-800 mb-4">
                        Your Mental Wellbeing Matters
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Track your mood, manage your stress, and build a self-care routine tailored to your needs.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/mood"
                            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/routine"
                            className="border border-amber-500 text-amber-700 px-4 py-2 rounded-md hover:bg-amber-100 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
