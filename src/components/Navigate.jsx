import React from 'react'
import job from '../assets/job.png'
import res from '../assets/resource.png'
import categ from '../assets/category.png'
import company from '../assets/company.png'
import dash from '../assets/dashboard.png'
import trend from '../assets/trending.png'

const Navigate = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-5 w-225 mx-auto '>

                <div className='shadow-md h-30 rounded-2xl hover:scale-105 transition-all'>
                    <div className='flex items-center pt-4 pl-4 gap-2'>
                        <div><img src={job} alt="" className="w-10" /></div>
                        <h2 className='text-3xl font-bold text-[#334155]'>Jobs</h2>
                    </div>
                    <h3 className='text-sm pl-17'>Find jobs....</h3>

                    <div className='flex justify-end mt-2 pr-5'>
                        <a className='text-[#F59E0b] hover:text-[#D97706] border-b' href="">View Jobs</a>
                    </div>

                </div>

                <div className='shadow-md h-30 rounded-2xl hover:scale-105 transition-all'>
                    <div className='flex items-center pt-4 pl-4 gap-2'>
                        <div><img src={company} alt="" className="w-10" /></div>
                        <h2 className='text-3xl font-bold text-[#334155]'>Companies</h2>
                    </div>
                    <h3 className='text-sm pl-17'>explore companies...</h3>

                    <div className='flex justify-end mt-2 pr-5'>
                        <a className='text-[#F59E0b] hover:text-[#D97706] border-b' href="">Explore</a>
                    </div>

                </div>

                <div className='shadow-md h-30 rounded-2xl hover:scale-105 transition-all'>
                    <div className='flex items-center pt-4 pl-4 gap-2'>
                        <div><img src={categ} alt="" className="w-10" /></div>
                        <h2 className='text-3xl font-bold text-[#334155]'>Categories</h2>
                    </div>
                    <h3 className='text-sm pl-17'>browse jobs by categories...</h3>

                    <div className='flex justify-end mt-2 pr-5'>
                        <a className='text-[#F59E0b] hover:text-[#D97706] border-b' href="">Browse</a>
                    </div>

                </div>

                <div className='shadow-md h-30 rounded-2xl hover:scale-105 transition-all'>
                    <div className='flex items-center pt-4 pl-4 gap-2'>
                        <div><img src={res} alt="" className="w-10" /></div>
                        <h2 className='text-3xl font-bold text-[#334155]'>Resources</h2>
                    </div>
                    <h3 className='text-sm pl-17'>career help & resources...</h3>

                    <div className='flex justify-end mt-2 pr-5'>
                        <a className='text-[#F59E0b] hover:text-[#D97706] border-b' href="">Explore</a>
                    </div>

                </div>

                <div className='shadow-md h-30 rounded-2xl hover:scale-105 transition-all'>
                    <div className='flex items-center pt-4 pl-4 gap-2'>
                        <div><img src={dash} alt="" className="w-10" /></div>
                        <h2 className='text-3xl font-bold text-[#334155]'>Dashboard</h2>
                    </div>
                    <h3 className='text-sm pl-17'>track your application...</h3>

                    <div className='flex justify-end mt-2 pr-5'>
                        <a className='text-[#F59E0b] hover:text-[#D97706] border-b' href="">Open</a>
                    </div>

                </div>

                <div className='shadow-md h-30 rounded-2xl hover:scale-105 transition-all'>
                    <div className='flex items-center pt-4 pl-4 gap-2'>
                        <div><img src={trend} alt="" className="w-10" /></div>
                        <h2 className='text-3xl font-bold text-[#334155]'>Trending</h2>
                    </div>
                    <h3 className='text-sm pl-17'>Find trending jobs...</h3>

                    <div className='flex justify-end mt-2 pr-5'>
                        <a className='text-[#F59E0b] hover:text-[#D97706] border-b' href="">view trending</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navigate
