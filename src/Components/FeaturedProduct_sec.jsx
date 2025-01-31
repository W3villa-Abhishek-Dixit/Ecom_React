import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaAngleUp, FaAngleDown, FaRegHeart, FaRegQuestionCircle } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { CiDollar } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import fp1 from "../assets/images/fp-1.jpg";
import fp2 from "../assets/images/fp-2.jpeg";
import fp3 from "../assets/images/fp-3.jpeg";
import fp4 from "../assets/images/fp-4.jpg";
import fp5 from "../assets/images/fp-5.jpg";
import headphn from "../assets/images/headphn.jpg";

function FeaturedProduct_sec() {


  

 
  const settings = {
    dots: true,
    arrows: false,
    infinite: true, // Enable infinite scrolling for continuous looping
    speed: 500,
    slidesToShow: 4,
    autoplay: false, // Enable autoplay
    autoplaySpeed: 2000, // Adjust the speed (in milliseconds) for auto sliding
    slidesToScroll: 1, // Scroll one slide at a time for better user experience
    responsive: [
      {
        breakpoint: 1190, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 950, // For smaller tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 620, // For small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-slate-100 pt-[10px] sm:pt-0">
      <div className="flex flex-col md:items-center max-w-[1600px] mx-auto mt-10 px-3 md:px-5 lg:px-7 2xl:px-10">
        <div className="text-[21px] sm:text-[37px] xl:text-[43px] font-semibold">
          Featured Products
        </div>
        <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
        <div className="w-[90%] sm:w-[74%] text-start text-[14px] sm:text-normal sm:text-center text-slate-500 mb-6">
          Display any products as tabs or accordions with optional grid or carousal mode. Custom products per row per modules and per breakpoint.
          <span className="text-blue-800 underline">Learn more</span>
        </div>

        <div className="w-[100%] text-center">
          <Slider {...settings}>
          

              <div  className="bg-cover bg-center w-[100%] sm:max-w-[90%] min-w-[250px] sm:min-w-[48%] flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold relative my-6 border-[1px] border-slate-300 shadow-[0px_0px_0px_0px_grey]">
           
                <div className="overflow-hidden h-[100%] sm:h-[250px]">
                  <img src={fp1} alt="" className="overflow-hidden h-[100%] w-[100%] h-full object-cover" />
                </div>
                <div className="flex justify-between bg-slate-200 text-slate-500 py-2 font-light text-[15px] px-1">
                  <div>Erickson</div>
                  <div>Model 519</div>
                </div>
                <div className="w-full text-[30px] flex justify-start font-normal mt-2 px-2 truncate">
                  Camera
                </div>
                <div className="font-light w-full text-start text-[16px] text-slate-500 px-2 mt-[10px]">
                  price <span className="text-[12px]">$3,299.00</span>
                </div>
                <div className="flex justify-between mt-[8px] px-3">
                  <div className="flex font-normal text-[17px]">
                    <div className="text-[19px] w-[35px] py-1 border-[1px] border-slate-400 text-slate-700">
                      1
                    </div>
                    <div className="bg-slate-300 font-light px-[px]">
                      <div className="" >
                       <button><FaAngleUp /></button> 
                      </div>
                      <div className="" >
                      <button><FaAngleDown /></button>  
                      </div>
                    </div>
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]" >
                      <div className="text-[28px] hover:text-black">
                        <TiShoppingCart />
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center text-[1.3em]">
                    <div className="mr-2 hover:text-slate-500" >
                      <FaRegHeart  />
                    </div>
                    <div className="mr-2 text-[1.1em] hover:text-slate-500">
                      <RiExchangeLine />
                    </div>
                  </div>
                </div>
                <div className="flex bg-slate-300 font-normal justify-between text-[19px] px-2 py-2 mt-6">
                  <div className="flex items-center hover:font-medium">
                    <div className="text-green-800 hover:text-green-400 text-[1.2em] mr-1">
                      <CiDollar />
                    </div>
                    Buy Now
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-800 text-[1.2em] mr-1 hover:text-red-500">
                      <FaRegQuestionCircle />
                    </div>
                    Question
                  </div>
                </div>
              </div>
             
             
             
             
              {/* <div  className="bg-cover bg-center w-[100%] sm:max-w-[90%] min-w-[250px] sm:min-w-[48%] flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold relative my-6 border-[1px] border-slate-300 shadow-[0px_0px_0px_0px_grey]">
           
                <div className="overflow-hidden h-[100%] sm:h-[250px]">
                  <img src={fp2} alt="" className="overflow-hidden h-[100%] w-[100%] h-full object-cover" />
                </div>
                <div className="flex justify-between bg-slate-200 text-slate-500 py-2 font-light text-[15px] px-1">
                  <div>Erickson</div>
                  <div>Model 519</div>
                </div>
                <div className="w-full text-[30px] flex justify-start font-normal mt-2 px-2 truncate">
                  Sandals
                </div>
                <div className="font-light w-full text-start text-[16px] text-slate-500 px-2 mt-[10px]">
                  price <span className="text-[12px]">$3,299.00</span>
                </div>
                <div className="flex justify-between mt-[8px] px-3">
                  <div className="flex font-normal text-[17px]">
                    <div className="text-[19px] w-[35px] py-1 border-[1px] border-slate-400 text-slate-700">
                      1
                    </div>
                    <div className="bg-slate-300 font-light px-[px]">
                      <div className="" >
                        <FaAngleUp />
                      </div>
                      <div className="" >
                        <FaAngleDown />
                      </div>
                    </div>
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]" >
                      <div className="text-[28px] hover:text-black">
                        <TiShoppingCart />
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center text-[1.3em]">
                    <div className="mr-2 hover:text-slate-500" >
                      <FaRegHeart  />
                    </div>
                    <div className="mr-2 text-[1.1em] hover:text-slate-500">
                      <RiExchangeLine />
                    </div>
                  </div>
                </div>
                <div className="flex bg-slate-300 font-normal justify-between text-[19px] px-2 py-2 mt-6">
                  <div className="flex items-center hover:font-medium">
                    <div className="text-green-800 hover:text-green-400 text-[1.2em] mr-1">
                      <CiDollar />
                    </div>
                    Buy Now
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-800 text-[1.2em] mr-1 hover:text-red-500">
                      <FaRegQuestionCircle />
                    </div>
                    Question
                  </div>
                </div>
              </div> */}
              
              
              
              
              
              
              
              
              
              <div  className="bg-cover bg-center w-[100%] sm:max-w-[90%] min-w-[250px] sm:min-w-[48%] flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold relative my-6 border-[1px] border-slate-300 shadow-[0px_0px_0px_0px_grey]">
           
                <div className="overflow-hidden h-[100%] sm:h-[250px]">
                  <img src={fp1} alt="" className="overflow-hidden h-[100%] w-[100%] h-full object-cover" />
                </div>
                <div className="flex justify-between bg-slate-200 text-slate-500 py-2 font-light text-[15px] px-1">
                  <div>Erickson</div>
                  <div>Model 519</div>
                </div>
                <div className="w-full text-[30px] flex justify-start font-normal mt-2 px-2 truncate">
                  Head Phone
                </div>
                <div className="font-light w-full text-start text-[16px] text-slate-500 px-2 mt-[10px]">
                  price <span className="text-[12px]">$3,299.00</span>
                </div>
                <div className="flex justify-between mt-[8px] px-3">
                  <div className="flex font-normal text-[17px]">
                    <div className="text-[19px] w-[35px] py-1 border-[1px] border-slate-400 text-slate-700">
                      1
                    </div>
                    <div className="bg-slate-300 font-light px-[px]">
                      <div className="" >
                      <button><FaAngleUp /></button>  
                      </div>
                      <div className="" >
                       <button><FaAngleDown /></button> 
                      </div>
                    </div>
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]" >
                      <div className="text-[28px] hover:text-black">
                        <TiShoppingCart />
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center text-[1.3em]">
                    <div className="mr-2 hover:text-slate-500" >
                      <FaRegHeart  />
                    </div>
                    <div className="mr-2 text-[1.1em] hover:text-slate-500">
                      <RiExchangeLine />
                    </div>
                  </div>
                </div>
                <div className="flex bg-slate-300 font-normal justify-between text-[19px] px-2 py-2 mt-6">
                  <div className="flex items-center hover:font-medium">
                    <div className="text-green-800 hover:text-green-400 text-[1.2em] mr-1">
                      <CiDollar />
                    </div>
                    Buy Now
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-800 text-[1.2em] mr-1 hover:text-red-500">
                      <FaRegQuestionCircle />
                    </div>
                    Question
                  </div>
                </div>
              </div>
              
              
              
              
              
              
              
              
              <div  className="bg-cover bg-center w-[100%] sm:max-w-[90%] min-w-[250px] sm:min-w-[48%] flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold relative my-6 border-[1px] border-slate-300 shadow-[0px_0px_0px_0px_grey]">
           
                <div className="overflow-hidden h-[100%] sm:h-[250px]">
                  <img src={fp1} alt="" className="overflow-hidden h-[100%] w-[100%] h-full object-cover" />
                </div>
                <div className="flex justify-between bg-slate-200 text-slate-500 py-2 font-light text-[15px] px-1">
                  <div>Erickson</div>
                  <div>Model 519</div>
                </div>
                <div className="w-full text-[30px] flex justify-start font-normal mt-2 px-2 truncate">
                  Telivision
                </div>
                <div className="font-light w-full text-start text-[16px] text-slate-500 px-2 mt-[10px]">
                  price <span className="text-[12px]">$3,299.00</span>
                </div>
                <div className="flex justify-between mt-[8px] px-3">
                  <div className="flex font-normal text-[17px]">
                    <div className="text-[19px] w-[35px] py-1 border-[1px] border-slate-400 text-slate-700">
                      1
                    </div>
                    <div className="bg-slate-300 font-light px-[px]">
                      <div className="" >
                       <button><FaAngleUp /></button> 
                      </div>
                      <div className="" >
                      <button><FaAngleDown /></button>  
                      </div>
                    </div>
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]" >
                      <div className="text-[28px] hover:text-black">
                        <TiShoppingCart />
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center text-[1.3em]">
                    <div className="mr-2 hover:text-slate-500" >
                      <FaRegHeart  />
                    </div>
                    <div className="mr-2 text-[1.1em] hover:text-slate-500">
                      <RiExchangeLine />
                    </div>
                  </div>
                </div>
                <div className="flex bg-slate-300 font-normal justify-between text-[19px] px-2 py-2 mt-6">
                  <div className="flex items-center hover:font-medium">
                    <div className="text-green-800 hover:text-green-400 text-[1.2em] mr-1">
                      <CiDollar />
                    </div>
                    Buy Now
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-800 text-[1.2em] mr-1 hover:text-red-500">
                      <FaRegQuestionCircle />
                    </div>
                    Question
                  </div>
                </div>
              </div>
              <div  className="bg-cover bg-center w-[100%] sm:max-w-[90%] min-w-[250px] sm:min-w-[48%] flex items-center rounded-xl overflow-hidden justify-center text-black text-xl font-bold relative my-6 border-[1px] border-slate-300 shadow-[0px_0px_0px_0px_grey]">
           
                <div className="overflow-hidden h-[100%] sm:h-[250px]">
                  <img src={fp5} alt="" className="overflow-hidden h-[100%] w-[100%] h-full object-cover" />
                </div>
                <div className="flex justify-between bg-slate-200 text-slate-500 py-2 font-light text-[15px] px-1">
                  <div>Erickson</div>
                  <div>Model 519</div>
                </div>
                <div className="w-full text-[30px] flex justify-start font-normal mt-2 px-2 truncate">
                Mobile
                </div>
                <div className="font-light w-full text-start text-[16px] text-slate-500 px-2 mt-[10px]">
                  price <span className="text-[12px]">$3,299.00</span>
                </div>
                <div className="flex justify-between mt-[8px] px-3">
                  <div className="flex font-normal text-[17px]">
                    <div className="text-[19px] w-[35px] py-1 border-[1px] border-slate-400 text-slate-700">
                      1
                    </div>
                    <div className="bg-slate-300 font-light px-[px]">
                      <div className="" >
                      <button><FaAngleUp /></button>  
                      </div>
                      <div className="" >
                        <button><FaAngleDown /></button>
                      </div>
                    </div>
                    <button className="bg-blue-800 px-2 rounded-sm text-white font-light text-[13px]" >
                      <div className="text-[28px] hover:text-black">
                        <TiShoppingCart />
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center text-[1.3em]">
                    <div className="mr-2 hover:text-slate-500" >
                      <FaRegHeart  />
                    </div>
                    <div className="mr-2 text-[1.1em] hover:text-slate-500">
                      <RiExchangeLine />
                    </div>
                  </div>
                </div>
                <div className="flex bg-slate-300 font-normal justify-between text-[19px] px-2 py-2 mt-6">
                  <div className="flex items-center hover:font-medium">
                    <div className="text-green-800 hover:text-green-400 text-[1.2em] mr-1">
                      <CiDollar />
                    </div>
                    Buy Now
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-800 text-[1.2em] mr-1 hover:text-red-500">
                      <FaRegQuestionCircle />
                    </div>
                    Question
                  </div>
                </div>
              </div>
          </Slider>
        </div>
        <div className="w-full flex justify-center my-10">
          <div  className="uppercase bg-blue-800 text-white text-[0.8em] px-3 py-2 flex items-center rounded-sm hover:text-black">
            see all products
            <span className="ml-2">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct_sec;
