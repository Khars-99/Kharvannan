
import React from 'react';

const ContactIcon: React.FC<{ 
  href: string; 
  icon: React.ReactNode; 
  label: string 
}> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="neo-brutalism-border bg-white p-4 hover:bg-[#A3C9C7] hover:text-white transition-colors duration-200 neo-brutalism-shadow flex items-center justify-center w-16 h-16 group"
  >
    <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-200">
      {icon}
    </div>
  </a>
);

export const Footer: React.FC = () => {
  return (
    <div className="mt-20 space-y-12">
      <div className="text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-[#A3C9C7]">READY TO BUILD & SCALE</h2>
        <button className="neo-brutalism-border bg-white px-12 py-4 text-3xl font-black uppercase hover:bg-[#A3C9C7] hover:text-white transition-colors duration-200 neo-brutalism-shadow">
          LET’S TALK
        </button>
      </div>
      
      <div className="flex flex-row justify-center items-center gap-6 pb-12">
        <ContactIcon 
          href="mailto:r.v.kharvannan@gmail.com" 
          label="Email Me"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          }
        />
        <ContactIcon 
          href="tel:+919994412111" 
          label="Call Me"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          }
        />
        <ContactIcon 
          href="https://linkedin.com/in/kharvannan4160" 
          label="LinkedIn Profile"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
            </svg>
          }
        />
      </div>
    </div>
  );
};
