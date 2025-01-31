import React from 'react';
import photo1 from "../assets/images/photo1.jpeg";
import photo2 from "../assets/images/photo2.webp";
import photo3 from "../assets/images/photo3.jpeg";
import photo4 from "../assets/images/photo4.webp";
import photo5 from "../assets/images/photo5.jpeg";
import photo6 from "../assets/images/photo6.jpeg";
import photo7 from "../assets/images/photo7.webp";
import photo8 from "../assets/images/photo8.jpeg";
import photo9 from "../assets/images/photo9.jpeg";

const Gallery = () => {
  return (
    <div className='w-screen h-auto bg-slate-600 mt-[20px] mx-auto py-6'>
      <div className='max-w-[1600px] flex flex-col justify-center items-center mx-auto px-5'>
        {/* <h1 className='text-[21px] font-semibold mt-[15px]'>Gallery Module</h1>
        <div className='h-0.5 w-[50px] mt-[5px] bg-amber-950'></div> */}
        <div className="text-[21px] sm:text-[37px] xl:text-[43px] font-semibold text-white">
          Gallery Module
        </div>
        <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
        <div className='flex justify-center items-center mt-[10px] text-center text-gray-300'>
          <p>
            The gallery module supports images, videos, and can also act as banners that point to any other page or popup module.<br />
            Create different modules with images, videos, banners, or a combination of all. Add our module on any page in any grid format.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-5 mt-[10px]'>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo1} alt="Slide 1" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo2} alt="Slide 2" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo3} alt="Slide 3" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo4} alt="Slide 4" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo5} alt="Slide 5" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo6} alt="Slide 6" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo7} alt="Slide 7" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo8} alt="Slide 8" />
          </div>
          <div className="h-[100px] w-[100px] flex items-center relative">
            <img className="h-full w-full object-center object-cover border-white border-1 rounded-xl overflow-hidden" src={photo9} alt="Slide 9" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
