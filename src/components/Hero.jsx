import React from 'react'
import heroImg from '../assets/hero.png';
import arrow from '../assets/sent.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div className='flex justify-between bg-[#F8FAFC]'>
            <div className='mt-10 ml-10'>
                <div className='flex gap-3 h-5'>
                    <h2 className='text-sm bg-[#f8ad2c] text-white w-70 rounded-full px-4'>Find your next opportunity..</h2>
                    <img src={arrow} alt="" className='w-6' />
                </div>
                <h1 className='mt-3 leading-[0.95] text-[70px] font-bold text-[#334155] w-full'>Find Your Next
                    <br />
                    <span className='bg-linear-to-r from-[#b86609] to-[#fea305] bg-clip-text text-transparent'>
                        <Typewriter
                            words={["Dream Job", "Perfect Opportunity", "Career Move", "Professional Journey"]}
                            loop={0}
                            cursor
                            cursorColor='|'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h1>


                <p className='w-full text-[13px] mt-3 text-[#5a6c85] font-medium'>Discover thousands of opportunities from top companies and find a role <br /> that matches your skills, experience, and career goals. Explore exciting job openings, <br /> connect with leading employers.</p>


                <div className='flex w-180 bg-[#F8FAFC] rounded-full h-15 mt-10 shadow-md'>
                    <input className='flex-1  rounded-full placeholder:text-lg pl-5 outline-none' type="search" placeholder='Job title , keyword or Company' />
                    <button className='text-lg font-medium text-amber-100 hover:bg-[#D97706] bg-[#fea305] rounded-full px-6'>Search job</button>
                </div>
                <div className='flex mt-4 items-center'>
                    <h2 className='text-md font-medium text-[#334155]'>Popular Search :</h2>
                    <div className='ml-2 flex gap-5 text-sm text-white'>
                        <button className='bg-[#707d91] rounded-3xl px-2.5 '>developer</button>
                        <button className='bg-[#707d91] rounded-3xl px-2.5'>Designer</button>
                        <button className='bg-[#707d91] rounded-3xl px-2.5 '>Marketing</button>
                        <button className='bg-[#707d91] rounded-3xl px-2.5'>Data Analyst</button>
                        <button className='bg-[#707d91] rounded-3xl px-2.5'>React Developer</button>
                    </div>
                </div>
            </div>


            <div>
                <img src={heroImg} alt="" className='w-150 mr-25 mt-10' />
            </div>
        </div>
    )
}

export default Hero
