import React, { FC, useState, useEffect } from 'react';

interface IProps {
  progress: number;
}

const ProgressTracker: FC<IProps> = ({ progress }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const radiusX = 200; // x轴半径
  const radiusY = 100; // y轴半径
  const centerX = 250; // 圆心x坐标
  const centerY = 150; // 圆心y坐标
  const circumference = 2 * Math.PI * radiusX; // 椭圆周长

  useEffect(() => {
    const angle = (progress / 100) * Math.PI * 2 - Math.PI / 2; // 根据进度计算角度
    const x = centerX + radiusX * Math.cos(angle); // 根据角度计算x坐标
    const y = centerY + radiusY * Math.sin(angle); // 根据角度计算y坐标
    setX(x);
    setY(y);
  }, [progress, centerX, centerY, radiusX, radiusY]);

  return (
    <svg width="500" height="300">
      <path
        d={`M${centerX},${centerY - radiusY} A${radiusX},${radiusY} 0 ${
          progress > 50 ? 1 : 0
        },1 ${x},${y}`}
        stroke="#ccc"
        strokeWidth="10"
        fill="none"
      />
      {x && y && (
        <circle
          cx={x}
          cy={y}
          r="5"
          fill="#f00"
        />
      )}
    </svg>
  );
};

export default ProgressTracker;
