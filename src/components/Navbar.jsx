import React from 'react'
import logo from "../assets/email.png";
import dark from "../assets/moon.png";
import light from "../assets/light.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-[#F8FAFC]/10 border-b border-b-[#334155] p-3 sticky top-0 z-20 backdrop-blur-2xl' >
            <div className='flex items-center ml-30 gap-2'>
                <img src={logo} alt="" className='w-10 h-9' />
                <h1 className='text-[25px] font-bold text-[#334155]'>Job <span className='text-[#F59E0b]'>Finder</span></h1>
            </div>
            <div className='flex gap-7 text-[#334155] font-medium text-sm'>

                <NavLink to='/' className={({isActive}) => isActive ? "text-[#F59E0b]" : ""} >Home</NavLink>
                <NavLink to='/jobs' className={({isActive}) => isActive ? "text-[#F59E0b]" : ""} >Jobs</NavLink>
                <NavLink to='/companies' className={({isActive}) => isActive ? "text-[#F59E0b]" : ""} >Companies</NavLink>
                <NavLink to='/categories' className={({isActive}) => isActive ? "text-[#F59E0b]" : ""} >Categories</NavLink>
                <NavLink to='/about' >About</NavLink>

            </div>
            <div className='gap-3 flex mr-10'>
                <button><img src={dark} alt="" className='border w-8 bg-[#F59E0b] rounded-full p-1.5' /></button>
                <button className='text-sm font-medium py-2 px-2.5 border border-[#334155] rounded'>Log In</button>
                <button className='text-sm text-[#ffffff] font-medium bg-[#F59E0b] py-2 px-2.5 border-none rounded'>Sign Up</button>
            </div>

        </div>
    )
}

export default Navbar
