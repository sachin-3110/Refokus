import React from 'react'
import Stripe from './Stripe'
function Stripes() {
    var data=[
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number:48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number:7},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number:8},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number:48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number:7},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number:8},     
        
    ]
  return (
    <div className='flex border-t-2 border-b-2 my-4 border-zinc-700 overflow-x-hidden md:mb-5'>
        {
            data.map((elem,index)=>{
              return  <Stripe val={elem} key={index}/>
            })
        }
        
    </div>
  )
}

export default Stripes
