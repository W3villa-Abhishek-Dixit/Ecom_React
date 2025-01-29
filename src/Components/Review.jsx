import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";


const Review = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div className="w-screen h-auto py-10">
            <div className=" h-[300px] w-[80vw] mx-auto">
                <div className="flex flex-col justify-center items-center">
                <h1 className="text-[21px] font-semibold mt-[15px]">What are people saying about us</h1>
                <div className="h-0.5 w-[50px] mt-[5px] bg-amber-950"></div>

                </div>
            
                <Slider {...settings}  className="slider-container mt-[10px] max-w-[1600px] mx-auto">
                    {/* Slide 1 */}
                    <div className=" h-[270px] max-w-[96%] flex items-center justify-center hover:border-1 border-slate-500">
                        <div className="text-[50px] flex justify-center items-center mt-[25px] text-amber-800"><FaQuoteLeft /></div>
                        <div className="text-center  mt-[20px]">company thrives on innovation, collaboration, and dedication. 
                    We believe in empowering our team to create impactful solutions that drive success and foster growth. 
                    We’re proud to have a passionate team committed to excellence.</div>
                    <div className='font-semibold text-center mt-[5px]'>- charlibaltimore</div>
                    </div>
                    {/* Slide 2 */}
                    <div className=" h-[270px]  max-w-[96%] flex items-center justify-center hover:border-1 border-slate-500">
                        <div className="text-[50px] flex justify-center items-center mt-[25px] text-amber-800"><FaQuoteLeft /></div>
                        <div className="text-center  mt-[20px]">company thrives on innovation, collaboration, and dedication. 
                    We believe in empowering our team to create impactful solutions that drive success and foster growth. 
                    We’re proud to have a passionate team committed to excellence.</div>
                    <div className='font-semibold text-center mt-[5px]'>- charlibaltimore</div>
                    </div>
                    
                    {/* Slide 3 */}
                    <div className=" h-[270px] max-w-[96%] flex items-center justify-center hover:border-1 border-slate-500">
                        <div className="text-[50px] flex justify-center items-center mt-[25px] text-amber-800"><FaQuoteLeft /></div>
                        <div className="text-center  mt-[20px]">company thrives on innovation, collaboration, and dedication. 
                    We believe in empowering our team to create impactful solutions that drive success and foster growth. 
                    We’re proud to have a passionate team committed to excellence.</div>
                    <div className='font-semibold text-center mt-[5px]'>- charlibaltimore</div>
                    </div>
                    {/* Slide 4 */}
                    <div className=" h-[270px] max-w-[96%]  flex items-center justify-center hover:border-1 border-slate-500">
                        <div className="text-[50px] flex justify-center items-center mt-[25px] text-amber-800"><FaQuoteLeft /></div>
                        <div className="text-center  mt-[20px]">company thrives on innovation, collaboration, and dedication. 
                    We believe in empowering our team to create impactful solutions that drive success and foster growth. 
                    We’re proud to have a passionate team committed to excellence.</div>
                    <div className='font-semibold text-center mt-[5px]'>- charlibaltimore</div>
                    </div>
                    {/* Slide 5 */}
                    
                </Slider>
            </div>
        </div>
    );
};

export default Review;
