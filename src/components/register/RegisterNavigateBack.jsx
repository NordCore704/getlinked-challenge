import React from 'react'
import { useRouter } from 'next/router'

const NavigateBack = () => {

    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }
  return (
    <div className='flex w-full md:hidden p-5'>
        <h2 className="text-scheme-violet text-2xl hover:cursor-pointer" onClick={handleGoBack}>
            Register
        </h2>
    </div>
  )
}

export default NavigateBack
