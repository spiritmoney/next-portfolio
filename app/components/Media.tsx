import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Media = () => {
  return (
    <div className=' hidden lg:block ml-[17px] absolute'>
        <div className='pl-[17px] flex flex-col space-y-2 justify-center items-center'>
        <Image 
            src={'/line10.svg'}
            alt='Line'
            width={2}
            height={191}
        />
        <Link href={'https://github.com/spiritmoney'} className='cursor-pointer'>
        <Image 
            src={'/github.svg'}
            alt='GitHub'
            width={32}
            height={32}
        />
        </Link>
        <Link href={'https://www.linkedin.com/in/spiritmoney/'} className='cursor-pointer'>
        <Image 
            src={'/linkedin.svg'}
            alt='LinkedIn'
            width={32}
            height={32}
        />
        </Link>
        <Link href={'https://twitter.com/spiritmoneyko'} className='cursor-pointer'>
        <Image 
            src={'/twitter.svg'}
            alt='Twitter'
            width={32}
            height={32}
        />
        </Link>
        </div>
    </div>
  )
}

export default Media