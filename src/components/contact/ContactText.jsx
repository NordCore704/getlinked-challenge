import React from 'react'
import Image from 'next/image'
import { x, meta, instagram, linkedin, starPurple } from '@/exports/image'

const ContactText = () => {
  return (
    <div className='md:flex gap-4 flex-col lg:p-5 hidden relative'>
        <h2 className="text-scheme-violet text-2xl sm:text-3xl text-left self-start font-bold">
            Get in touch
        </h2>
    <p className=''>Contact <br />Information</p>
    <div className="">
    <p className="">27, Alara Street</p>
    <p className="">Yaba 100012</p>
    <p>Lagos State</p>
    </div>

    <p className="">Call Us: <span>07067981819</span></p>

    <div className="">
        <p className="">We are open from Monday-Friday</p>
        <p>08:00am - 05:00pm</p>
    </div>
    
    <div className="flex flex-col gap-2">
        <p className='text-scheme-violet'>Share on</p>
        <div className="flex gap-3">
            <a href="" className="">
                <Image src={instagram}  alt='instagram'/>
            </a>
            <a href="" className="">
                <Image src={x}  alt='x'/>
            </a>
            <a href="" className="">
                <Image src={meta}  alt='facebook'/>
            </a>
            <a href="" className="">
                <Image src={linkedin}  alt='in'/>
            </a>
        </div>
    </div>
    <Image src={starPurple} alt='star' className='absolute top-0 left-20 w-4'/>
    </div>
  )
}

export default ContactText