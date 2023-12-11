import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='mt-[28px] lg:mt-[123px] flex flex-col lg:flex-row justify-start items-start lg:justify-center lg:items-center h-[423px] '>

            {/* Left side content */}
            <div className='w-auto lg:w-[537px] h-[168px] lg:h-[227px] flex-shrink-0 mt-0 lg:mt-[74px] mx-[16px] lg:mx-[150px] mb-[122px] '>
                <p className='w-auto lg:w-[537px] text-[32px] font-semibold'>
                    <span className='text-white'>Kingsley is a </span>
                    <span className='text-[#C778DD]'>blockchain engineer</span>
                    <span className='text-white'> and</span>
                    <span className='text-[#C778DD]'> frontend developer</span>
                </p>
                <p className='mt-[32px] mb-[32px] text-[16px] text-[#ABB2BF]'>He crafts responsive websites where technologies meet creativity</p>
                {/* Link to the "Contacts" page */}
                <Link href='/contacts'>
                    <button className='border border-[#C778DD] text-white px-[16px] py-[8px] hover:bg-[#C778DD] hover:text-white transition duration-150'>Contact me!!</button>
                </Link>
            </div>

            {/* Right side content */}
            <div className=' w-[316px] sm:w-[457px] h-[260px] sm:h-[386px] flex-shrink-0 flex flex-col'>
                    <Image 
                        className='ml-[48px] mt-[50px] sm:mt-auto sm:ml-auto'
                        src={'/linelogo.svg'}
                        alt='Image'
                        width={457}
                        height={386}
                    />

                    {/* Information box */}
                    <div className='w-[320px] lg:w-[402px] border border-[#ABB2BF] p-[8px] mt-[10px] text-white flex flex-row space-x-[10px] ml-[28px] lg:ml-auto '>
                        <div className='w-[16px] h-[16px] bg-[#C778DD] mt-3 lg:mt-1 '></div>
                        <p className=''>
                            <span className='text-[#ABB2BF]'>Currently working on</span>
                            <span> Portfolio</span>
                        </p>
                    </div>
            </div>
    </section>
  )
}

export default Hero