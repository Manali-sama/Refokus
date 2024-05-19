import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto flex gap-1 mt-20 py-10'>
        <Card width={"basis-1/3"} start={false} para={true} title={"Up Next: Projects"} subtitle={"Projects & Case Studies" } />
        <Card width={"basis-2/3"} start={true} para={false} hover="true" title={"Get In Touch"} subtitle={"Let's get to it, together"} />
        </div>
      
    </div>
  )
}

export default Cards
