import React from 'react'
import Button from './Button'

function Product({val, mover, count}) {
  return (
    <div className='w-full py-20 h-[20rem]'>
      <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl font-medium'>{val.title}</h1>
        <div className='dets w-[30%]'>
        <p className='mb-10 text-lg'>{val.description}</p>
        <div className='flex items-center gap-5'>
            {val.live && <Button />}
            {val.case && <Button title='Case Study' />}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Product
