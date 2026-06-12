import React from 'react';

interface PitchProps {
  start: [number, number];
  control: [number, number];
  end: [number, number];
  label: string;
}

export const PitchTrajectorySVG: React.FC<PitchProps> = ({ start, control, end, label }) => {
  const pStart = `${(start[0] / 100) * 360 + 20},${(start[1] / 100) * 220 + 20}`;
  const pCtrl = `${(control[0] / 100) * 360 + 20},${(control[1] / 100) * 220 + 20}`;
  const pEnd = `${(end[0] / 100) * 360 + 20},${(end[1] / 100) * 220 + 20}`;
  const d = `M ${pStart} Q ${pCtrl} ${pEnd}`;

  return (
    <div className="relative w-full aspect-[16/9] bg-[#07120c] border border-neutral-800 rounded-lg overflow-hidden p-2 select-none">
      <svg viewBox="0 0 400 260" className="w-full h-full">
        {/* Pitch grass markings */}
        <rect x="20" y="20" width="360" height="220" fill="none" stroke="#173023" strokeWidth="2" />
        <line x1="200" y1="20" x2="200" y2="240" stroke="#173023" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="200" cy="130" r="35" fill="none" stroke="#173023" strokeWidth="1.5" />
        <circle cx="200" cy="130" r="2.5" fill="#173023" />

        {/* Penalty Boxes */}
        <rect x="20" y="60" width="60" height="140" fill="none" stroke="#173023" strokeWidth="1.5" />
        <rect x="20" y="90" width="22" height="80" fill="none" stroke="#173023" strokeWidth="1.5" />
        <rect x="320" y="60" width="60" height="140" fill="none" stroke="#173023" strokeWidth="1.5" />
        <rect x="358" y="90" width="22" height="80" fill="none" stroke="#173023" strokeWidth="1.5" />

        {/* Goal Frames */}
        <rect x="12" y="105" width="8" height="50" fill="none" stroke="#CCFF00" strokeWidth="1.5" />
        <rect x="380" y="105" width="8" height="50" fill="none" stroke="#CCFF00" strokeWidth="1.5" />

        {/* Trajectory Arc */}
        <path d={d} fill="none" stroke="#CCFF00" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3" />
        
        {/* Ball Path Origin */}
        <circle cx={(start[0] / 100) * 360 + 20} cy={(start[1] / 100) * 220 + 20} r="5" fill="#00F0FF" stroke="#000" strokeWidth="1.5" />
        
        {/* Destination / Goal Target */}
        <circle cx={(end[0] / 100) * 360 + 20} cy={(end[1] / 100) * 220 + 20} r="6" fill="#CCFF00" stroke="#000" strokeWidth="2" />
      </svg>
      <div className="absolute bottom-2 left-3 text-[10px] uppercase font-mono tracking-widest text-[#CCFF00] bg-black/80 px-2 py-0.5 rounded border border-neutral-800">
        Shot Path: {label}
      </div>
    </div>
  );
};
