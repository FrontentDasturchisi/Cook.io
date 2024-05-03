import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import Switch from './Switch';
// import Link from "react-router-dom"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='  bg-slate-900 flex w-full py-6 lg:flex-row flex-col  px-4 lg:items-center  justify-between main-container' >
            <div className='flex justify-around '>
                <h1 className='text-5xl font-bold'>
                    <span className='text-blue-700 ml-4 cursor-pointer'>Cook.io</span>
                </h1>
                <button onClick={() => setIsOpen(!isOpen)} className=' bg-transparent block text-3xl text-white lg:hidden'><FaBars /></button>

            </div>
            <div className={`${isOpen ? "h-auto" : "h-0 lg:h-auto"} flex flex-col lg:flex-row h-0 overflow-hidden cursor-pointer`}>
                <ul className='flex text-white flex-col lg:flex-row lg:items-center mr-[150px] lg:gap-6 font-bold text-[15px]'>
                    <a className='py-1 text-2xl hover:bg-red-400 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 m-1 rounded hover:text-red-500 transition-all duration-300' href="#home1">Home</a>
                    <a className='py-1 text-2xl hover:bg-red-400 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0  m-1 rounded hover:text-red-500 transition-all duration-300 ' href="#about2">About</a>
                    <a className='hover:text-red-500 py-1 text-2xl hover:bg-red-400 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all m-1 rounded duration-300' href="#ranks">Ranks</a>
                    <a className='hover:text-red-500 py-1 text-2xl hover:bg-red-400 hover:lg:bg-transparent hover:pl-3 hover:lg:pl-0 transition-all m-1 rounded duration-300' href="#carusel">Meals</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar