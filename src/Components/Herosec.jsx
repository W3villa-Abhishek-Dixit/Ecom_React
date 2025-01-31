import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import abc from '../assets/images/img1.webp'
import watch from '../assets/images/watch.webp'
import computer from '../assets/images/computer.png'


const Herosec = () => {
  return (
    <div className=' w-screen bg-white mb-[10px] '>
         <div className=' w-full  px-[8px] md:px-[4px] lg:px-0 min-h-[300px] gap-[6px]  flex lg:flex-row flex-col justify-between items-center mt-2 max-w-[1600px] mx-auto '>
            < div className='flex min-h-[300px] h-[300px] w-full  rounded-xl gap-1 bg-slate-300'>
                <div className=" w-[50%]  mt-[40px] ml-[25px]">
                        <div className="h-[30px] w-[70px]  bg-blue-500 text-white rounded-xl flex justify-center items-center "><button className='flex ml-1 '>Mobile</button></div>
                        <div className="mt-[25px]"><h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl'>Best mobile Options<br></br>at any resolution</h1></div>
                        <div className="flex h-[30px] w-[120px] border justify-center items-center mt-[25px]"> 
                            <div className='flex gap-1 items-center '>Learn More<FaArrowRight /></div></div>

                </div>
                <div className="w-[50%]  ">
                       <img className='h-[90%] w-[80%] mt-[20px] object-center object-contain' src={abc} alt="" />
                    
                    </div>            
                
                
                </div>






           
           
           
           
           
           
           
           
           
            <div className='flex lg:flex-col gap-0.5  lg:h-[300px] w-full  lg:w-[30%]   '>
            <div className="rounded-xl w-[50%] lg:w-full lg:h-[50%] flex bg-slate-300">
                <div className="w-[50%] flex flex-col mt-[20px] items-center">
                    <h1 className='text-blue-400'>WEARABLE</h1>
                    <h1 className='text-lg md:text-xl lg:text-2xl ml-2'>Intelligent <br></br>& Durable <br></br>Design</h1>
                 </div>

                <div className="w-[50%] ">
                       <img className='h-[100%] w-[100%]  ' src={watch} alt="" />

                </div>
            </div>
            
            
            
            
            
            
            <div className=" rounded-xl bg-slate-300 w-[50%] lg:w-full h-[50%] flex  ">

            <div className="w-[50%] flex flex-col mt-[20px] items-center ">
                    <h1 className='text-blue-400 ml-[7px] sm:ml-0'>COMPUTERS</h1>
                    <h1 className='text-lg md:text-xl lg:text-2xl   ml-2'>Build your <br></br>& Durable <br></br>Design</h1>
                
                 </div>
                 <div className="w-[50%] ">
                       <img className='h-[100%] w-[100%]  ' src={computer} alt="" />

                </div>



            </div>
            </div>
           
           
           
           
           
            </div>
            </div>
  )
}

export default Herosec