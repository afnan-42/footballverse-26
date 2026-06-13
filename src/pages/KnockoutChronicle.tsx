import React, { useState } from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { KNOCKOUT_MATCHES } from '../data/bracket';
import { KnockoutMatch } from '../types';

export const KnockoutChronicle: React.FC = () => {
  const [selectedMatch, setSelectedMatch] = useState<KnockoutMatch>(KNOCKOUT_MATCHES[KNOCKOUT_MATCHES.length - 1]);

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="border-b border-neutral-800 pb-6">
        <div className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider flex items-center gap-1.5">
          <Trophy size={14} /> Knockout Elimination Bracket
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">KNOCKOUT & TOURNAMENT CHRONICLE</h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
          From the Round of 16 in Toronto to the Final at MetLife Stadium in East Rutherford.
        </p>
      </div>

      {/* Active Match Inspector Box */}
      <div className="bg-gradient-to-r from-neutral-950 via-pitch-900 to-neutral-950 p-6 sm:p-8 rounded-2xl border border-[#CCFF00]/40 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-400">
          <span className="px-2.5 py-0.5 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-bold">
            {selectedMatch.stage}
          </span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {selectedMatch.date}</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> {selectedMatch.venue}</span>
          <span className="flex items-center gap-1"><Users size={12} /> {selectedMatch.attendance}</span>
        </div>

        <div className="py-6 flex items-center justify-center gap-6 sm:gap-16">
          <div className="text-center">
            <div className="text-3xl sm:text-5xl font-black font-mono text-white">{selectedMatch.home.code}</div>
            <div className="text-xs text-neutral-400 font-mono mt-1">{selectedMatch.home.team}</div>
          </div>

          <div className="text-center">
            <div className="text-4xl sm:text-6xl font-black font-mono text-[#CCFF00] tracking-wider">
              {selectedMatch.home.score} - {selectedMatch.away.score}
            </div>
            {selectedMatch.home.pens !== undefined && (
              <div className="text-xs font-mono text-neutral-400 mt-1">
                ({selectedMatch.home.pens} - {selectedMatch.away.pens} on pens)
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-5xl font-black font-mono text-white">{selectedMatch.away.code}</div>
            <div className="text-xs text-neutral-400 font-mono mt-1">{selectedMatch.away.team}</div>
          </div>
        </div>

        <div className="p-4 bg-black/60 rounded-xl border border-neutral-800 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed">
          <span className="font-mono text-[#CCFF00] font-bold block mb-1">Match Narrative:</span>
          {selectedMatch.summary}
        </div>
      </div>

      {/* Bracket Match List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {KNOCKOUT_MATCHES.map((match, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedMatch(match)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedMatch === match
                ? 'bg-neutral-900 border-[#CCFF00] ring-1 ring-[#CCFF00]/50'
                : 'bg-[#060b08] border-neutral-800 hover:border-neutral-600'
            }`}
          >
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-2 flex justify-between">
              <span>{match.stage}</span>
              <span className="text-[#CCFF00]">{match.date}</span>
            </div>

            <div className="flex items-center justify-between font-mono text-base font-bold text-white py-1">
              <span>{match.home.code}</span>
              <span className="text-[#CCFF00]">{match.home.score} - {match.away.score}</span>
              <span>{match.away.code}</span>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 mt-2 truncate">
              {match.venue.split(',')[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
