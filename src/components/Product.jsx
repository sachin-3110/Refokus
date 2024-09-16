import React from 'react';
import Button from './Button';

function Product({data, mover,count}) {
  return (
    <div onMouseEnter={()=>{mover(count)}} className='flex h-[10rem] md:h-[17rem] justify-between w-full  p-4 md:p-0 group border-zinc-700'>
     <div className=' flex justify-center md:items-center items-start'>
     <h1 className='md:w-1/2 text-2xl md:text-3xl font-semibold text-white capitalize'>
        {data.title}
      </h1>
     </div>
      <div className='flex flex-col md:w-1/3 w-1/2'>
        <p className='text-white pb-3 md:text-xl text-sm p-4'>
          {data.description} 
        </p>
        <div className='flex gap-3 my-5 group-hover:opacity-100 px-4 opacity-0 duration-500 ease-in-out'>
        {data.live && <Button/>}
        {data.case && <Button title='case study'/>}
        </div>
      </div>
    </div>
  );
}

export default Product;
