import React from 'react'
import { FaVanShuttle } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";


const Feature_strip = () => {
      return (

            <div className='w-screen  bg-slate-600 '>
                  <div className='flex flex-wrap  px-5 sm:px-auto  sm: text-white min-h-[75px] mx-auto flex justify-between items-center max-w-[1600px]'>
                        <div className="flex gap-[10px] my-2">
                              <div className="h-[40px] w-[40px] border text-blue-600 rounded-4xl flex justify-center items-center"> <div className='text-amber-900 text-2xl'><FaVanShuttle /></div>
                              </div>
                              <div className=""><p className='text-[15px]'>Free Shipping</p>
                                    <p className='text-[12px] text-gray-200'>Free delivery over $100</p>
                              </div>

                        </div>






                        <div className="flex gap-[10px] my-2">
                              <div className="h-[40px] w-[40px] border text-blue-600 rounded-4xl flex justify-center items-center"> <div className='text-amber-900 text-4xl'><IoReturnUpBack /></div>
                              </div>
                              <div className=""><p className='text-[15px]'>Free Return</p>
                                    <p className='text-[12px] text-gray-200'>Hassle free returns</p>
                              </div>

                        </div>
                        <div className="flex gap-[10px] my-2">
                              <div className="h-[40px] w-[40px] border text-blue-600 rounded-4xl flex justify-center items-center"> <div className='text-amber-900 text-3xl'><GrSecure />
                              </div>
                              </div>
                              <div className=""><p className='text-[15px]'>Secure Shopping</p>
                                    <p className='text-[12px] text-gray-200'>Best Security feature</p>
                              </div>

                        </div>
                        <div className="flex gap-[10px] my-2">
                              <div className="h-[40px] w-[40px] border text-blue-600 rounded-4xl flex justify-center items-center"> <div className='text-amber-900 text-2xl'><FaVanShuttle /></div>
                              </div>
                              <div className=""><p className='text-[15px]'>Unlimited Blocks</p>
                                    <p className='text-[12px] text-gray-200'>Any content any page</p>
                              </div>

                        </div>



                  </div>
            </div>
      )
}

export default Feature_strip