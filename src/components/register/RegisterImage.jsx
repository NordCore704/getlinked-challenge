import React from 'react'
import { thumbsUp, starPurple, star } from '@/exports/image'
import Image from 'next/image'

const RegisterImage = () => {
  return (
    <div className='w-full h-1/3 md:h-full md:w-1/2 flex items-center justify-center relative'>
        <Image src={thumbsUp} alt='thumbs-up' className='z-10'/>
        <Image src={starPurple} alt='star' className='absolute bottom-20 md:bottom-36 right-10 w-4'/>
        <Image src={star} alt='star' className='absolute bottom-20 left-10 w-4 hidden md:flex'/>
        <Image src={starPurple} alt='star' className='absolute top-20 left-20 w-4 hidden md:flex'/>
    </div>
  )
}

export default RegisterImage