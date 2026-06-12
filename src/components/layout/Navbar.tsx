import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, Trophy, Activity, Image } from 'lucide-react';
import { Wallpaper } from '../../types';

interface NavbarProps {
  wallpapers: Wallpaper[];
  currentWallpaper: Wallpaper;
  onSelectWallpaper: (wp: Wallpaper) => void;
  fullBleedMode: boolean;
  onToggleFullBleed: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wallpapers,
  currentWallpaper,
  onSelectWallpaper,
  fullBleedMode,
  onToggleFullBleed
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#030806]/90 backdrop-blur-md border-b border-neutral-800">
      {/* Top Wallpaper Controller Bar */}
      <div className="bg-[#07120c] border-b border-neutral-800/80 px-4 py-1.5 flex flex-wrap items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-neutral-400">
          <Image size={13} className="text-[#CCFF00]" />
          <span className="text-[10px] uppercase tracking-wider text-neutral-400">Atmosphere Engine:</span>
          <span className="text-[#CCFF00] font-bold">{currentWallpaper.name}</span>
          <span className="text-neutral-600">({currentWallpaper.location})</span>
        </div>

        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <div className="flex items-center gap-1">
            {wallpapers.map((wp) => (
              <button
                key={wp.id}
                onClick={() => onSelectWallpaper(wp)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase transition-colors ${
                  currentWallpaper.id === wp.id
                    ? 'bg-[#CCFF00] text-black font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800'
                }`}
              >
                {wp.tag}
              </button>
            ))}
          </div>
          <button
            onClick={onToggleFullBleed}
            className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase border transition-colors ${
              fullBleedMode
                ? 'bg-[#00F0FF] text-black font-bold border-[#00F0FF]'
                : 'text-neutral-300 border-neutral-700 hover:border-neutral-500'
            }`}
          >
            {fullBleedMode ? 'Exit Wallpaper View' : '4K Mode'}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center text-xl font-black text-[#CCFF00] group-hover:border-[#CCFF00] transition-colors shadow-inner">
            26
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black tracking-tight text-white font-mono text-lg group-hover:text-[#CCFF00] transition-colors">
                FOOTBALLVERSE
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-[#00F0FF] border border-neutral-700">
                PRO
              </span>
            </div>
            <p className="text-[10px] font-mono text-neutral-400 tracking-wider">FIFA WORLD CUP 2026 EDITION</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                isActive
                  ? 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/40'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
              }`
            }
          >
            <Globe size={14} />
            <span>01 // Hub</span>
          </NavLink>

          <NavLink
            to="/pantheon"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                isActive
                  ? 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/40'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
              }`
            }
          >
            <Trophy size={14} />
            <span>02 // Pantheon</span>
          </NavLink>

          <NavLink
            to="/chronicle"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors ${
                isActive
                  ? 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/40'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
              }`
            }
          >
            <Activity size={14} />
            <span>03 // Chronicle</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
