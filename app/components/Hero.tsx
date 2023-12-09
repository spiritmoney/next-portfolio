import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='mt-[123px] mx-[171px] flex justify-center w-[1024px] h-[423px]'>
        <div className='flex'>
            <div className=''>
                <div className=' text-white text-[24px] font-semibold mt-[74px] mb-[275px]'>
                    <p>King is a web designer and front-end developer</p>
                </div>
            </div>
            <div className='ml-[55px] flex'>
                <div className='absolute'>
                    <Image 
                        src={'/linelogo.svg'}
                        alt='Image'
                        width={156}
                        height={156}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero