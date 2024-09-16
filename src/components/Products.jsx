import React, { useState } from 'react'
import Product from './Product'
import { easeInOut, motion } from 'framer-motion'
function Products() {
  const [pos, setPos] = useState(0)
  const mover = (val) => {
    setPos(val * 17)
  }

  var products = [
    { title: "Rahat Fateh Ali Khan", description: "Teri aankhon ke dariya ka nikalna bhi zarooori tha, zaroori tha magar niyatein mushafur krna.", live: false, case: true },
    { title: "Fateh Ali Khan 2016", description: "Tumhe dillagi bhul jaani padegi! kabhi dil kisi se laga kr dekho ... dillagi dillagi dillagi", live: true, case: false },
    { title: "Sukhwinder Singh", description: "Banjara banjara banjara uski dhun main dil banjara..", live: true, case: true },
    { title: "Darshan Raval", description: "Ik pal mai mai tujhko mai bhula dunga, dil todne ki ye saja dunga mere.", live: true, case: false },
    { title: "Atif Aslam 2012", description: "Aa bhi ja sanam yun na kr sitam meri baahon mai meri baahon main", live: true, case: true },
    { title: "Arijit Singh", description: "Tu hi ye mujhko batade chahun mai ya na apne tu dil ka pata de chahun mai ya na", live: true, case: true },
    { title: "Arijit 2014", description: "tu hi hai aashiqui, tu hai hai awaargi tu hai zindagi tu hi khudaa.", live: true, case: true },
  ]
  return (
    <div className='relative text-white max-w-screen-xl mx-auto md:my-20 px-4'>
      {
        products.map((elem, index) => (
          <Product data={elem} key={index} mover={mover} count={index} />
        ))
      }

      <div className='lg:flex hidden w-[35%] left-[50%] -translate-x-[60%] pointer-events-none h-full top-0 absolute'>
        <motion.div
          initial={{ y: pos }}
          transition={{ease:[0.65, 0, 0.35, 1], duration: .5}}
          animate={{ y: pos + 'rem' }}
          ease={{}}
          className='window w-full h-[17rem] overflow-hidden '>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem' }} className='w-full h-[17rem]'>
            <img className='h-[100%] object-contain' src="https://images.unsplash.com/photo-1503332132010-d1b77a049ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhcmt8ZW58MHx8MHx8fDA%3D" alt="" />
          </motion.div>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem' }} className='w-full h-[17rem]'>
            <img className='h-[100%] object-contain' src="https://images.unsplash.com/photo-1530090382228-7195e08d7a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8fDA%3D" alt="" />
          </motion.div>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem' }} className='w-full h-[17rem]'>
            <img className='h-[100%] object-contain' src="https://media.istockphoto.com/id/1437360925/photo/face-of-a-gray-wolf-in-darkness.webp?a=1&s=612x612&w=0&k=20&c=EmdNoXxbXsyti_GlTf_d10n22scwjDYMPaFlNXzh0sw=" alt="" />
          </motion.div>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem' }} className='w-full h-[17rem]'>
            <img src="https://images.unsplash.com/photo-1508027347466-400cc1518d61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" alt="" />
          </motion.div>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem' }} className='w-full h-[17rem]'>
            <img src="https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
          </motion.div>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem' }} className='w-full h-[17rem]'>
            <img src="https://images.unsplash.com/photo-1563841623392-020439626029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="" />
          </motion.div>
          <motion.div transition={{ease:[0.65, 0, 0.35, 1],duration:.6}} animate={{ y: -pos + 'rem'  }} className='w-full h-[17rem]'>
            <img src="https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>

  )
}

export default Products
