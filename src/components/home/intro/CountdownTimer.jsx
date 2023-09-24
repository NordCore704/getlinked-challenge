import React, { useRef, useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-09-26T12:00:00Z") - +new Date();

    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeftRef.current = { hours: 0, minutes: 0, seconds: 0 };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setInterval(() => {
        const timeLeft = calculateTimeLeft();
        if (timeLeft !== null) {
          setTimeLeft(timeLeft);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
   

  }, []);

  const { hours, minutes, seconds } = timeLeft;
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
      {!timeLeft && <span>Countdown Ended</span>}
    </div>
  );
};

export default CountdownTimer;
