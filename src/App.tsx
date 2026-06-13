import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { WALLPAPERS } from './data/wallpapers';
import { Wallpaper } from './types';
import { Navbar } from './components/layout/Navbar';
import { LiveTicker } from './components/layout/LiveTicker';
import { Footer } from './components/layout/Footer';
import { VerseHub } from './pages/VerseHub';
import { PlayerPantheon } from './pages/PlayerPantheon';
import { KnockoutChronicle } from './pages/KnockoutChronicle';

export const App: React.FC = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState<Wallpaper>(WALLPAPERS[0]);
  const [fullBleedMode, setFullBleedMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#030806] text-neutral-100">
      {/* Full-Bleed 4K Wallpaper Mode Overlay */}
      {fullBleedMode && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-6">
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-90 transition-all duration-700"
            style={{ backgroundImage: `url(${currentWallpaper.url})` }}
          />
          <div className="relative z-10 flex items-center justify-between bg-black/60 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <div>
              <div className="text-xs font-mono text-[#CCFF00] uppercase">4K Stadium Feed</div>
              <h2 className="text-xl font-bold font-mono text-white">{currentWallpaper.name}</h2>
              <p className="text-xs text-neutral-400 font-mono">{currentWallpaper.location}</p>
            </div>
            <button
              onClick={() => setFullBleedMode(false)}
              className="px-4 py-2 bg-[#CCFF00] text-black font-mono text-xs font-bold rounded-lg hover:bg-[#b8e600] transition-colors"
            >
              Exit 4K Mode
            </button>
          </div>
          <div className="relative z-10 text-center font-mono text-xs text-neutral-400 bg-black/60 p-2 rounded max-w-sm mx-auto">
            Press ESC or click button to return to dashboard
          </div>
        </div>
      )}

      {/* Main Layout */}
      <Navbar
        wallpapers={WALLPAPERS}
        currentWallpaper={currentWallpaper}
        onSelectWallpaper={setCurrentWallpaper}
        fullBleedMode={fullBleedMode}
        onToggleFullBleed={() => setFullBleedMode(!fullBleedMode)}
      />

      <LiveTicker />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Routes>
          <Route path="/" element={<VerseHub currentWallpaper={currentWallpaper} />} />
          <Route path="/pantheon" element={<PlayerPantheon />} />
          <Route path="/chronicle" element={<KnockoutChronicle />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
