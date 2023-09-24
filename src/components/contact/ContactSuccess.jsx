import React from 'react'
import { motion } from 'framer-motion'
import { greenCheck, successCheck } from '@/exports/image'
import Image from 'next/image'

const ContactSuccess = ({ onClose }) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex items-center justify-center bg-scheme-dark bg-opacity-70 inset-0 w-screen  h-screen p-5 z-50 fixed top-0 left-0">
    <div className="border-scheme-violet border flex rounded-md p-5 lg:p-10 items-center justify-center gap-5 flex-col relative">
        <Image src={successCheck} alt='greencheck' />
        <p>Your Message Was Sent Successfully!</p>
        <button className="w-full bg-gradient-to-r from-scheme-pink to-scheme-purple rounded-sm font-semibold p-2" onClick={onClose}>
          Back
        </button>
    </div>

    </motion.div>
  )
}

export default ContactSuccess