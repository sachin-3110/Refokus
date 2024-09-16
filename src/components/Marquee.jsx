import React from 'react'
import { motion } from 'framer-motion'
function Marquee({ imagesURL, direction }) {
  return (
    <div className='flex flex-nowrap md:my-10 '>
      <motion.div 
        initial={{x: direction==='left'?"0%":"-100%"}} animate={{x:direction==='left'?"-100%":"0"}}  transition={{ease:"linear", duration:15, repeat: Infinity}} 
        className='text-white flex w-full justify-around md:py-5 gap-10 '>
        {imagesURL.map((url, index) => <img key={index} src={url} className='' />)}
        {imagesURL.map((url, index) => <img key={index} src={url} className='' />)}
      </motion.div>
     
    </div>


  )
}

export default Marquee
