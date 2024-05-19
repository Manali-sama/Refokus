import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    var products = [
        {title: "ARQITEL", description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: true, case: false},
        {title: "TTR", description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live: true, case: false},
        {title: "YIR 2022", description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", live: true, case: true},
        {title: "YAHOO!", description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: true, case: true} 
    ]
    const [pos, setPos] = useState(0)

    const mover = (val)=>{
      setPos(val*20);
    }
  

  return (
    <div className='relative mt-40'>
      {products.map((elem, i)=>(<Product val = {elem} mover={mover} count={i} />))}
      <div className='absolute w-full h-full top-0 pointer-events-none'>
        <motion.div initial ={{y: pos, x: "-50%"}} animate={{y: pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}} className='window  w-[32rem] h-[20rem] bg-white absolute left-[45%] overflow-hidden'>
          <motion.div animate={{y: -pos+`rem`}} 
          transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
           className='scenes w-full h-full bg-blue-200'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://refokuzzz-cloned.vercel.app/assets/arqitel-BXWnuhhk.webm"></video>
           </motion.div>
          <motion.div animate={{y: -pos+`rem`}} 
          transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
           className='scenes w-full h-full bg-blue-300'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://refokuzzz-cloned.vercel.app/assets/ttr-C2lTQdRZ.webm"></video>
           </motion.div>
          <motion.div animate={{y: -pos+`rem`}} 
          transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
           className='scenes w-full h-full bg-blue-400'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://refokuzzz-cloned.vercel.app/assets/yir-IiuY-KSG.webm"></video>
           </motion.div>
          <motion.div animate={{y: -pos+`rem`}} 
          transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
           className='scenes w-full h-full bg-blue-500'>
            <video autoPlay loop muted className='w-full h-full object-cover' src="https://refokuzzz-cloned.vercel.app/assets/yahoo--FL9ySUE.webm"></video>
           </motion.div>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Products
