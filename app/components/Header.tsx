import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className='flex items-center justify-center'>
      <div className='flex w-[1024px] h-[61px] bg-[#282C33] pt-[32px] pb-[8px] justify-between mx-[171px]'>
        <div className='flex justify-center items-center cursor-pointer space-x-3'>
          <Image
          className=' -my-6'
            src={'/logo.svg'}
            alt='Logo'
            width={16}
            height={17}
            
          />
          <p className='font-fira-code text-white text-lg font-semibold'>King</p>
        </div>
          <div className=' flex font-fira-code text-lg text-[#ABB2BF] space-x-[32px] '>
            <div className='flex justify-normal'>
              <p className='text-[#C778DD]'>#</p>
              <button className='hover:text-white transition duration-150'>home</button>
            </div>
            <div className='flex justify-normal'>
              <p className='text-[#C778DD]'>#</p>
              <button className='hover:text-white transition duration-150'>works</button>
            </div>
            <div className='flex justify-normal'>
              <p className='text-[#C778DD]'>#</p>
              <button className='hover:text-white transition duration-150'>about-me</button>
            </div>
            <div className='flex justify-normal'>
              <p className='text-[#C778DD]'>#</p>
              <button className='hover:text-white transition duration-150'>contacts</button>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Header