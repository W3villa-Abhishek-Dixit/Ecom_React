import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrSkype } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";





const Social = () => {
  return (
<div className="w-screen bg-slate-300">

      <div className="w-full   h-[70px] gap-[15px]  flex justify-center items-center  max-w-[1600px] mx-auto">
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <FaFacebookF />
             </div>
             
                     
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <FaTwitter />
             </div>



             
            
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <FaInstagram />
             </div>

           
            
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <FaLinkedin />
             </div>

             
             
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <FaYoutube />
             </div>

            
             
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <GrSkype />

             </div>
             
            
             <div className="rounded-4xl h-[50px] w-[50px] flex justify-center items-center text-[30px] bg-blue-500 text-white">
             <FaGolang />

             </div>
             

             
             
            



      </div>

</div>
  )
}

export default Social