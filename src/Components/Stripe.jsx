import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] py-5 px-4 border-t-[2px] border-b-[2px] border-r-[2px] border-zinc-600 flex items-center justify-between'>
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.nummber}</span>
    </div>
  )
}

export default Stripe
