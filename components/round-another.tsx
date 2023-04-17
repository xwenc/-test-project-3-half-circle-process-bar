import React, { useEffect, useCallback, useRef, useState } from "react";

const EllipseAnimation: React.FC = () => {
  const rx = 80;
  const ry = 40;
  const cx = 100;
  const cy = 60;
  const [x, setX] = useState(rx);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const requestRef = useRef<Number>();

  const animate = (time: number) => {
    if (!isAnimating) return;
    const nextX = cx + rx * Math.cos(angle);
    const nextY = cy + ry * Math.sin(angle);
    setX(nextX);
    setY(nextY);
    setAngle(angle + 0.01);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, [isAnimating, angle]);

  const toggleAnimation = () => setIsAnimating(!isAnimating);

  return (
    <>
      <svg viewBox="0 0 200 120" onClick={toggleAnimation}>
        <ellipse
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          stroke="#ccc"
          strokeWidth={2}
          fill="none"
        />
        <circle cx={x} cy={y} r="5" fill="#FF4500" />
      </svg>
      <button onClick={()=>{
        toggleAnimation();
      }} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {isAnimating ? "关闭" : "开始"}
      </button>
    </>
  );
};

export default EllipseAnimation;
