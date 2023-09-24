import React, { useRef, useState, useEffect } from "react";

const CountdownTimer = () => {
  
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [end, setEnd] = useState(false)


  useEffect(() => {
    const deadline = new Date('09/26/2023 12:00:00')

    const interval = setInterval(() => {
      const currentTime = new Date()
      const difference = deadline.getTime() - currentTime.getTime()

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(hours)

      const minutes = Math.floor(( difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(minutes)

      const seconds = Math.floor((difference % (1000 * 60)) /1000)
      setSeconds(seconds)
     if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      setEnd(true)
     }
    }, 1000)
    
    return () => clearInterval(interval)
  },[])
 



  return (
    <div className="flex gap-4 self-center md:self-start inter uppercase">
        {hours > 0 && (
        <p className=" text-4xl">
          {hours}
          <span className="text-base ">h</span>
        </p>
      )}
      {minutes > 0 && (
        <p className=" text-4xl">
          {minutes}
          <span className="text-base ">m</span>
        </p>
      )}
      {seconds > 0 && (
        <p className=" text-4xl">
          {seconds}
          <span className="text-base ">s</span>
        </p>
      )}
     
      {end && <p className="text-4xl inter">Countdown Ended</p>}
    </div>
  );
};

export default CountdownTimer;
