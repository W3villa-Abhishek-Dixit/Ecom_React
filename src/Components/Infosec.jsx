import React from 'react'
import { FaBars } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";



const Infosec = () => {
  return (
    <div className='hidden sm:block w-screen   bg-blue-500 '>
         <div className=' text-white min-h-[45px] mx-auto flex justify-between items-center  max-w-[1600px]'>
            <ol className='flex justify-center gap-2.5 text-[15px] items-center'>
               <div className='min h-[45px]  bg-amber-400 flex items-center'>
           <div className='flex gap-1 items-center text-black  '><FaBars />ALL DEPARTMENT</div> </div>
           <div>MULTILEVEL</div>
           <div>MEGA MENU</div>
           <div>FULLWIDTH</div>
            </ol>
             <ol className='flex justify-center gap-5 text-[15px] items-center'>
                <div className='flex gap-1 items-center'><MdOutlineWifiCalling3 />1.800.555.6789
                </div>
                <div className='min h-[45px]  bg-amber-400 flex items-center'>
                <div className='flex gap-1 justify-center items-center text-black w-[65px]'><FaMessage />Blog
                </div>
                </div>
             </ol>

         </div>

    </div>     
  )
}

export default Infosec