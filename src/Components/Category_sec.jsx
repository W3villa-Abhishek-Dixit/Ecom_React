import React from 'react';

const Category_sec = () => {
  return (
    <div className='w-full box-border bg-gray mx-0 overflow-x-hidden'>
      <div className='max-w-[1600px] mx-auto h-[200px] flex flex-col justify-center items-center'>
        <h1 className='text-[25px] font-semibold'>Why buy from us?</h1>
        <div className='w-[50px] h-[5px] bg-amber-950 mt-[5px]'></div>
        <p>Journal has been the best-selling and most loved Opencart theme since launch in 2013. Tried and tested by over 20k people, Journal</p>
        <div>is the best Opencart theme framework on market</div>

        <ol className='flex flex-wrap justify-between items-center gap-[25px] h-[30px] w-full max-w-[480px] bg-gray-400 mt-[10px]'>
          <li className='bg-blue-500 text-white w-[150px] h-[30px] flex justify-center items-center'>TOP CATEGORIES</li>
          <li>ELECTRONICS</li>
          <li className='hidden sm:block'>BEAUTY</li>
          <li className='mr-1.5 hidden sm:block'>FASHION</li>
        </ol>
      </div>
    </div>
  );
}

export default Category_sec;
