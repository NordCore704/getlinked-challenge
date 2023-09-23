import React from 'react'
import Image from 'next/image'
import { starPurple } from '@/exports/image'

const FooterRights = () => {
  return (
    <div className='self-end w-full bg-scheme-dark flex items-center justify-center justify-self-end relative'>
        <p className='self-end'>All Rights Reserved. ©getlinked Ltd.</p>
        <Image src={starPurple} alt='star' className='absolute w-3 -top-5'/>
    </div>
  )
}

export default FooterRights