import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#334155] text-white mt-20">

            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="flex justify-between gap-10">

                    <div className="max-w-sm">
                        <h2 className="text-3xl font-bold">
                            Job<span className="text-[#F59E0B]">Finder</span>
                        </h2>

                        <p className="text-slate-300 mt-4 leading-6">
                            Discover internship opportunities, explore companies,
                            and take the first step toward your professional career.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-2 text-slate-300">
                            <p>Home</p>
                            <p>Jobs</p>
                            <p>Companies</p>
                            <p>Categories</p>
                        </div>
                    </div>


                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Resources
                        </h3>

                        <div className="flex flex-col gap-2 text-slate-300">
                            <p>About</p>
                            <p>Career Tips</p>
                            <p>Contact</p>
                            <p>Help</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            Get Started
                        </h3>

                        <p className="text-slate-300 max-w-xs leading-6">
                            Find the right internship and start building
                            your professional experience.
                        </p>

                        <button className="mt-4 bg-[#F59E0B] px-5 py-2 rounded text-white hover:scale-105 hover:bg-[#f6b443]">
                            Explore Internships
                        </button>
                    </div>

                </div>

                <div className="border-t border-slate-500 mt-10 pt-5 flex justify-between text-sm text-slate-300">

                    <p>
                        © 2026 JobFinder. All rights reserved.
                    </p>

                    <p>
                        Built with React & Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer