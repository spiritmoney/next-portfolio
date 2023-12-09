import React from 'react'
import Header from './components/Header'
import Media from './components/Media'
import Hero from './components/Hero'

const page = () => {
  return (
    <div className='bg-[rgb(40,44,51)] w-full h-[3192px] '>
      <div className='flex justify-start items-start'>
      <Media />
      </div>
      <Header />
      <Hero />
    </div>
  )
}

export default page