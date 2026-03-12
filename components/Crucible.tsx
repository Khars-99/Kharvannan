import React from 'react';
import { Link } from 'react-router-dom';

export const Crucible: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7FAF9] text-black pb-20 selection:bg-[#A3C9C7] selection:text-white">
      <div className="max-w-6xl mx-auto px-4 pt-8 space-y-12">
        <Link to="/" className="inline-block px-4 py-2 font-black uppercase neo-brutalism-border bg-white hover:bg-[#A3C9C7] hover:text-white transition-colors">
          &larr; Back to Home
        </Link>
        <h1 className="text-5xl font-black uppercase tracking-tight">Crucible</h1>
        <div className="neo-brutalism-border bg-white p-8">
          <p className="text-lg">Crucible project details coming soon...</p>
        </div>
      </div>
    </div>
  );
};
