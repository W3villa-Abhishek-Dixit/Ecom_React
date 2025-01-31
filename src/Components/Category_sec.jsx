import React from 'react';

const Category_sec = () => {
  return (
    <div className='w-full box-border bg-gray mx-0 overflow-x-hidden'>
      <div className='max-w-[1600px] mx-auto h-[200px] flex flex-col justify-center items-center'>
        {/* <h1 className='text-[25px] font-semibold'>Why buy from us?</h1>
        <div className='w-[50px] h-[5px] bg-amber-950 mt-[5px]'></div> */}
        <div className="text-[21px] sm:text-[37px] xl:text-[43px] font-semibold">
          Why buy from us?
        </div>
        <div className="h-[2px] w-[60px] md:w-[120px] bg-orange-600 my-2"></div>
        <p className='text-center sm:text-sm md:text-l lg:text-xl'>Journal has been the best-selling and most loved Opencart theme since launch in 2013. Tried and tested by over 20k people.</p>
        <div className=' hidden sm:block text-sm md:text-l lg:text-xl'> JOurnal is the best Opencart theme framework on market</div>

        <ol className='flex flex-wrap justify-between items-center gap-[25px] h-[30px] w-full max-w-[480px] bg-gray-400 mt-[10px]'>
          <li className='bg-blue-500 text-white w-[150px] h-[30px] flex justify-center items-center'>TOP CATEGORIES</li>
          <li className='pr-[10px] '>ELECTRONICS</li>
          <li className='hidden sm:block'>BEAUTY</li>
          <li className='mr-1.5 hidden sm:block'>FASHION</li>
        </ol>
      </div>
    </div>
  );
}

export default Category_sec;
