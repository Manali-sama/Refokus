import { motion } from 'framer-motion'
import React from 'react'

function Marquee({logosurl, direction}) {
  
  return (
    <div className='flex w-full overflow-hidden'>
      <motion.div initial={{x: direction === 'left'? "0" : "-100%"}} animate={{x: direction === 'left'? "-100%" : "0"}} transition={{ease: "linear", duration: 28, repeat: Infinity}} className='flex flex-shrink-0 gap-28 py-10 pr-40'>
      {logosurl.map((url, i) => <img key={i} src={url} />)}
      </motion.div>
      <motion.div initial={{x: direction === 'left'? "0" : "-100%"}} animate={{x: direction === 'left'? "-100%" : "0"}} transition={{ease: "linear", duration: 28, repeat: Infinity}} className='flex flex-shrink-0 gap-28 py-10 pr-40'>
      {logosurl.map((url, i) => <img key={i} src={url} />)}
      </motion.div>
      
      
    </div>
  )
}

export default Marquee
