import React, { useState, useEffect } from "react";

interface CountUpProps {
  end: number;
  duration: number;
  className: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration, className }) => {
  const [count, setCount] = useState(0);
  const increment: number = end / duration;

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const incrementCount = Math.floor(progress * increment);

      if (incrementCount < end) {
        setCount(incrementCount);
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span className={className}>{count}</span>;
};

export default CountUp;
