import React from 'react'
import arrow from '../assets/arrow.png'
import companies from '../data/companies'

const CompanyCard = ({comp}) => {
    return (
        <div>
            <div className='bg-[#eaedf1] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all  relative'>

                <div className='text-lg text-[#334155] font-medium p-8'>
                    <p>Company name : <span className='text-[#D97706] '>{comp.name}</span></p>
                    <p>Location : <span className='text-red-800'>{comp.location}</span></p>
                    <p>Category name : <span className='text-blue-800'>{comp.category}</span></p>
                    <p>Opening : <span className='text-green-600'>{comp.openings}</span></p>
                </div>


                <button className='hover:cursor-pointer hover:scale-108 transition-all absolute right-4 bottom-2'><img src={arrow} alt="" className='w-10 ' /></button>


            </div>
        </div>
    )
}

export default CompanyCard
