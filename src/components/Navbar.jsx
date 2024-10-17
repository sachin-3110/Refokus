import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-xl h-[7.5%] mx-auto px-4 border-b-2 pb-2 border-zinc-900'>
      <div className='w-[100%] h-[100%] flex items-center pt-2'>
        <div id="nleft" className='w-[100%] h-[100%] flex items-center'>
          <img className='h-[1.3rem] md:pr-10' src="data:image/jpeg;base64,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" />
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
