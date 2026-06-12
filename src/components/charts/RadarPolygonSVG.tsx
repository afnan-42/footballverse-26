import React from 'react';
import { RadarAttributes } from '../../types';

interface RadarProps {
  stats: RadarAttributes;
  statsB?: RadarAttributes;
  color?: string;
  colorB?: string;
  size?: number;
}

export const RadarPolygonSVG: React.FC<RadarProps> = ({
  stats,
  statsB,
  color = '#CCFF00',
  colorB = '#00F0FF',
  size = 220
}) => {
  const categories: (keyof RadarAttributes)[] = ['pace', 'shooting', 'passing', 'dribbling', 'defending', 'physical'];
  const labels = ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'];
  const center = size / 2;
  const radius = (size / 2) - 30;

  const getCoordinates = (value: number, index: number) => {
    const angle = (Math.PI * 2 / 6) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const pointsA = categories.map((cat, i) => {
    const { x, y } = getCoordinates(stats[cat], i);
    return `${x},${y}`;
  }).join(' ');

  const pointsB = statsB ? categories.map((cat, i) => {
    const { x, y } = getCoordinates(statsB[cat], i);
    return `${x},${y}`;
  }).join(' ') : null;

  return (
    <div className="flex flex-col items-center select-none">
      <svg width={size} height={size} className="overflow-visible">
        {/* Concentric Grid Rings */}
        {[0.25, 0.5, 0.75, 1.0].map((level, i) => {
          const ringPoints = categories.map((_, idx) => {
            const angle = (Math.PI * 2 / 6) * idx - Math.PI / 2;
            const r = level * radius;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');
          return (
            <polygon
              key={i}
              points={ringPoints}
              fill="none"
              stroke="#262626"
              strokeWidth="1"
              strokeDasharray={i === 3 ? 'none' : '2 2'}
            />
          );
        })}

        {/* Spokes */}
        {categories.map((_, i) => {
          const angle = (Math.PI * 2 / 6) * i - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#262626" strokeWidth="1" />;
        })}

        {/* Player B Polygon (Modal compare) */}
        {pointsB && (
          <polygon
            points={pointsB}
            fill={colorB}
            fillOpacity="0.25"
            stroke={colorB}
            strokeWidth="2"
          />
        )}

        {/* Player A Polygon */}
        <polygon
          points={pointsA}
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="2.5"
        />

        {/* Labels & Data Points */}
        {categories.map((cat, i) => {
          const angle = (Math.PI * 2 / 6) * i - Math.PI / 2;
          const labelDist = radius + 18;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);
          const { x, y } = getCoordinates(stats[cat], i);

          return (
            <g key={i}>
              <circle cx={x} cy={y} r="3.5" fill={color} stroke="#000" strokeWidth="1.5" />
              <text
                x={lx}
                y={ly + 4}
                textAnchor="middle"
                className="text-[10px] font-mono font-bold fill-neutral-400"
              >
                {labels[i]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
