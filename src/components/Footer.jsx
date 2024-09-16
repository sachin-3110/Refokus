import React from 'react'

function Footer() {
  return (
    <div className='text-white mx-auto  my-10 h-fit py-10 max-w-screen-xl'>
        <div className='flex md:flex-row flex-col justify-between'>
            <div id="logo" className='flex flex-row md:w-1/2 w-full'>
                <img src="src/assets/logo.png" alt="" className='h-30 md:h-50 whitespace-nowrap'/>
            </div>
            <div id="rfooter" className='md:w-[40%] w-[100%] px-2 text-xs py-4 flex justify-between'>
            <div className='text-zinc-500 pl-5'>
                <h1 className='pb-5 '>Socials</h1>
                <div>
                    <h1>Instagram</h1>
                    <h1 className='capitalize'>Twitter(X?)</h1>
                    <h1>LinkedIn</h1>
                </div>
            </div>
            <div>
            <h1 className='text-zinc-500 pb-5'>Site Map</h1>
                <div className='text-zinc-300'>
                    <h1>Home</h1>
                    <h1>Work</h1>
                    <h1>Careers</h1>
                    <h1>Contact</h1>
                </div>
            </div>
            <div className='w-[40%] text-right justify-end text-balance'>
                <p>Refokus is pioneering digital agency driven by <br /> design and empowered by technology</p>
                <p className='bg-purple-800 text-center flex justify-center items-center gap-3 my-2'><span className='font-extrabold text-xl pb-1'>W</span> Enterprise Partner</p>
            </div>
            </div>
        </div>
        <div id="bottomfooter" className='flex justify-between md:w-1/2 w-full px-4 text-sm text-zinc-500'>
            <h1>Privacy Policy</h1>
            <h1>Cookie Policy</h1>
            <h1>Impressum</h1>
            <h1>terms</h1>
        </div>

      
    </div>
  )
}

export default Footer
