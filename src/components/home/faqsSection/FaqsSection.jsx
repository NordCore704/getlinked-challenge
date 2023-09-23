import React from 'react'
import { FaqsText, FaqsImage } from '@/exports'

const FaqsSection = () => {
  return (
    <section id='faqs' className='flex flex-col md:flex-row border-gray-700 border-b'>
        <FaqsText />
        <FaqsImage />
    </section>
  )
}

export default FaqsSection