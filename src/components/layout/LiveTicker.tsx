import React from 'react';
import { Zap } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  return (
    <div className="bg-neutral-950 border-b border-neutral-800/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-[#CCFF00] uppercase font-bold text-[10px] tracking-wider bg-[#CCFF00]/10 px-2 py-0.5 rounded border border-[#CCFF00]/20 shrink-0">
          <Zap size={11} /> 2026 Feed
        </span>
        <div className="overflow-x-auto no-scrollbar whitespace-nowrap text-neutral-400 space-x-6">
          <span>🏆 FINAL: ESP 3 - 2 FRA (AET)</span>
          <span className="text-neutral-600">•</span>
          <span>GOLDEN BOOT: Kylian Mbappé (8 Goals)</span>
          <span className="text-neutral-600">•</span>
          <span>BEST YOUNG PLAYER: Lamine Yamal (19y)</span>
          <span className="text-neutral-600">•</span>
          <span>VENUE: MetLife Stadium, New York / New Jersey</span>
          <span className="text-neutral-600">•</span>
          <span>TOTAL ATTENDANCE: 5.42M across 104 matches</span>
        </div>
      </div>
    </div>
  );
};
