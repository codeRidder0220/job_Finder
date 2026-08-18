import React from 'react'
import exp from '../assets/exp.png'
import JobCard from '../components/JobCard'
import jobs from  '../data/jobs'

const Jobs = () => {
  return (
    <div>

      <div className='flex items-center gap-2 max-w-7xl mx-auto'>
        <img src={exp} alt="" className='w-40 p-6'/>
        <h1 className='text-6xl font-medium text-[#334155]  mt-10 '>Explore Jobs and Internship opportunities...</h1>
      </div>

        <div className='grid grid-cols-4 gap-5 mt-8'>

            {
                jobs.map((job) => {

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
