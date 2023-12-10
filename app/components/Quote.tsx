import React from 'react'
import Image from 'next/image'

const Quote = () => {
  return (
    <div className='flex justify-center items-center ml-[210px] mt-[250px]'>
        <div className='relative -top-12 -right-12'>
            <div className='bg-[#282C33]'>
                <Image
                    src={'/quote.svg'}
                    alt='quote'
                    width={26}
                    height={21}
                />
            </div>
        </div>
        <div className='w-[712px] p-[32px] border border-[#ABB2BF]'>
            <p className='text-white flex justify-center items-center text-[22px] '>With great power comes great electricity bill</p>
        </div>
        <div className='w-[162px] border border-[#ABB2BF] p-[16px] relative top-[82px] right-[162px]'>
            <p className='text-white text-[22px] '>- Dr Who</p>
        </div>
        <div className='relative top-12 right-[212px]'>
            <div className='bg-[#282C33]'>
                <Image
                    src={'/quote.svg'}
                    alt='quote'
                    width={26}
                    height={21}
                />
            </div>
        </div>
        <div className='w-[91px] h-[91px] border border-[#ABB2BF] relative -right-56 '></div>
    </div>
  )
}

export default Quote