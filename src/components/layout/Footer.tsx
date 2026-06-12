import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 bg-[#020504] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
        <div>
          <div className="font-bold text-white mb-1">FootballVerse '26</div>
          <p>Built with React, React Router & CSS Grid.</p>
        </div>
        <div className="flex items-center gap-6">
          <span>React 18</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>CSS Grid System</span>
        </div>
      </div>
    </footer>
  );
};
