import React, { useState, useEffect } from "react";

function Countdown({ hours = 0, minutes = 0, seconds = 0 }) {
  const [timeLeft, setTimeLeft] = useState({ hours, minutes, seconds });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let updatedHours = hours;
        let updatedMinutes = minutes;
        let updatedSeconds = seconds;

        if (updatedSeconds === 0) {
          if (updatedMinutes !== 0) {
            updatedMinutes--;
            updatedSeconds = 59;
          } else {
            updatedHours--;
            updatedMinutes = 59;
            updatedSeconds = 59;
          }
        } else {
          updatedSeconds--;
        }

        return {
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div>
      <span>{formatTime(timeLeft.hours)}:</span>
      <span>{formatTime(timeLeft.minutes)}:</span>
      <span>{formatTime(timeLeft.seconds)}</span>
    </div>
  );
}

export default Countdown;