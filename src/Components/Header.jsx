import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
    <div className='w-screen bg-slate-300 '>
    <div className='  sm: bg-slate-300 min-h-[100px]  flex justify-between items-center px-2 lg:px-auto max-w-[1600px] mx-auto '>
          <div><h1 className='text-5xl'>JOURNAL</h1></div>
          <div className=' hidden lg:flex justify-between w-[340px] '>
                <div className='w-[13%] flex justify-center items-center bg-blue-500 text-white'>All<MdArrowDropDown />
                </div>
                <div className='w-[80%] h-[40px] bg-white'>
                    <input type="text" placeholder='Search here'className='mt-[5px] ml-[5px]' />
                </div>
                <div className='flex justify-center items-center w-[10%] bg-blue-500 text-white'>
                <CiSearch />
                </div>
          
          </div>
          <div className="flex justify-center items-center text-gray-700">
  
  <div className="flex flex-col items-center  ">
    <FaUserCircle className="text-3xl mb-1" />
    <span className="px-2">Login</span>
  </div>

 
  <div className="flex flex-col items-center ">
    <FaPen className="text-3xl mb-1" />
    <span className="px-2">Register</span>
  </div>

    <div className="hidden  sm:flex flex-col items-center  ">
    <CiHeart className="text-3xl mb-1" />
    <span className="px-2">Wishlist</span>
  </div>

  <div className="hidden sm:flex flex-col items-center  ">
    <FaCodeCompare className="text-3xl mb-1" />
    <span className="px-2">Compare</span>
  </div>
</div>

          <div className='flex text-2xl gap-1.5'>
            <div className='hidden md:flex'>0 items(s) - $0.00</div>
            <div className=' hidden sm:flex justify-center items-center h-[40px] w-[60px]  bg-blue-500 text-white'><FaCartShopping /></div>

          </div>
          


     </div>
     </div>

  )
}

export default Header