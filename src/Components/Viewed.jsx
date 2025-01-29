import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import sunglass from "../assets/images/sunglass.webp";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";


const Viewed = () => {
  return (
    <div className=' w-screen bg-slate-900 mt-[30px]'>
    <div className=' flex-wrap  px-5 sm:w-full   h-[200px] gap-[8px]  flex  flex-col  max-w-[1600px] mx-auto'>
        <div className="div">
        <h1 className="text-[21px] font-semibold mt-[15px] text-white">Most Viewed</h1>
                <div className="h-0.5 w-[50px] mt-[5px] bg-amber-950"></div>

        </div>
        
        
        
        <div className='flex gap-[20px]'>
        
        <div className="h-[100px] w-[320px] rounded-xl flex  bg-white mt-[10px] overflow-hidden ">
                <div className="w-[30%]   overflow-hidden">
                    <img className='h-[100%] w-[100%] object-center object-cover' src={sunglass} alt="" />
                </div>
                <div className="flex flex-col w-[70%]  ml-[10px] justify-center">
                        <div className="text-[15px] ">Oversized Sunglasses</div>
                        <div className="text-[12px] flex  items-center mb-[5px]" > <FaDollarSign />397.00</div>
                        <div className="text-[12px] flex  items-center gap-[10px]"><FaCartShopping /><FaRegHeart /><MdOutlineSwapHorizontalCircle /></div>

                </div>

        </div>

        <div className="h-[100px] w-[320px] rounded-xl overflow-hidden flex  bg-white mt-[10px] ">
                <div className="w-[30%]   overflow-hidden">
                    <img className='h-[100%] w-[100%] object-center object-cover' src={sunglass} alt="" />
                </div>
                <div className="flex flex-col w-[70%]  ml-[10px] justify-center">
                        <div className="text-[15px] ">Oversized Sunglasses</div>
                        <div className="text-[12px] flex  items-center mb-[5px]" > <FaDollarSign />397.00</div>
                        <div className="text-[12px] flex  items-center gap-[10px]"><FaCartShopping /><FaRegHeart /><MdOutlineSwapHorizontalCircle /></div>

                </div>

        </div>
        <div className="h-[100px] w-[320px] rounded-xl overflow-hidden flex  bg-white mt-[10px]">
                <div className="w-[30%]   overflow-hidden">
                    <img className='h-[100%] w-[100%] object-center object-cover ' src={sunglass} alt="" />
                </div>
                <div className="flex flex-col w-[70%]  ml-[10px] justify-center">
                        <div className="text-[15px] ">Oversized Sunglasses</div>
                        <div className="text-[12px] flex  items-center mb-[5px]" > <FaDollarSign />397.00</div>
                        <div className="text-[12px] flex  items-center gap-[10px]"><FaCartShopping /><FaRegHeart /><MdOutlineSwapHorizontalCircle /></div>

                </div>

        </div>

        <div className="h-[100px] w-[320px] rounded-xl overflow-hidden flex  bg-white mt-[10px]">
                <div className="w-[30%]   overflow-hidden">
                    <img className='h-[100%] w-[100%] object-center object-cover' src={sunglass} alt="" />
                </div>
                <div className="flex flex-col w-[70%]  ml-[10px] justify-center">
                        <div className="text-[15px] ">Oversized Sunglasses</div>
                        <div className="text-[12px] flex  items-center mb-[5px]" > <FaDollarSign />397.00</div>
                        <div className="text-[12px] flex  items-center gap-[10px]"><FaCartShopping /><FaRegHeart /><MdOutlineSwapHorizontalCircle /></div>

                </div>

        </div>
        <div className="h-[100px] w-[320px] rounded-xl overflow-hidden flex  bg-white mt-[10px]">
                <div className="w-[30%]  overflow-hidden">
                    <img className='h-[100%] w-[100%] object-center object-cover' src={sunglass} alt="" />
                </div>
                <div className="flex flex-col w-[70%]  ml-[10px] justify-center">
                        <div className="text-[15px] ">Oversized Sunglasses</div>
                        <div className="text-[12px] flex  items-center mb-[5px]" > <FaDollarSign />397.00</div>
                        <div className="text-[12px] flex  items-center gap-[10px]"><FaCartShopping /><FaRegHeart /><MdOutlineSwapHorizontalCircle /></div>

                </div>

        </div>
    </div>
    </div>
         
 </div>    
  )
}

export default Viewed