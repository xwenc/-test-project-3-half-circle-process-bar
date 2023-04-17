interface IProps {
  progress: number;
}
const HalfCircleProcessBar: React.FC<IProps> = ({ progress }) => {
  const radius = 100; // 半径
  const strokeWidth = 10; // 线条宽度
  const normalizedRadius = radius - strokeWidth / 2; // 标准化半径
  const circumference = normalizedRadius * Math.PI; // 半圆形周长
  const strokeDashoffset = circumference - (progress / 100) * circumference; // 半圆形路径偏移量

  return (
    <svg viewBox={`-20 -20 ${radius * 2 + 20} ${radius + 20}`}>
      <path
        stroke="#ccc"
        fill="none"
        strokeWidth={strokeWidth}
        d={`M ${
          strokeWidth / 2
        },${radius} a ${normalizedRadius},${normalizedRadius} 0 0 1 ${
          normalizedRadius * 2
        },0`}
      />
      <path
        stroke="#FF4500"
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        d={`M ${
          strokeWidth / 2
        },${radius} a ${normalizedRadius},${normalizedRadius} 0 0 1 ${
          normalizedRadius * 2
        },0`}
      />
      <g transform={`translate(${radius},${radius})`}>
        {[...Array(5)].map((_, i) => {
          const angle = -180 + i * 22.5;
          const angleLarge = -180 + i * 45;
          const x = (radius + 5) * Math.cos((angleLarge * Math.PI) / 180);
          const y = (radius + 5) * Math.sin((angleLarge * Math.PI) / 180);
          const x1 = radius * Math.cos((angle * Math.PI) / 180);
          const y1 = radius * Math.sin((angle * Math.PI) / 180);
          const x2 = (radius - 10) * Math.cos((angle * Math.PI) / 180);
          const y2 = (radius - 10) * Math.sin((angle * Math.PI) / 180);
          return (
            <>
              {!i || i < 4 && (
                <text x={x} y={y} textAnchor="middle" fontSize="12">{`${
                  i * 25
                }%`}</text>
              )}
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#FFF"
                strokeWidth={2}
                transform={`rotate(${i * 22.5})`}
              />
            </>
          );
        })}
      </g>
    </svg>
  );
};

export default HalfCircleProcessBar;
