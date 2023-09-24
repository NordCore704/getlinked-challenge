import React, { useRef, useEffect } from 'react'

const CountdownTimer = () => {
  const timeLeftRef = useRef({ hours: 0, minutes: 0, seconds: 0})
  const calculateTimeLeft = () => {
    const difference = +new Date('2023-09-26T12:00:00Z') - +new Date()

    if (difference > 0) {
      timeLeftRef.current = {
        hours: Math.floor(( difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor(( difference / 1000 / 60 ) % 60),
        seconds: Math.floor(( difference / 1000) % 60),
      }
    }
  }
  return (
    <div className=""></div>
  )
}

export default CountdownTimer