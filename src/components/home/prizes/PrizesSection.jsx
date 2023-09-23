import React from 'react'
import { PrizeText, PrizeImage, } from '@/exports'
import Image from 'next/image'
import { flare } from '@/exports/image'

const PrizesSection = () => {
  return (
    <section className='flex flex-col overflow-y-visible justify-center items-center relative bg-scheme-dark'>
        <PrizeText/>
        <PrizeImage />
        <Image
        src={flare}
        alt="flare"
        className="opacity-50 top-0 w-[400px] absolute lg:-bottom-1/2 left-0"
      />
         <Image
        src={flare}
        alt="flare"
        className="absolute -right-0 w-[350px] top-[80%] md:w-[300px] lg:w-[500px] md:top-1/2 lg:top-1/2 -rotate-180 opacity-50"
      />
    </section>
  )
}

export default PrizesSection