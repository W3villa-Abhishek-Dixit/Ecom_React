import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import watch from "../assets/images/watch.webp";
import img1 from "../assets/images/img-1.webp";
import img3 from "../assets/images/img-3.webp";
import img2 from "../assets/images/img-2.jpg";
import img4 from "../assets/images/img-4.webp";
import nike from "../assets/images/nikelogo.png";
import apple from "../assets/images/applelogo.jpeg";
import panda from "../assets/images/panda.png";
import logo1 from "../assets/images/logo-11.jpeg";
import logo2 from "../assets/images/logo-12.png";
import logo3 from "../assets/images/logo-13.png";
// import logo4 from "../assets/images/logo-15.png";

function BrandLogo() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
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
          initialSlide: 2,
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

    <div className="w-[80vw] max-w-[1600px] mx-auto ">
      <div className="flex flex-col justify-center items-center mt-[10px]">   
{/*         
       <h1 className='text-[21px] font-semibold '>Shop by Brand</h1>
       <div className='h-0.5 w-[50px] bg-amber-950 flex  justify-center text-center mt-[10px]' ></div>   */}
       <div className="text-[21px] sm:text-[37px] xl:text-[43px] font-semibold">
          Shop by Brand
        </div>
        <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
         </div>
      <div className="slider-container">
        <Slider {...settings} className="space-x-0  mt-[20px] max-w-[1600px]">
          {/* Slide 1 */}
          <div className="h-[130px] max-w-[90%] flex flex-col items-center relative">
            <img
              className="h-full w-full object-center object-contain border rounded-xl overflow-hidden "
              src={nike}
              alt="Slide 1"
            />
            <div className="text-center text-sm font-medium mb-[20px] absolute bottom-2"></div>
          </div>

          {/* Slide 2 */}
          <div className="h-[130px] max-w-[95%] flex flex-col items-center gap-2 rounded-xl overflow-hidden border border-black ">
            <img
              className="h-full w-full object-center object-cover"
              src={apple}
              alt="Slide 2"
            />
          </div>

          {/* Slide 3 */}
          <div className="h-[130px] max-w-[95%] flex flex-col items-center gap-2">
            <img
              className="h-full w-full object-center object-contain border rounded-xl overflow-hidden  "
              src={panda}
              alt="Slide 3"
            />
          </div>

          {/* Slide 4 */}
          <div className="h-[130px] max-w-[95%] flex flex-col items-center gap-2">
            <img
              className="h-full w-full object-center object-contain border rounded-xl overflow-hidden "
              src={logo1}
              alt="Slide 4"
            />
          </div>

          {/* Slide 5 */}
          <div className="h-[130px] w-[80px] flex flex-col items-center gap-2">
            <img
              className="h-full w-[95%] object-center object-contain border rounded-xl overflow-hidden"
              src={logo2}
              alt="Slide 5"
            />
          </div>

          {/* Slide 6 */}
          <div className="h-[130px] w-[80px] flex flex-col items-center gap-2">
            <img
              className="h-full w-[95%] object-center object-cover border rounded-xl overflow-hidden"
              src={logo3}
              alt="Slide 6"
            />
          </div>
          <div className="h-[130px] w-[80px] flex flex-col items-center gap-2">
            <img
              className="h-full w-[95%] object-center object-cover border rounded-xl overflow-hidden"
              src={apple}
              alt="Slide 6"
            />
          </div>

          <div className="h-[130px] w-[80px] flex flex-col items-center gap-2">
            <img
              className="h-full w-[95%] object-center object-cover border rounded-xl overflow-hidden"
              src={apple}
              alt="Slide 6"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BrandLogo;
