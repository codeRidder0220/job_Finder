import React from 'react'
import arrow from '../assets/arrow.png'

const CompanyCard = () => {
    return (
        <div className='mt-20 ml-25'>
            <div className='bg-[#eaedf1] hover:bg-[#ece0d2d0] rounded-2xl shadow-lg w-100 h-50 relative'>

                <div className='text-2xl text-[#334155] font-bold p-5'>
                    <p>Company name : <span className='text-[rgb(248,160,8)]'>Google</span></p>
                    <p>Location : <span className='text-red-800'>Bangolre</span></p>
                    <p>Category name : <span className='text-blue-800'>Technology</span></p>
                    <p>Opening : <span className='text-green-600'>24</span></p>
                </div>


                <button className='hover:cursor-pointer hover:scale-108 transition-all absolute right-4 bottom-2'><img src={arrow} alt="" className='w-10 ' /></button>


            </div>
        </div>
    )
}

export default CompanyCard
