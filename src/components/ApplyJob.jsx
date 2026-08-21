import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import jobs from '../data/jobs';

const ApplyJob = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        coverLetter: "",
    });

    const [submit, setSubmit] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
            alert("please fill all required fields");
            return;
        }

        setSubmit(true);

    }



    const { id } = useParams();

    const job = jobs.find(
        (job) => job.id === Number(id)
    );


    return (
        <div className="max-w-3xl mx-auto py-12 px-6">

            <div className="mb-8">

                <p className="text-[#F59E0B] font-medium">
                    Applying for
                </p>

                <h1 className="text-3xl font-bold text-[#334155] mt-1">
                    {job.title}
                </h1>

                <p className="text-gray-500 mt-1">
                    {job.company} • {job.location}
                </p>

            </div>


            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

                <h2 className="text-2xl font-bold text-[#334155]">
                    Application Form
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                    Fill in your details to apply for this position.
                </p>

                {
                    submit && (
                        <div className="mb-6 mt-5 bg-green-100 text-green-700 p-4 rounded-lg">
                            Application submitted successfully!
                        </div>
                    )
                }


                <form className="mt-8" onSubmit={handlesubmit}>

                    <div className="grid grid-cols-2 gap-5">

                        <div>
                            <label className="block text-sm font-medium text-[#334155] mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F59E0B]"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-[#334155] mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F59E0B]"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-[#334155] mb-2">
                                Phone
                            </label>

                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F59E0B]"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-[#334155] mb-2">
                                Experience
                            </label>

                            <select
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F59E0B]"
                            >
                                <option>Select experience</option>
                                <option>Fresher</option>
                                <option>0 - 1 Year</option>
                                <option>1 - 3 Years</option>
                                <option>3+ Years</option>
                            </select>
                        </div>

                    </div>


                    <div className="mt-5">

                        <label className="block text-sm font-medium text-[#334155] mb-2">
                            Resume
                        </label>

                        <input
                            type="file"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                        />

                    </div>


                    <div className="mt-5">

                        <label className="block text-sm font-medium text-[#334155] mb-2">
                            Cover Letter
                        </label>

                        <textarea
                            value={formData.coverLetter}
                            onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                            rows="6"
                            placeholder="Tell the employer why you are a good fit..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#F59E0B]"
                        />

                    </div>


                    <button
                        type="submit"
                        className="mt-6 hover:scale-102 hover:cursor-pointer bg-[#F59E0B] hover:bg-[#D97706] text-white px-7 py-3 rounded-lg font-medium"
                    >
                        Submit Application
                    </button>

                </form>

            </div>

        </div>
    )
}

export default ApplyJob
