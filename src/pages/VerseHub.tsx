import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Radio, Sparkles } from 'lucide-react';
import { HIGHLIGHT_MOMENTS } from '../data/moments';
import { PLAYERS } from '../data/players';
import { Moment, Player, Wallpaper } from '../types';
import { MomentCard } from '../components/cards/MomentCard';
import { PitchTrajectorySVG } from '../components/charts/PitchTrajectorySVG';
import { PlayerGiantCard } from '../components/cards/PlayerGiantCard';
import { H2HCompareModal } from '../components/modals/H2HCompareModal';

interface HubProps {
  currentWallpaper: Wallpaper;
}

export const VerseHub: React.FC<HubProps> = ({ currentWallpaper }) => {
  const [selectedMoment, setSelectedMoment] = useState<Moment>(HIGHLIGHT_MOMENTS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [compareTarget, setCompareTarget] = useState<Player | null>(null);

  const categories = ['All', 'Final Drama', 'Record Breakers', '10-Goal Thriller', 'Giant Killers'];
  const filteredMoments = selectedCategory === 'All'
    ? HIGHLIGHT_MOMENTS
    : HIGHLIGHT_MOMENTS.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* Hero Showcase with Wallpaper Backdrop */}
      <section className="relative rounded-2xl overflow-hidden border border-neutral-800 min-h-[500px] flex flex-col justify-end p-6 sm:p-12">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter brightness-50"
          style={{ backgroundImage: `url(${currentWallpaper.url})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030806] via-[#030806]/60 to-transparent" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs">
            <Radio size={12} className="animate-pulse" />
            FINAL TOURNAMENT ARCHIVE • 2026
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            THE NORTH AMERICAN <span className="text-[#CCFF00]">CHRONICLE</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            A comprehensive tournament platform capturing player performance metrics, match drama, tactical trajectories, and high-resolution tournament atmosphere across the USA, Mexico, and Canada.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
            <NavLink
              to="/pantheon"
              className="px-5 py-3 rounded-lg bg-[#CCFF00] text-black font-bold hover:bg-[#b8e600] transition-colors flex items-center gap-2"
            >
              Explore Player Cards <ArrowUpRight size={14} />
            </NavLink>
            <NavLink
              to="/chronicle"
              className="px-5 py-3 rounded-lg bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors border border-neutral-700 flex items-center gap-2"
            >
              Knockout Tree
            </NavLink>
          </div>
        </div>
      </section>

      {/* Top Highlights Reel Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-4">
          <div>
            <div className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider">Top Highlights Reel</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Moments That Shook North America</h2>
          </div>
          <div className="flex flex-wrap gap-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#CCFF00] text-black font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredMoments.map(m => (
            <MomentCard
              key={m.id}
              moment={m}
              isActive={selectedMoment.id === m.id}
              onSelect={setSelectedMoment}
            />
          ))}
        </div>

        {/* Tactical Trajectory Deep-Dive Panel */}
        <div className="mt-8 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
              <Sparkles size={14} /> TACTICAL TELEMETRY & BALL TRAJECTORY
            </div>
            <h3 className="text-2xl font-black text-white">{selectedMoment.headline}</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              {selectedMoment.commentary}
            </p>
            <div className="p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 font-mono text-xs text-[#CCFF00]">
              {selectedMoment.xGStats}
            </div>

            {/* Match Event Timeline */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">Chronology:</span>
              <div className="space-y-1">
                {selectedMoment.events.map((ev, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-[#CCFF00] font-bold w-12">{ev.minute}</span>
                    <span className="text-neutral-400">{ev.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PitchTrajectorySVG
              start={selectedMoment.trajectory.start}
              control={selectedMoment.trajectory.control}
              end={selectedMoment.trajectory.end}
              label={selectedMoment.trajectory.label}
            />
          </div>
        </div>
      </section>

      {/* Featured Player Pantheon Preview */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-800 pb-4">
          <div>
            <div className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider">Top Performers</div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">The '26 Tournament Pantheon</h2>
          </div>
          <NavLink to="/pantheon" className="text-xs font-mono text-[#CCFF00] hover:underline flex items-center gap-1">
            View All Players →
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLAYERS.slice(0, 3).map(p => (
            <PlayerGiantCard
              key={p.id}
              player={p}
              onSelectCompare={(selected) => setCompareTarget(selected)}
            />
          ))}
        </div>
      </section>

      {/* H2H Comparator Modal */}
      {compareTarget && (
        <H2HCompareModal
          playerA={compareTarget}
          allPlayers={PLAYERS}
          onClose={() => setCompareTarget(null)}
        />
      )}
    </div>
  );
};
