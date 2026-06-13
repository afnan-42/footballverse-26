import React, { useState } from 'react';
import { Filter, Users } from 'lucide-react';
import { PLAYERS } from '../data/players';
import { Player } from '../types';
import { PlayerGiantCard } from '../components/cards/PlayerGiantCard';
import { H2HCompareModal } from '../components/modals/H2HCompareModal';

export const PlayerPantheon: React.FC = () => {
  const [selectedPos, setSelectedPos] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [compareTarget, setCompareTarget] = useState<Player | null>(null);

  const positions = ['ALL', 'FWD', 'MID', 'LW', 'RW', 'CAM'];

  const filteredPlayers = PLAYERS.filter(p => {
    const matchesPos = selectedPos === 'ALL' || p.pos === selectedPos;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.nation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.club.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPos && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#CCFF00] uppercase tracking-wider flex items-center gap-1.5">
            <Users size={14} /> Full Roster Telemetry
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">THE '26 PANTHEON</h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
            Huge collectible player cards with procedural kit watermarks, individual tournament ratings, and radar charts.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="Search player, nation, club..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-[#CCFF00]"
          />
          <div className="flex items-center gap-1">
            <Filter size={14} className="text-neutral-500 ml-2" />
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setSelectedPos(pos)}
                className={`px-2.5 py-1 rounded text-xs font-mono uppercase transition-colors ${
                  selectedPos === pos
                    ? 'bg-[#CCFF00] text-black font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                {pos}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map(player => (
          <PlayerGiantCard
            key={player.id}
            player={player}
            onSelectCompare={(p) => setCompareTarget(p)}
          />
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-16 text-neutral-500 font-mono text-sm">
          No players found matching current search criteria.
        </div>
      )}

      {/* H2H Modal */}
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
