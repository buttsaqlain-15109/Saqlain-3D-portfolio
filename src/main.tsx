import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import './styles.css';

const gifs = [
  'hero-space-voyage-preview-eECLH3Yc.gif',
  'hero-codenest-preview-Cgppc2qV.gif',
  'hero-vex-ventures-preview-BczMFIiw.gif',
  'hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'hero-asme-preview-B_nGDnTP.gif',
  'hero-transform-data-preview-Cx5OU29N.gif',
  'hero-vitara-preview-Cjz2QYyU.gif',
  'hero-terra-preview-BFjrCr7T.gif',
  'hero-skyelite-preview-DHaZIgUv.gif',
  'hero-aethera-preview-DknSlcTa.gif',
  'hero-designpro-preview-D8c5_een.gif',
  'hero-stellar-ai-preview-D3HL6bw1.gif',
].map((x) => 'https://motionsites.ai/assets/' + x);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <Sparkles className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Available for freelance</span>
        </div>

        <h1 className="hero-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          SAQLAIN
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light text-gray-400 tracking-tight mb-10 max-w-2xl">
          Crafting immersive <span className="text-white font-medium">3D experiences</span> and digital realities.
        </h2>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0C0C0C] rounded-full font-semibold text-lg overflow-hidden"
        >
          <span className="relative z-10">Explore Work</span>
          <ArrowDownRight className="w-5 h-5 relative z-10 group-hover:rotate-[-45deg] transition-transform duration-300" />
          <div className="absolute inset-0 bg-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.button>
      </motion.div>
    </section>
  );
};

const MarqueeTrack = ({ items, direction, speed }: { items: string[], direction: 'left' | 'right', speed: number }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        className="flex gap-6 min-w-max pr-6"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
      >
        {[...items, ...items, ...items, ...items].map((src, i) => (
          <div key={i} className="relative w-64 md:w-80 aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group">
            <img 
              src={src} 
              className="w-full h-full object-cover mix-blend-screen opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              alt="3D Work preview" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-b border-white/5">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      
      <div className="flex flex-col gap-6">
        <MarqueeTrack items={gifs.slice(0, 6)} direction="left" speed={40} />
        <MarqueeTrack items={gifs.slice(6, 12)} direction="right" speed={35} />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main className="w-full min-h-screen bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
    </main>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
