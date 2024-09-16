import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import Button from './Button';
function Card() {
    return (
        <div className='text-white h-[110vh] md:h-[60vh] flex-col md:flex-row max-w-screen-xl flex mx-auto md:my-10'>
            <div className='lg:w-[35%] overflow-y-hidden md:h-auto h-[100vh] group overflow-hidden bg-zinc-800 m-2 rounded-xl p-2 flex flex-col justify-between'>
                <div className='flex items-center justify-between text-zinc-400 group-hover:translate-x-7 group-hover:translate-y-5 duration-500'><p>Up Next News</p><FaArrowCircleRight className='group-hover:-translate-x-14 group-hover:translate-y-0.5 duration-500' /></div>
                <div className='text-4xl py-8 px-4 group-hover:translate-y-5 duration-500 '><p>Insights and behind the scenes</p></div>
                <div className=''><p className='text-zinc-500 group-hover:translate-x-5 group-hover:-translate-y-5 duration-500'>Explore what are drives our team</p></div>
            </div>
            <div className='lg:w-[65%] group overflow-hidden md:h-auto md:px-5 h-[100vh] hover:bg-purple-700 duration-300\ bg-zinc-800 m-2 rounded-xl p-2 flex flex-col justify-between'>
                <div className='flex items-center justify-between text-zinc-300'><p className='group-hover:translate-x-7 group-hover:translate-y-5 duration-500'>Get in Touch</p><FaArrowCircleRight className='group-hover:-translate-x-7 group-hover:translate-y-5 duration-500' /></div>
                <div className='text-4xl group-hover:translate-x-7 group-hover:translate-y-5 duration-500 text-wrap'><p>Let's do it, <br /> together</p></div>
                <div className=''><p className='text-4xl md:text-6xl group-hover:translate-x-7 group-hover:translate-y-5 duration-500'>Start a Project</p></div>
                <div className='group-hover:translate-x-7 group-hover:-translate-y-2 duration-500 pb-10'><Button title='Contact us'/></div>
            </div>
            {/* <div className=' lg:w-[65%]  md:h-auto h-[70vh] bg-zinc-800 m-2 rounded-xl p-2'>CArd</div> */}
        </div>
    )
}

export default Card
