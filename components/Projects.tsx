
import React from 'react';

const ArchiveItem: React.FC<{ type: string; title: string; date: string; link: string }> = ({ type, title, date, link }) => (
  <a 
    href={link}
    className="group block neo-brutalism-border bg-white p-4 hover:bg-black hover:text-white transition-all duration-200"
  >
    <div className="flex justify-between items-start mb-2">
      <span className="bg-[#A3C9C7] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-wider">
        {type}
      </span>
      <span className="font-mono text-[10px] text-gray-500 group-hover:text-gray-400 uppercase">
        {date}
      </span>
    </div>
    <h4 className="text-lg font-black uppercase leading-tight group-hover:translate-x-1 transition-transform">
      {title}
    </h4>
  </a>
);

export const Projects: React.FC = () => {
  const blogs = [
    { type: 'Thought', title: "Why Founder's Office is the new MBA", date: 'MAR 2024', link: '#' },
    { type: 'Guide', title: 'The Psychology of SaaS Onboarding', date: 'JAN 2024', link: '#' },
    { type: 'Review', title: 'The Future of No-Code Operations', date: 'DEC 2023', link: '#' },
  ];

  const secondaryProjects = [
    { type: 'Project', title: 'Automated Sales CRM Pipeline', date: '2023', link: '#' },
    { type: 'Experiment', title: 'Viral Loop via Referral Engine', date: '2023', link: '#' },
    { type: 'Research', title: 'TAM Analysis for Agri-Tech', date: '2022', link: '#' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold uppercase">Projects</h2>
        <div className="h-1 flex-1 bg-black hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blog Column */}
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b-2 border-black pb-2">
            <h3 className="text-xl font-black uppercase italic">Insights & Writing</h3>
            <span className="font-mono text-[10px] text-gray-400">03 ENTRIES</span>
          </div>
          <div className="space-y-3">
            {blogs.map((blog, i) => (
              <ArchiveItem key={i} {...blog} />
            ))}
          </div>
        </div>

        {/* Other Case Studies Column */}
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b-2 border-black pb-2">
            <h3 className="text-xl font-black uppercase italic">Other Case Studies</h3>
            <span className="font-mono text-[10px] text-gray-400">03 ENTRIES</span>
          </div>
          <div className="space-y-3">
            {secondaryProjects.map((project, i) => (
              <ArchiveItem key={i} {...project} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white neo-brutalism-border p-3 text-center">
        <p className="font-mono text-xs uppercase font-bold text-gray-400">
          Showing 06/24 Total Archive Entries • Load More in Notion
        </p>
      </div>
    </div>
  );
};
