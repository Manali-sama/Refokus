import { motion } from 'framer-motion';
import React from 'react'
import { CgArrowRight } from "react-icons/cg";

function Card({width, start, para, hover = "false", title, subtitle}) {
  
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: "25px"}} className={`${width} p-5 bg-zinc-800 rounded-xl flex flex-col justify-between min-h-[30rem]`}>
      <div className='w-full'>
        <div className='w-full flex items-center justify-between'>
            <h4 className='text-lg font-semibold'>{title}</h4>
            <CgArrowRight />
        </div>
        <h2 className='text-3xl font-medium mt-10'>{subtitle}</h2>
      </div>
      <div className='w-full'>
        {start && (<><h1 className='text-[6vw] font-medium leading-none'>Start a project</h1>
        <button className='text-sm font-semibold border-[1px] border-zinc-500 rounded-full py-3 px-5 mt-5'>Contact us</button></>)}
        {para && (<p className='text-sm font-medium text-zinc-500'>From Brands to Websites, our <br /> work speaks for itself</p>)}

      </div>
    </motion.div>
  )
}

export default Card
