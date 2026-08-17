import React from 'react'
import open from '../assets/open.png'
import close from '../assets/close.png'
import ab3 from '../assets/ab3.png'
import abb from '../assets/abb.png'

const About = () => {
    return (
        <div className='bg-[#F8FAFC]'>

            <div className='pt-20 max-w-7xl mx-auto px-8'>


                <div className='flex justify-between items-center gap-20'>

                    <div className='bg-[rgb(255,226,177)] w-1/2 p-10 shadow-lg rounded-full hover:scale-103 hover:bg-[#fde6cd] transition-all'>


                        <div className='flex justify-center items-center'>

                            <div>
                                <img
                                    src={open}
                                    alt=""
                                    className='w-15'
                                />
                            </div>

                            <h1 className='text-4xl text-[#334155] font-bold ml-5'>
                                About Job Finder
                            </h1>

                        </div>

                        <p className='max-w-lg mx-6 mt-5 text-[16px] text-[#334155] leading-8'>

                            JobFinder is a simple and powerful platform designed
                            to help students and freshers discover internship
                            opportunities, explore different roles and companies,
                            and find opportunities that match their skills and
                            career goals.

                        </p>

                    </div>

                    <div className='w-1/2 max-w-xl'>
                        <img
                            src={ab3}
                            alt=""
                            className='w-[77%]'
                        />
                    </div>

                </div>



                <div className='flex justify-between items-center gap-15 mt-10'>

                    <div className='w-1/2 max-w-xl'>
                        <img
                            src={abb}
                            alt=""
                            className='w-[80%]'
                        />
                    </div>

                    <div className='bg-[#677890] w-1/2 p-10 rounded-full shadow-lg mb-10 hover:scale-103 hover:bg-[#7285a1] transition-all'>


                        <p className='text-[#fad0a1] mx-6 text-[16px] font-medium leading-8'>

                            JobFinder is a platform where students and freshers
                            can easily discover

                            <span className='text-[#D97706]'>
                                internship opportunities
                            </span>

                            from different companies. Explore roles based on
                            your skills, interests, and career goals, and find
                            opportunities that help you gain valuable real-world
                            experience.

                        </p>

                        <div className='flex justify-end px-5'>
                            <img
                                src={close}
                                alt=""
                                className='w-15'
                            />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About