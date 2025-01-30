import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import sunglass from "../assets/images/sunglass.webp";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

const Viewed = () => {
  return (
    <div className="w-screen bg-slate-600 mt-[45px] py-6 ">
      <div className="px-5 max-w-[1600px] mx-auto">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-[21px] font-semibold text-white">Most Viewed</h1>
          <div className="h-0.5 w-[50px] mt-2 bg-amber-950"></div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-4">
          {/* Product Card 1 */}
          <div className="h-[100px] w-full sm:w-[280px] md:w-[300px] rounded-xl flex bg-white overflow-hidden shadow-md">
            <div className="w-[30%] overflow-hidden">
              <img className="h-full w-full object-center object-cover" src={sunglass} alt="Sunglass" />
            </div>
            <div className="flex flex-col w-[70%] p-2 justify-center">
              <div className="text-[15px] font-semibold">Oversized Sunglasses</div>
              <div className="text-[12px] flex items-center mb-2 text-gray-700">
                <FaDollarSign className="text-gray-500" /> 397.00
              </div>
              <div className="text-[12px] flex items-center gap-3 text-gray-500">
                <FaCartShopping className="cursor-pointer hover:text-gray-700" />
                <FaRegHeart className="cursor-pointer hover:text-red-500" />
                <MdOutlineSwapHorizontalCircle className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="h-[100px] w-full sm:w-[280px] md:w-[300px] rounded-xl flex bg-white overflow-hidden shadow-md">
            <div className="w-[30%] overflow-hidden">
              <img className="h-full w-full object-center object-cover" src={sunglass} alt="Sunglass" />
            </div>
            <div className="flex flex-col w-[70%] p-2 justify-center">
              <div className="text-[15px] font-semibold">Oversized Sunglasses</div>
              <div className="text-[12px] flex items-center mb-2 text-gray-700">
                <FaDollarSign className="text-gray-500" /> 397.00
              </div>
              <div className="text-[12px] flex items-center gap-3 text-gray-500">
                <FaCartShopping className="cursor-pointer hover:text-gray-700" />
                <FaRegHeart className="cursor-pointer hover:text-red-500" />
                <MdOutlineSwapHorizontalCircle className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="h-[100px] w-full sm:w-[280px] md:w-[300px] rounded-xl flex bg-white overflow-hidden shadow-md">
            <div className="w-[30%] overflow-hidden">
              <img className="h-full w-full object-center object-cover" src={sunglass} alt="Sunglass" />
            </div>
            <div className="flex flex-col w-[70%] p-2 justify-center">
              <div className="text-[15px] font-semibold">Oversized Sunglasses</div>
              <div className="text-[12px] flex items-center mb-2 text-gray-700">
                <FaDollarSign className="text-gray-500" /> 397.00
              </div>
              <div className="text-[12px] flex items-center gap-3 text-gray-500">
                <FaCartShopping className="cursor-pointer hover:text-gray-700" />
                <FaRegHeart className="cursor-pointer hover:text-red-500" />
                <MdOutlineSwapHorizontalCircle className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="h-[100px] w-full sm:w-[280px] md:w-[300px] rounded-xl flex bg-white overflow-hidden shadow-md">
            <div className="w-[30%] overflow-hidden">
              <img className="h-full w-full object-center object-cover" src={sunglass} alt="Sunglass" />
            </div>
            <div className="flex flex-col w-[70%] p-2 justify-center">
              <div className="text-[15px] font-semibold">Oversized Sunglasses</div>
              <div className="text-[12px] flex items-center mb-2 text-gray-700">
                <FaDollarSign className="text-gray-500" /> 397.00
              </div>
              <div className="text-[12px] flex items-center gap-3 text-gray-500">
                <FaCartShopping className="cursor-pointer hover:text-gray-700" />
                <FaRegHeart className="cursor-pointer hover:text-red-500" />
                <MdOutlineSwapHorizontalCircle className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="h-[100px] w-full sm:w-[280px] md:w-[300px] rounded-xl flex bg-white overflow-hidden shadow-md">
            <div className="w-[30%] overflow-hidden">
              <img className="h-full w-full object-center object-cover" src={sunglass} alt="Sunglass" />
            </div>
            <div className="flex flex-col w-[70%] p-2 justify-center">
              <div className="text-[15px] font-semibold">Oversized Sunglasses</div>
              <div className="text-[12px] flex items-center mb-2 text-gray-700">
                <FaDollarSign className="text-gray-500" /> 397.00
              </div>
              <div className="text-[12px] flex items-center gap-3 text-gray-500">
                <FaCartShopping className="cursor-pointer hover:text-gray-700" />
                <FaRegHeart className="cursor-pointer hover:text-red-500" />
                <MdOutlineSwapHorizontalCircle className="cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Viewed;
