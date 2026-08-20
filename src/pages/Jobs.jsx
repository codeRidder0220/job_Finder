import React from 'react'
import { useState } from 'react'
import exp from '../assets/exp.png'
import JobCard from '../components/JobCard'
import jobs from '../data/jobs'

const Jobs = () => {

  const [search, setSearch] = useState("");
  const [categ, setCateg] = useState("All");

  const filterJob = jobs.filter((job) => {

    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());

    const matchCateg = categ === "All" || job.category === categ;

    return matchSearch && matchCateg;

  })


  return (
    <div>

      <div className='flex '>
        <div className='flex items-center gap-2 max-w-7xl mx-auto'>
          <img src={exp} alt="" className='w-40 p-6' />
          <h1 className='text-6xl font-medium text-[#334155]  mt-10 '>Explore Jobs and Internship opportunities...</h1>
        </div>

        <div className='flex flex-col gap-3 mt-10 mr-10'>
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search by job title'
              className='border border-gray-400 rounded-lg px-2 py-1 max-w-xl outline-none placeholder:text-lg placeholder:text-[#D97706]  focus:border-[#F59E0B]'

            />
          </div>

          <div>
            <select
              value={categ}
              className='border border-gray-400 rounded-lg px-3 py-1  outline-none'
              onChange={(e) => setCateg(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Data Science">Data Science</option>
              <option value="Marketing">Marketing</option>
              <option value="Data Structure">Data Structure</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>

            </select>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-5 mt-8'>

        {
          filterJob.map((job) => {

            return <JobCard
              key={job.id}
              job={job}
            />
          })
        }

      </div>


    </div>
  )
}

export default Jobs
