import React from 'react';
import { Zap, MapPin } from 'lucide-react';
import { Moment } from '../../types';

interface MomentCardProps {
  moment: Moment;
  isActive: boolean;
  onSelect: (moment: Moment) => void;
}

export const MomentCard: React.FC<MomentCardProps> = ({ moment, isActive, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(moment)}
      className={`cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 relative group flex flex-col justify-between ${
        isActive
          ? 'border-[#CCFF00] bg-neutral-900/90 ring-1 ring-[#CCFF00]/50 shadow-lg shadow-[#CCFF00]/10'
          : 'border-neutral-800 bg-[#080d0a]/80 hover:border-neutral-600'
      }`}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={moment.heroImg}
          alt={moment.headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest bg-black/80 text-[#CCFF00] px-2 py-0.5 rounded border border-neutral-800 flex items-center gap-1">
          <Zap size={10} /> {moment.category}
        </span>
        <span className="absolute bottom-2 left-3 text-xs font-mono font-bold text-white flex items-center gap-1">
          <MapPin size={11} className="text-[#CCFF00]" /> {moment.venue.split('•')[0]}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-mono text-neutral-400 mb-1">{moment.stage}</div>
          <h4 className="text-base font-bold text-neutral-100 group-hover:text-[#CCFF00] transition-colors leading-snug">
            {moment.headline}
          </h4>
        </div>
        <div className="mt-3 pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
          <span>{moment.match}</span>
          <span className="text-[#CCFF00]">Inspect Arc →</span>
        </div>
      </div>
    </div>
  );
};
