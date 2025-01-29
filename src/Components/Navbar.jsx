import React from 'react';
import { CiHome } from "react-icons/ci";
import { FaRegUserCircle, FaRegQuestionCircle } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdArrowDropDown } from "react-icons/md";
import { GiUsaFlag } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";




const Navbar = () => {
  return (
    <div className='w-screen   '>
         <div className=' sm:bg-slate-50 bg-blue-700 text-white sm:text-gray-500 h-[35px] flex justify-between items-center py-6 sm:py-auto sm:my-2 mx-auto max-w-[1600px]'>
            < div className='flex '>
                 <ol className='flex  justify-center sm:gap-2.5 items-center'> 
                    <li className='hidden sm:flex gap-1 items-center'> <CiHome />Home</li>
                    <li className='sm:flex hidden gap-1  items-center'><FaRegUserCircle />About Us   </li>
                    <li className='hidden sm:flex gap-1  items-center'> <TiMessages />COntact</li>
                    <li className='hidden lg:flex gap-1  items-center'><FaRegQuestionCircle />FAQ<MdArrowDropDown /></li>
                     <li className='sm:hidden flex gap-1  items-center'><CiHome />Login</li>
                     <li className='sm:hidden flex gap-1  items-center'><CiHome />About Us</li>
                    
                 </ol>


            </div>
            
            <div> 
                <ol className='hidden lg:flex justify-center ' >
                    <li className='flex gap-1 items-center' ><GiUsaFlag />English <MdArrowDropDown /></li>
                 
                   <li className='flex gap-1 items-center'><FaDollarSign />US Dollar <MdArrowDropDown /></li> 
                </ol>
            </div>
            <div>
            <ol className='flex justify-center' >
                    <li className='hidden sm:flex gap-1 items-center' ><FaRegUserCircle />More Menus<MdArrowDropDown /></li>
                   <li className='sm:flex hidden gap-1 items-center'><TbTruckDelivery />Delivery <MdArrowDropDown /></li> 

                   <li className='flex sm:hidden gap-1 items-center' ><GiUsaFlag />English <MdArrowDropDown /></li>
                 
                 <li className='flex sm:hidden gap-1 items-center'><FaDollarSign />US Dollar <MdArrowDropDown /></li> 


                </ol>
                
            </div> 


           
           
                   

            
             
         </div>
    </div>
  )
}

export default Navbar