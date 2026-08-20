import React from 'react'
import build from '../assets/building.png'
import CompanyCard from '../components/CompanyCard'
import companies from '../data/companies'

const Comapnies = () => {
  return (
    <div className='p-10'>

      <div className='flex gap-5 items-center max-w-7xl mx-auto mt-5'>

        <img src={build} alt="" className='w-50' />
        <div>
          <h1 className='text-7xl font-medium text-[#334155]'>Top Companies...</h1>
          <p className=' text-3xl pt-6 font-medium text-[#D97706] '>Explore companies hiring for jobs and internships.</p>
        </div>

      </div>

      <div className='grid grid-cols-3 gap-20 mt-20'>
        {
          companies.map((comp) => {

            return <CompanyCard

              key={comp.id}
              comp={comp}

            />
          })
        }
      </div>



    </div>
  )
}

export default Comapnies
