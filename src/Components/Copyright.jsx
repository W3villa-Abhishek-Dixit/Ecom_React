import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa6";



const Copyright = () => {
  return (
    <div className="w-screen bg-slate-600">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between  h-[40px]   ">

          <div className="text-gray-200 flex items-center">Copyright<FaRegCopyright />2014,Your Stor,All Rights Reserved</div>
          <div className="flex justify-center items-center text-gray-200 gap-[10px]">
                      <div className=""><FaCcVisa />
                      </div>
                      <div className=""><FaCcPaypal /></div>
                      <div className=""><FaCcStripe />
                      </div>
                      <div className=""><FaCcMastercard />
                      </div>
                      <div className=""><FaCcDiscover />
                      </div>
                      <div className=""></div>
          </div>



        </div>
    </div>
  )
}

export default Copyright