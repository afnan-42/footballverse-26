import React, { useState } from 'react';
import { X, ArrowRightLeft } from 'lucide-react';
import { Player } from '../../types';
import { RadarPolygonSVG } from '../charts/RadarPolygonSVG';

interface ModalProps {
  playerA: Player;
  allPlayers: Player[];
  onClose: () => void;
}

export const H2HCompareModal: React.FC<ModalProps> = ({ playerA, allPlayers, onClose }) => {
  const otherPlayers = allPlayers.filter(p => p.id !== playerA.id);
  const [playerB, setPlayerB] = useState<Player>(otherPlayers[0] || playerA);

  const statsList: { label: string; key: keyof Player['stats'] }[] = [
    { label: 'Goals', key: 'goals' },
    { label: 'Assists', key: 'assists' },
    { label: 'Exp. Goals (xG)', key: 'xg' },
    { label: 'Top Speed', key: 'speed' },
    { label: 'Distance Covered', key: 'distance' },
    { label: 'Match Rating', key: 'rating' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#090f0c] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
          <div className="flex items-center gap-2">
            <ArrowRightLeft size={18} className="text-[#CCFF00]" />
            <h3 className="font-mono text-base font-bold text-white uppercase tracking-wider">
              Head-to-Head Comparative Radar
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Selectors Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-900/80 p-3 rounded-lg border border-[#CCFF00]/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#CCFF00] uppercase block">Selected Player (A)</span>
                <span className="font-bold text-white text-base">{playerA.flag} {playerA.name}</span>
              </div>
              <span className="text-xs font-mono text-neutral-400">{playerA.pos} • {playerA.nation}</span>
            </div>

            <div className="bg-neutral-900/80 p-3 rounded-lg border border-[#00F0FF]/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00F0FF] uppercase block">Benchmark Opponent (B)</span>
                <select
                  aria-label="Benchmark Opponent"
                  value={playerB.id}
                  onChange={(e) => {
                    const found = allPlayers.find(p => p.id === e.target.value);
                    if (found) setPlayerB(found);
                  }}
                  className="bg-transparent text-white font-bold text-base focus:outline-none cursor-pointer"
                >
                  {otherPlayers.map(p => (
                    <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                      {p.flag} {p.name} ({p.nationCode})
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-xs font-mono text-neutral-400">{playerB.pos} • {playerB.nation}</span>
            </div>
          </div>

          {/* Dual Radar Chart */}
          <div className="bg-neutral-950/60 p-6 rounded-xl border border-neutral-800/80 flex flex-col items-center">
            <div className="flex items-center gap-6 mb-4 text-xs font-mono">
              <span className="flex items-center gap-2 text-[#CCFF00]">
                <span className="w-3 h-3 rounded-full bg-[#CCFF00]"></span> {playerA.name}
              </span>
              <span className="flex items-center gap-2 text-[#00F0FF]">
                <span className="w-3 h-3 rounded-full bg-[#00F0FF]"></span> {playerB.name}
              </span>
            </div>
            <RadarPolygonSVG stats={playerA.radar} statsB={playerB.radar} size={260} />
          </div>

          {/* Direct Metric Comparison Table */}
          <div className="border border-neutral-800 rounded-xl overflow-hidden font-mono text-xs">
            <table className="w-full text-left">
              <thead className="bg-neutral-900/80 text-neutral-400 text-[10px] uppercase">
                <tr>
                  <th className="p-3 text-[#CCFF00]">{playerA.name}</th>
                  <th className="p-3 text-center">Metric Attribute</th>
                  <th className="p-3 text-right text-[#00F0FF]">{playerB.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-[#050b07]">
                {statsList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40">
                    <td className="p-3 font-bold text-white">{playerA.stats[item.key]}</td>
                    <td className="p-3 text-center text-neutral-400 text-[11px] uppercase">{item.label}</td>
                    <td className="p-3 text-right font-bold text-white">{playerB.stats[item.key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
