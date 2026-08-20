import React from 'react'
import loc from '../assets/location.png'
import house from '../assets/house.png'
import salary from '../assets/salary.png'
import jobb from '../assets/job.png'


const JobCard = ({ job }) => {
    return (
        <div>
            <div className='bg-[#fef7ea] w-70 h-100 rounded-xl ml-10 mt-10 shadow-md hover:-translate-y-1 transition-all'>


                <div className='flex items-center justify-center bg-[#526176] rounded-t-xl'>
                    <h1 className='p-3 text-md font-bold bg-linear-to-r from-[#D97706] to-[#fac486] bg-clip-text text-transparent'>{job.title}</h1>
                </div>

                <div className='flex items-center justify-center mt-4'>
                    <p className='text-4xl font-bold  text-[#334155] [text-shadow:1px_2px_3px_rgba(51,65,85,0.5)]'>{job.company}</p>
                </div>

                <div className='mt-8 text-[#334155] cursor-default  mx-8'>
                    <p className='flex gap-4 font-bold text-xl hover:[-webkit-text-stroke:0.5px_#D97706] hover:scale-101 hover:text-[#111] transition-all pb-2'><img src={loc} alt="" className='w-7' />{job.location}</p>
                    <p className='flex gap-4 font-bold text-xl hover:[-webkit-text-stroke:0.5px_#D97706] hover:scale-101 hover:text-[#111] transition-all pb-2'><img src={jobb} alt="" className='w-7' />{job.type}</p>
                    <p className='flex gap-4 font-bold text-xl hover:[-webkit-text-stroke:0.5px_#D97706] hover:scale-101 hover:text-[#111] transition-all pb-2'><img src={house} alt="" className='w-7' />{job.mode}</p>
                    <p className='flex gap-4 font-bold text-xl hover:[-webkit-text-stroke:0.5px_#D97706] hover:scale-101 hover:text-[#111] transition-all pb-2'><img src={salary} alt="" className='w-7' />{job.salary}</p>

                </div>

                <div className='flex justify-center mt-8'>
                    <div className='bg-[#526176] rounded-full shadow-lg hover:scale-102'>
                        <p className='p-3 px-6 font-bold bg-linear-to-r from-[#f68403] to-[#e7a25e] bg-clip-text text-transparent'>
                            {job.category}
                        </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default JobCard
