'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


// Define the Header component
const Header = () => {
  // State to manage the visibility of the mobile menu
  const [menuVisible, setMenuVisible] = useState(false)

  // Function to toggle the mobile menu visibility
  const handleClick = () => {
    setMenuVisible(!menuVisible)
  }

  // Function to close the mobile menu
  const handleClickClose = () => {
    setMenuVisible(false)
  }


  return (
    <nav className='flex items-center justify-center lg:px-3'>
      <div className='flex w-[1024px] sm:w-[768px] h-[61px] bg-[#282C33] pt-[32px] pb-[8px] justify-between mx-[16px] lg:mx-[50px]'>

        {/* Logo and site name */}
        <div className='flex justify-center items-center cursor-pointer space-x-3'>
          <Image
          className=' -my-6'
            src={'/ko.png'}
            alt='Logo'
            width={30}
            height={25}
            
          />
          <p className='font-fira-code text-white text-sm sm:text-lg font-semibold hidden lg:block'>Kingsley Odim</p>
        </div>

        {/* Mobile menu button */}
        <div className='visible lg:invisible'>
          <button onClick={handleClick}>
            <Image 
              src={'/burger.svg'}
              alt='burger'
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className='hidden lg:block'>
          <div className=' flex font-fira-code text-lg text-[#ABB2BF] space-x-[32px]'>
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


        {/* Mobile menu */}
        {menuVisible && (
          <div className='fixed top-1 w-screen h-screen bg-[#282C33]'>
            {/* Mobile menu content */}
            <nav className='flex justify-center items-center'>
             <div className='flex justify-between w-[1024px] mr-[16px] mt-[16px] mb-[8px]'>
                <div className='flex justify-center items-center cursor-pointer space-x-3'>
                  <Image
                  className=' -my-6'
                  src={'/ko.png'}
                  alt='Logo'
                    width={30}
                    height={25}
                    
                  />
                </div>
                <div className='visible mr-[16px]'>
                  <button onClick={handleClickClose}>
                    <Image 
                      src={'/close.svg'}
                      alt='close'
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </nav>


            <div className='text-[32px] text-white mt-[50px] '>
              <ul className='space-y-[32px]'>
                <li className='flex'>
                  <p className='text-[#C778DD]'>#</p>
                    <button className=''>home</button>
                </li>
                <li className='flex'>
                  <p className='text-[#C778DD]'>#</p>
                    <button className=''>works</button>
                </li>
                <li className='flex'>
                  <p className='text-[#C778DD]'>#</p>
                    <button className=''>about-me</button>
                </li>
                <li className='flex'>
                  <p className='text-[#C778DD]'>#</p>
                    <button className=''>contacts</button>
                </li>
              </ul>

              <div className='flex justify-center items-center -ml-10 mt-[160px] '>
                <Link href={'https://github.com/spiritmoney'} className='cursor pointer'>
                  <Image 
                    src={'github.svg'}
                    alt='github logo'
                    width={64}
                    height={64}
                  />
                </Link>
                <Link href={'https://www.linkedin.com/in/spiritmoney/'} className='cursor pointer'>
                  <Image 
                    src={'linkedin.svg'}
                    alt='github logo'
                    width={64}
                    height={64}
                  />
                </Link>
                <Link href={'https://twitter.com/spiritmoneyko'} className='cursor pointer'>
                  <Image 
                    src={'twitter.svg'}
                    alt='github logo'
                    width={64}
                    height={64}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header