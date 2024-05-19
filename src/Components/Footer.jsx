import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto flex gap-28 py-10 '>
        <div className=' basis-1/2'>
            <h1 className='text-[12.5vw] font-semibold leading-none mt-2'>refokus.</h1>
            {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(items => <a className='mr-10 text-sm text-zinc-500'>{items}</a>)}
        </div>
        <div className=' basis-1/2 flex '>
            <div className='w-1/3 flex flex-col gap-1'>
                <h4 className='text-lg font-normal text-zinc-600 mb-10'>Socials</h4>
                {["Instagram", "Twitter", "LinkedIn"].map(items => <a className='text-lg text-zinc-600'>{items}</a>)}
            </div>
            <div className='w-1/3 flex flex-col gap-1 '>
                <h4 className='text-lg font-normal text-zinc-600 mb-10'>Sitemaps</h4>
                {["Home", "Work", "Careers", "Contacts"].map(items => <a className='text-lg text-zinc-300 font-light'>{items}</a>)}
            </div>
            <div className='w-1/2 flex flex-col items-end justify-end gap-5 '>
                <p className='text-md font-normal text-right text-zinc-300'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                <img className='bg-blue-600 px-4 py-2 w-24' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
