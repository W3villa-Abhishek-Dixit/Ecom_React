import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import watch from "../assets/images/watch.webp";
import img1 from "../assets/images/img-1.webp";
import img3 from "../assets/images/img-3.webp";
import img2 from "../assets/images/img-2.jpg";
import img4 from "../assets/images/img-4.webp";

function Product() {
  var settings = {
    dots: true,
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
    <div className=" mx-auto max-w-[1600px] ">
      <div className="w-full">
        <Slider {...settings} className="space-x-0">
          {/* Slide 1 */}
          <div className="h-auto max-w-[96%] rounded-md overflow-hidden flex flex-col items-center relative">
            <img
              className="h-full w-full object-center object-contain"
              src={img1}
              alt="Slide 1"
            />
            <div className="flex justify-center items-center text-sm font-medium  h-[30px] w-[80px] border absolute bottom-[20px] left-[130px] bg-white">Fashion</div>
          </div>

          {/* Slide 2 */}
          <div className="h-auto max-w-[96%] rounded-md overflow-hidden flex flex-col items-center gap-2 relative">
            <img
              className="h-full w-full object-center object-contain"
              src={img1}
              alt="Slide 2"
            />

         <div className="flex justify-center items-center text-sm font-medium  h-[30px] w-[80px] border absolute bottom-[20px] left-[130px] bg-white">Fashion</div>
          </div>

          {/* Slide 3 */}
          <div className="h-auto w-[100%] max-w-[96%] rounded-md overflow-hidden flex flex-col items-center gap-2 relative">
            <img
              className="h-full w-full object-center object-contain"
              src={img3}
              alt="Slide 3"
            />

<div className="flex justify-center items-center text-sm font-medium mb-[10px] h-[30px] w-[120px] border absolute bottom-[15px] left-[130px] bg-white ">Health & Beauty </div>
          </div>
          

          {/* Slide 4 */}
          <div className="h-auto w-[100%] max-w-[96%] rounded-md overflow-hidden flex flex-col items-center gap-2 relative">
            <img
              className="h-full w-full object-center object-contain"
              src={img4}
              alt="Slide 4"
            />

<div className="flex justify-center items-center text-sm font-medium  h-[30px] w-[80px] border absolute bottom-[20px] left-[130px] bg-white">Furniture</div>
          </div>

          {/* Slide 5 */}
          <div className="h-auto w-[100%] max-w-[96%] rounded-md overflow-hidden flex flex-col items-center gap-2 relative">
            <img
              className="h-full w-full object-center object-contain"
              src={img3}
              alt="Slide 5"
            />

<div className="flex justify-center items-center text-sm font-medium  h-[30px] w-[80px] border absolute bottom-[20px] left-[130px] bg-white">Fashion</div>
          </div>

          {/* Slide 6 */}
          <div className="h-auto w-[100%] max-w-[96%] rounded-md overflow-hidden flex flex-col items-center gap-2 relative">
            <img
              className="h-full w-full object-center object-contain"
              src={img1}
              alt="Slide 6"
            />

<div className="flex justify-center items-center text-sm font-medium  h-[30px] w-[80px] border absolute bottom-[20px] left-[130px] bg-white">Fashion</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Product;
