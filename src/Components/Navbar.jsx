import React from 'react'
import logoimg from '../assets/logo.svg'
import menu_icon from '../assets/menu_icon.svg'



 const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-1'>
        <div className='container mx-auto mt-[-20px] flex justify-between py-10 px-30 lg:px-32 bg-tranparent'>
            <img src={logoimg} alt="" />
            <ul className='hidden md:flex gap-7 text-white  item-center mt-[10px]'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full '>Sign up</button>
            <img src={menu_icon} className='md:hidden w-7' alt="" />
        </div>
    </div>
  )
}
export default Navbar
