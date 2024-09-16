import React, { useState } from 'react'
import { useMotionValueEvent, useScroll } from "framer-motion"


function Work() {
  const { scrollYProgress } = useScroll()

  const [images, setImages] = useState([
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "50%", left: "40%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "55%", left: "45%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "45%", left: "38%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "40%", left: "45%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "53%", left: "52%", isActive: false }
  ])
  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages(prev => (
        prev.map((elem, index) => (
          arr.indexOf(index)=== -1 ? (
            {...elem, isActive:false}
          ):
          {...elem,isActive:true}
        ))
      ))
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([])
        break;
      case 1:
        imagesShow([0])
        break;
      case 2:
        imagesShow([0, 1])

        break;
      case 3:
        imagesShow([0, 1, 2])

        break;
      case 4:
        imagesShow([0, 1, 2, 3])

        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4])
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4,5])
        break;
      case 7:
        imagesShow([0, 1, 2, 3, 4,5,6])
        break;

    }
  })




  return (
    <div className='max-w-screen-xl mx-auto  relative'>
      <div className='h-full absolute w-full'>
        {
          images.map((elem, ind) => (elem.isActive && (<img src={elem.url} alt="" style={{ top: elem.top, left: elem.left }} key={ind} className='rounded-xl h-14 lg:h-44 absolute' />)))
        }
      </div>
      <h1 className='max-w-screen-xl mx-auto text-center text-[18vh] md:my-20 md:text-[60vh] select-none leading-none lg:text-[70vh]  text-white'>work</h1>
    </div>
  )
}

export default Work
