import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-full'>
      <div className='text-white flex border-l-0 justify-between items-center border-zinc-700  px-4  py-2 border-r-2'>
                 <img src={val.url} alt=""  className=''/>
                 <span className='text-[0.5rem] md:text-xl px-1'>{val.number}</span>
                </div>
    </div>
  )
}

export default Stripe
