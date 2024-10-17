import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-xl h-[7.5%] mx-auto px-4 border-b-2 pb-2 border-zinc-900'>
      <div className='w-[100%] h-[100%] flex items-center pt-2'>
        <div id="nleft" className='w-[100%] h-[100%] flex items-center'>
          <img className='h-[1.3rem] md:pr-10' src="../src/assets/Refokus.png" />
        <div className='md:w-[40%] w-[100%] md:flex justify-between hidden'>
            {["Home","Work","Culture","","News"].map((ele,index)=>(
                ele.length===0 ? <span key={index} className='lg:flex hidden h-5 w-1 bg-zinc-900 rounded-full md:-mx-12'></span> :
                <a key={index} href="#" className='text-xs sm:text-sm font-bold flex items-center text-white'>
                    {index===1 
                    &&
                    <span key={index} className='mx-1 inline-block animate-pulse h-1.5 w-1.5 bg-green-400 rounded-full'></span>}
                    {ele}
                </a>
            ))}
        </div>
        </div>
        <Button/>
      </div>
    </div>
  )
}

export default Navbar
