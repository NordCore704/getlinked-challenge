import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { star, x, instagram, meta, linkedin, } from '@/exports/image'

const FooterLinks = () => {
  return (
    <div className='flex flex-col gap-3 justify-self-center p-8 relative'>
        <p className="text-lg text-scheme-violet font-semibold">Useful Links</p>
        <Link href={'/'} className="">Overview</Link>
        <Link href={''}>Timeline</Link>
        <Link href={''}>FAQs</Link>
        <Link href={''}>Register</Link>
        <div className="flex gap-3 items-center ">
            <p className="text-scheme-violet">Follow us</p>
            <a href="" className="">
                <Image src={instagram} alt='' />
            </a>
            <a href="" className="">
                <Image src={x} alt='' />
            </a>
            <a href="" className="">
                <Image src={meta} alt='' />
            </a>
            <a href="" className="">
                <Image src={linkedin} alt='' />
            </a>
        </div>
    <Image src={star} alt='star' className='absolute left-1/3 w-3 sm:w-4 top-32 md:top-16 md:left-[90%]'/>
    </div>
  )
}

export default FooterLinks