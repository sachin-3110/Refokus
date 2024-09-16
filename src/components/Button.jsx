import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title="Get Started"}) {
  return (
      <div className='border-2 bg-white text-black md:w-52 w-44 text-xl h-7 flex flex-col overflow-hidden px-2 rounded-full'>
        <div className='hover:-translate-y-[50%] text-sm duration-300 flex justify-center  flex-col'>
        <h1 className='font-semibold flex items-center justify-between '><span> {title}</span> <span className='text-xl pt-1'> <IoIosReturnRight/></span> </h1>
        <h1 className='font-semibold flex items-center justify-between'><span> {title}</span> <span className='text-xl pt-1 '> <IoIosReturnRight/></span> </h1>
        </div>
      </div>
  )
}

export default Button
// hover:-translate-y-[100%] duration-500