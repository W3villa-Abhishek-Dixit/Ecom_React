import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/img-1.webp";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.webp";
import img4 from "../assets/images/img-4.webp";

import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  const settings = {
    dots: true, // Enable dots
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen h-auto bg-white overflow-hidden py-10">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        {/* <h1 className="text-[21px] font-semibold mt-[15px]">From our Blog</h1>
        <div className="h-0.5 w-[50px] mt-[5px] bg-amber-950"></div> */}
        <div className="text-[21px] sm:text-[37px] xl:text-[43px] font-semibold">
          From our Blog
        </div>
        <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
        <p className="text-center mt-[10px] text-gray-500">
          Journal comes with its own simple yet powerful blog. With the new
          advanced typography style, your post page design will be unmatched.
        </p>
        <div className="flex mt-[20px]">
          <ol className="flex justify-center h-[35px] w-[300px] gap-[50px] items-center bg-gray-200">
            <li className="bg-blue-400 h-[35px] w-[150px] flex justify-center items-center text-white mr-[10px]">
              LATEST POSTS
            </li>
            <li className="">MOST READ</li>
          </ol>
        </div>

        <div className="w-full mt-[15px] max-w-[1600px]  ">
          <Slider {...settings} className="slider-container  ">
            {/* Slide 1 */}
            <div className="h-[425px] max-w-[96%] flex flex-col items-center relative hover:border-1 border-slate-500 mx-2 bg-white shadow-md rounded-lg">
              <img
                className="h-[50%] w-full object-cover rounded-t-lg"
                src={img1}
                alt="Slide 1"
              />
              <div className="h-[10%] w-full flex justify-center items-center gap-[10px] bg-slate-300">
                <div className="flex justify-center items-center gap-[5px]">
                  <FaUser /> admin
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaMessage /> 38
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaRegEye /> 1930
                </div>
              </div>

              <div className="h-auto w-full ml-[10px] flex flex-col items-center justify-center p-4">
                <div className="text-lg font-semibold">
                  Journal Blog is here
                </div>
                <p className="text-center text-sm mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt laudantium reprehenderit corporis dolorem sint
                  nostrum consequatur.
                </p>
              </div>
              <div className="flex justify-center items-center gap-[5px] text-gray-600">Read More <FaArrowRight /></div>
                
            </div>

            {/* Repeat other slides */}
            <div className="h-[425px] max-w-[96%] flex flex-col items-center relative hover:border-1 border-slate-500 mx-2 bg-white shadow-md rounded-lg">
              <img
                className="h-[50%] w-full object-cover rounded-t-lg"
                src={img2}
                alt="Slide 2"
              />
              <div className="h-[10%] w-full flex justify-center items-center gap-[10px] bg-slate-300">
                <div className="flex justify-center items-center gap-[5px]">
                  <FaUser /> admin
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaMessage /> 38
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaRegEye /> 1930
                </div>
              </div>

              <div className="h-auto w-full ml-[10px] flex flex-col items-center justify-center p-4">
                <div className="text-lg font-semibold">
                  Best Leather Bags
                </div>
                <p className="text-center text-sm mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt laudantium reprehenderit corporis dolorem sint
                  nostrum consequatur.
                </p>
              </div>

              <div className="flex justify-center items-center gap-[5px] text-gray-600">Read More <FaArrowRight /></div>
            </div>

            {/* Add other slides */}
            <div className="h-[425px] max-w-[96%] flex flex-col items-center relative hover:border-1 border-slate-500  mx-2 bg-white shadow-md rounded-lg">
              <img
                className="h-[50%] w-full object-cover rounded-t-lg"
                src={img3}
                alt="Slide 3"
              />
              <div className="h-[10%] w-full flex justify-center items-center gap-[10px] bg-slate-300">
                <div className="flex justify-center items-center gap-[5px]">
                  <FaUser /> admin
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaMessage /> 38
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaRegEye /> 1930
                </div>
              </div>

              <div className="h-auto w-full ml-[10px] flex flex-col items-center justify-center p-4">
                <div className="text-lg font-semibold">
                  Perfect Blogs for You
                </div>
                <p className="text-center text-sm mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt laudantium reprehenderit corporis dolorem sint
                  nostrum consequatur.
                </p>
              </div>

              <div className="flex justify-center items-center gap-[5px] text-gray-600">Read More <FaArrowRight /></div>
            </div>

            {/* Add another slide */}
            <div className="h-[425px] max-w-[96%] flex flex-col items-center relative hover:border-1 border-slate-500 mx-2 bg-white shadow-md rounded-lg">
              <img
                className="h-[50%] w-full object-cover rounded-t-lg"
                src={img4}
                alt="Slide 4"
              />
              <div className="h-[10%] w-full flex justify-center items-center gap-[10px] bg-slate-300">
                <div className="flex justify-center items-center gap-[5px]">
                  <FaUser /> admin
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaMessage /> 38
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaRegEye /> 1930
                </div>
              </div>

              <div className="h-auto w-full ml-[10px] flex flex-col items-center justify-center p-4">
                <div className="text-lg font-semibold">
                  Best Blog Designs
                </div>
                <p className="text-center text-sm mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt laudantium reprehenderit corporis dolorem sint
                  nostrum consequatur.
                </p>
              </div>


              <div className="flex justify-center items-center gap-[5px] text-gray-600">Read More <FaArrowRight /></div>
            </div>


            <div className="h-[425px] max-w-[96%] flex flex-col items-center relative hover:border-1 border-slate-500 mx-2 bg-white shadow-md rounded-lg">
              <img
                className="h-[50%] w-full object-cover rounded-t-lg"
                src={img3}
                alt="Slide 3"
              />
              <div className="h-[10%] w-full flex justify-center items-center gap-[10px] bg-slate-300">
                <div className="flex justify-center items-center gap-[5px]">
                  <FaUser /> admin
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaMessage /> 38
                </div>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaRegEye /> 1930
                </div>
              </div>

              <div className="h-auto w-full ml-[10px] flex flex-col items-center justify-center p-4">
                <div className="text-lg font-semibold">
                  Perfect Blogs for You
                </div>
                <p className="text-center text-sm mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt laudantium reprehenderit corporis dolorem sint
                  nostrum consequatur.
                </p>
              </div>

              <div className="flex justify-center items-center gap-[5px] text-gray-600">Read More <FaArrowRight /></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
