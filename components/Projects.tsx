
import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveItem: React.FC<{ type: string; title: string; date?: string; link: string }> = ({ type, title, date, link }) => {
  const isInternal = link.startsWith('/');
  const content = (
    <div className="group block neo-brutalism-border bg-white p-4 hover:bg-black hover:text-white transition-all duration-200">
      <div className="flex justify-between items-start mb-2">
        <span className="bg-[#A3C9C7] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
          {type}
        </span>
        {date && (
          <span className="font-mono text-[10px] text-gray-500 group-hover:text-gray-400 uppercase">
            {date}
          </span>
        )}
      </div>
      <h4 className="text-lg font-black uppercase leading-tight group-hover:translate-x-1 transition-transform">
        {title}
      </h4>
    </div>
  );

  return isInternal 
    ? <Link to={link}>{content}</Link>
    : <a href={link}>{content}</a>;
};

export const Projects: React.FC = () => {
  const blogs = [
    { type: 'Project', title: 'First90', link: '/first90' },
    { type: 'Project', title: 'Crucible', link: '/crucible' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold uppercase">Projects</h2>
        <div className="h-1 flex-1 bg-black hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Builds Column */}
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b-2 border-black pb-2">
            <h3 className="text-xl font-black uppercase italic">Builds</h3>
            <span className="font-mono text-[10px] text-gray-400">02 ENTRIES</span>
          </div>
          <div className="space-y-3">
            {blogs.map((blog, i) => (
              <ArchiveItem key={i} {...blog} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white neo-brutalism-border p-3 text-center">
        <p className="font-mono text-xs uppercase font-bold text-gray-400">
          More coming soon
        </p>
      </div>
    </div>
  );
};
