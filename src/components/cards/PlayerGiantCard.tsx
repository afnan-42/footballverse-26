import React, { useState } from 'react';
import { Sparkles, Activity } from 'lucide-react';
import { Player } from '../../types';
import { KitPatternSVG } from './KitPatternSVG';
import { RadarPolygonSVG } from '../charts/RadarPolygonSVG';

interface CardProps {
  player: Player;
  onSelectCompare?: (player: Player) => void;
}

export const PlayerGiantCard: React.FC<CardProps> = ({ player, onSelectCompare }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'telemetry' | 'radar'>('profile');

  return (
    <div className="relative group bg-[#080d0a] border border-neutral-800 hover:border-[#CCFF00]/60 transition-all duration-300 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between">
      {/* Background Stadium Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-500 scale-105 group-hover:scale-100"
        style={{ backgroundImage: `url(${player.bgPhoto})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030806] via-[#080d0a]/85 to-transparent pointer-events-none" />

      {/* Kit Geometric Pattern Watermark */}
      <KitPatternSVG type={player.patternType} primary={player.primaryColor} accent={player.accentColor} />

      {/* Massive Squad Number Watermark */}
      <div className="absolute top-2 right-4 text-8xl md:text-9xl font-black font-mono tracking-tighter text-white/[0.04] select-none pointer-events-none">
        {player.number}
      </div>

      {/* Card Header & Badges */}
      <div className="relative z-10 p-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl filter drop-shadow-md">{player.flag}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#CCFF00]">
                {player.nationCode}
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-xs font-mono text-neutral-400">{player.pos}</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
              {player.name}
            </h3>
            <p className="text-xs text-neutral-400 font-mono">{player.club}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs font-bold">
            <Sparkles size={12} />
            {player.stats.rating} RTG
          </div>
        </div>
      </div>

      {/* Dynamic Card Content Tabs */}
      <div className="relative z-10 px-5 py-2 flex-1">
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/60">
              <img
                src={player.actionShot}
                alt={player.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                    {player.featuredLabel}
                  </div>
                  <div className="text-xl font-black text-[#CCFF00] font-mono tracking-wide">
                    {player.featuredStat}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-neutral-300 bg-black/60 px-2 py-1 rounded border border-neutral-700">
                    #{player.number}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-2">
              {player.bio}
            </p>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-3 py-1">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[10px] uppercase">Goals Scored</span>
                <span className="text-lg font-bold text-white">{player.stats.goals}</span>
              </div>
              <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[10px] uppercase">Assists</span>
                <span className="text-lg font-bold text-white">{player.stats.assists}</span>
              </div>
              <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[10px] uppercase">Exp. Goals (xG)</span>
                <span className="text-lg font-bold text-[#00F0FF]">{player.stats.xg}</span>
              </div>
              <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-500 block text-[10px] uppercase">Top Sprint Speed</span>
                <span className="text-lg font-bold text-[#CCFF00]">{player.stats.speed}</span>
              </div>
            </div>

            <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800 text-xs font-mono">
              <span className="text-neutral-500 block text-[10px] uppercase">Key Tournament Moment</span>
              <p className="text-neutral-200 mt-1 line-clamp-2">{player.moments[0]}</p>
            </div>
          </div>
        )}

        {activeTab === 'radar' && (
          <div className="py-2 flex justify-center">
            <RadarPolygonSVG stats={player.radar} size={190} color="#CCFF00" />
          </div>
        )}
      </div>

      {/* Tab Switcher & Compare Action Footer */}
      <div className="relative z-10 p-4 border-t border-neutral-800/80 bg-neutral-950/70 flex items-center justify-between gap-2">
        <div className="inline-flex rounded-lg bg-neutral-900 p-0.5 border border-neutral-800">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === 'profile' ? 'bg-[#CCFF00] text-black font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === 'telemetry' ? 'bg-[#CCFF00] text-black font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Stats
          </button>
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === 'radar' ? 'bg-[#CCFF00] text-black font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Radar
          </button>
        </div>

        {onSelectCompare && (
          <button
            onClick={() => onSelectCompare(player)}
            className="flex items-center gap-1 px-3 py-1 bg-neutral-800 hover:bg-[#CCFF00] hover:text-black text-neutral-300 font-mono text-xs rounded transition-colors border border-neutral-700 hover:border-[#CCFF00]"
          >
            <Activity size={13} />
            H2H
          </button>
        )}
      </div>
    </div>
  );
};