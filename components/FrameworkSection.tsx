
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Step: React.FC<{ num: string; title: string; items: string[] }> = ({ num, title, items }) => (
  <motion.div 
    variants={{
      hidden: { x: 30, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
      }
    }}
    className="neo-brutalism-border bg-white p-6 relative flex-shrink-0 w-[280px] md:w-[320px] snap-center hover:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:neo-brutalism-shadow-lg"
  >
    <div className="absolute -top-4 -left-4 bg-black text-white neo-brutalism-border px-3 py-1 text-sm font-black z-20">
      STEP {num}
    </div>
    <h3 className="text-2xl font-black uppercase mb-4 mt-2">{title}</h3>
    <ul className="space-y-3 font-mono text-sm">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span className="mr-3 mt-1.5 w-2 h-2 bg-[#A3C9C7] shrink-0"></span>
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export const FrameworkSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollWidth > clientWidth) {
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold uppercase">The Operational Framework</h2>
          <p className="font-mono text-sm text-gray-500 uppercase">A Systematic approach to scale</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-black font-bold uppercase tracking-widest bg-white neo-brutalism-border px-3 py-1">
          <span>Scroll horizontally</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        {/* Subtle background track line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-black/5 -translate-y-1/2 hidden md:block"></div>
        
        <motion.div 
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
          className="flex overflow-x-auto no-scrollbar gap-8 pb-4 pt-6 px-4 md:px-2 snap-x snap-mandatory scroll-smooth"
        >
          <Step 
            num="01" 
            title="Data" 
            items={["Set up rigorous tracking.", "Identify key friction points.", "Formulate growth hypotheses."]} 
          />
          <Step 
            num="02" 
            title="Experiment" 
            items={["Launch high-impact tests.", "Measure statistical significance.", "Scale winners immediately."]} 
          />
          <Step 
            num="03" 
            title="Execute" 
            items={["Align engineering & marketing.", "Ship polished features.", "Iterate on feedback."]} 
          />
          <Step 
            num="04" 
            title="Optimize" 
            items={["Monitor long-term health.", "Eliminate system bottlenecks.", "Refine the engine."]} 
          />
        </motion.div>

        {/* Custom Car Scrollbar Track */}
        <div className="mt-6 px-4 md:px-0">
          <div className="relative h-1 bg-black w-full overflow-visible">
            {/* The Car handle */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-75 ease-out pointer-events-none"
              style={{ 
                left: `calc(${scrollProgress * 100}% - 24px)`,
              }}
            >
              <div className="text-[#A3C9C7] bg-[#F7FAF9] p-1 neo-brutalism-border -translate-y-1/2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3 font-mono text-[10px] uppercase font-bold text-gray-500 tracking-tighter">
            <span>START TRACK</span>
            <span className="opacity-50">OPERATIONAL HIGHWAY</span>
            <span>END TRACK</span>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="neo-brutalism-border bg-[#A3C9C7] p-6 border-black relative overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
        <p className="text-xl md:text-2xl font-black uppercase text-center text-white italic tracking-tight relative z-10">
          "Efficiency is doing things right; effectiveness is doing the right things."
        </p>
      </motion.div>
    </div>
  );
};
