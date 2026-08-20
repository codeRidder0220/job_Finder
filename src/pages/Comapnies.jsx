import React from 'react'
import build from '../assets/building.png'

const Comapnies = () => {
  return (
    <div>

      <div className='flex gap-5 items-center max-w-7xl mx-auto mt-8'>
        
        <img src={build} alt="" className='w-50'/>
        <div>
        <h1 className='text-8xl font-bold text-[#334155]'>Top Companies...</h1>
        <p className=' text-3xl pt-6 pl-5 font-medium text-[#D97706] '>Explore companies hiring for jobs and internships.</p>
        </div>
       
      </div>



      
      
    </div>
  )
}

export default Comapnies
