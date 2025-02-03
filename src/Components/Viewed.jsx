import React from 'react';
import { FaDollarSign, FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import sunglass from "../assets/images/sunglass.webp";
import swatch from "../assets/images/watch.webp";
import headphn from "../assets/images/headphn.jpg";
import san from "../assets/images/sandal_new.jpg";
import goggles from "../assets/images/goggles.jpg";

const products = [
  { id: 1, name: "Oversized Sunglasses", price: 397.00, image: sunglass },
  { id: 2, name: "Headphone", price: 397.00, image: headphn },
  { id: 3, name: "Womens Sandals", price: 397.00, image: san },
  { id: 4, name: "Sports Watch", price: 397.00, image: swatch },
   { id: 5, name: "Oversized Sunglasses", price: 397.00, image: goggles }
];

const Viewed = () => {
  return (
    <div className="w-screen bg-slate-600 mt-[45px] py-6">
      <div className="px-5 max-w-[1600px] mx-auto">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-[21px] font-semibold text-white ">Most Viewed</h1>
          <div className="h-0.5 w-[50px] mt-2 bg-orange-600 "></div>
        </div>
        

        {/* Product List */}
        <div className=" flex justify-center md:flex flex-wrap gap-3">
          {products.map((product) => (
            <div key={product.id} className="h-[100px] w-full sm:w-[280px] md:w-[300px] rounded-xl flex bg-white overflow-hidden shadow-md">
              <div className="w-[30%] overflow-hidden">
                <img className="h-full w-full object-center object-cover" src={product.image} alt={product.name} />
              </div>
              <div className="flex flex-col w-[70%] p-2 justify-center">
                <div className="text-[15px] font-semibold">{product.name}</div>
                <div className="text-[12px] flex items-center mb-2 text-gray-700">
                  <FaDollarSign className="text-gray-500" /> {product.price}
                </div>
                <div className="text-[12px] flex items-center gap-3 text-gray-500">
                  <FaCartShopping className="cursor-pointer hover:text-gray-700" />
                  <FaRegHeart className="cursor-pointer hover:text-red-500" />
                  <MdOutlineSwapHorizontalCircle className="cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewed;
