import React, { useState } from 'react'

const Applications = () => {

    const [applications, setApplications] = useState(
        JSON.parse(localStorage.getItem("applications")) || []
    );


    const deleteApplication = (id) => {

        const updatedApplications = applications.filter(
            (application) => application.id !== id
        );

        setApplications(updatedApplications);

        localStorage.setItem(
            "applications",
            JSON.stringify(updatedApplications)
        );
    };


    return (

        <div className="max-w-6xl mx-auto px-6 py-12">

            <h1 className="text-4xl font-bold text-[#334155]">
                My Applications
            </h1>

            <p className="text-gray-500 mt-2">
                Track the jobs and internships you have applied for.
            </p>


            {
                applications.length === 0 ? (

                    <div className="text-center py-20">

                        <h2 className="text-2xl font-semibold text-red-500">
                            No Applications Yet
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Start applying for jobs and internships to see them here.
                        </p>

                    </div>

                ) : (

                    <div className="mt-8 space-y-5">

                        {
                            applications.map((application) => (

                                <div
                                    key={application.id}
                                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
                                >

                                    <div className="flex justify-between">

                                        <div>

                                            <h2 className="text-xl font-semibold text-[#334155]">
                                                {application.jobTitle}
                                            </h2>

                                            <p className="text-gray-500 mt-1">
                                                {application.company}
                                            </p>

                                            <p className="text-gray-400 text-sm mt-1">
                                                {application.location}
                                            </p>

                                        </div>


                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full h-fit text-sm font-medium">
                                            {application.status}
                                        </span>

                                    </div>


                                    <div className="border-t mt-5 pt-5 flex justify-between items-center">

                                        <div>

                                            <p className="text-sm text-gray-400">
                                                Applicant
                                            </p>

                                            <p className="text-[#334155] font-medium">
                                                {application.name}
                                            </p>

                                        </div>


                                        <button
                                            onClick={() => deleteApplication(application.id)}
                                            className="text-red-500 bg-red-200 px-4 py-2 rounded-full hover:text-red-700 text-sm font-medium"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>
    )
}

export default Applications