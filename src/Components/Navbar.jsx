import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700 '>
      <div className='nleft flex items-center'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className='links flex gap-20 ml-20'>
        {["Home", "Work", "Culture", "", "News"].map((elem, i) => (elem.length === 0 ? <span className='w-[2px] h-5 bg-zinc-700'></span> :(<a className='font-regular text-sm flex items-center gap-1' href='#'>
            {i === 1 && <span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-2 h-2 rounded-full bg-green-500'></span>}
            {elem}</a>)))}
        </div>
        
        </div> 

        <Button />
    </div>
  )
}

export default Navbar
