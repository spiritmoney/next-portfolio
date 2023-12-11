import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='mt-[123px] mx-[150px] flex justify-center items-center h-[423px]'>
            <div className='w-[537px] h-[227px] flex-shrink-0 mt-[74px] mx-[171px] mb-[122px] '>
                <p className='w-[537px] text-[32px] font-semibold'>
                    <span className='text-white'>Kingsley is a </span>
                    <span className='text-[#C778DD]'>blockchain engineer</span>
                    <span className='text-white'> and</span>
                    <span className='text-[#C778DD]'> frontend developer</span>
                </p>
                <p className='mt-[32px] mb-[32px] text-[#ABB2BF]'>He crafts responsive websites where technologies meet creativity</p>
                <Link href='/contacts'>
                    <button className='border border-[#C778DD] text-white px-[16px] py-[8px] hover:bg-[#C778DD] hover:text-white transition duration-150'>Contact me!!</button>
                </Link>
            </div>
            <div className=' w-[469px] h-[386px] flex-shrink-0 flex flex-col'>
                    <Image 
                        src={'/linelogo.svg'}
                        alt='Image'
                        width={457}
                        height={386}
                    />
                    <div className='w-[402px] border border-[#ABB2BF] p-[8px] mt-[10px] text-white flex flex-row space-x-[10px]'>
                        <div className='w-[16px] h-[16px] bg-[#C778DD] mt-1 '></div>
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