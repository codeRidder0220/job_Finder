import { Link, useParams } from "react-router-dom";
import jobs from "../data/jobs";

const JobDetail = () => {

    const { id } = useParams();

    const job = jobs.find((job) => job.id === Number(id));

    if (!job) {
        return (
            <div className="text-center py-20">

                <h1 className="text-3xl font-bold">
                    Job Not Found
                </h1>

                <Link
                    to="/jobs"
                    className="text-[#F59E0B]"
                >
                    Back to Jobs
                </Link>

            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto py-12 px-6">

            <Link
                to="/jobs"
                className="text-[#D97706] font-medium"
            >
                ← Back to Jobs
            </Link>


            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 mt-6">

                <div className="flex justify-between items-start">

                    <div>

                        <h1 className="text-4xl font-bold text-[#334155]">
                            {job.title}
                        </h1>

                        <p className="text-[#F59E0B] text-xl font-medium mt-2">
                            {job.company}
                        </p>

                    </div>


                    <span className="bg-[#FFF3D6] text-[#D97706] px-4 py-2 rounded-full">
                        {job.type}
                    </span>

                </div>


                <div className="grid grid-cols-2 gap-6 mt-8">

                    <div>
                        <p className="text-gray-400 text-sm">
                            Location
                        </p>

                        <p className="text-[#334155] font-medium mt-1">
                            {job.location}
                        </p>
                    </div>


                    <div>
                        <p className="text-gray-400 text-sm">
                            Work Mode
                        </p>

                        <p className="text-[#334155] font-medium mt-1">
                            {job.mode}
                        </p>
                    </div>


                    <div>
                        <p className="text-gray-400 text-sm">
                            Salary
                        </p>

                        <p className="text-[#334155] font-medium mt-1">
                            {job.salary}
                        </p>
                    </div>


                    <div>
                        <p className="text-gray-400 text-sm">
                            Category
                        </p>

                        <p className="text-[#334155] font-medium mt-1">
                            {job.category}
                        </p>
                    </div>

                </div>


                <div className="border-t mt-8 pt-8">

                    <h2 className="text-2xl font-bold text-[#334155]">
                        About this role
                    </h2>

                    <p className="text-gray-500 leading-7 mt-3">
                        We are looking for talented professionals who are
                        passionate about building products, solving problems
                        and growing their technical skills. This opportunity
                        provides a chance to work on real-world projects and
                        gain valuable professional experience.
                    </p>

                </div>


                <button className="mt-8 bg-[#F59E0B] hover:bg-[#D97706] text-white px-7 py-3 rounded-lg font-medium">
                    Apply Now
                </button>

            </div>

        </div>
    )
}

export default JobDetail;
