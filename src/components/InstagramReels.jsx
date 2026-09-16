import { Play, Volume2, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

const reels = [
  { id: 1, title: "Reel 1", subtitle: "SAI KRISHNA PHOTOGRAPHY", src: "/reels/reel1.mp4" },
  { id: 2, title: "Reel 2", subtitle: "SAI KRISHNA PHOTOGRAPHY", src: "/reels/reel2.mp4" },
  { id: 3, title: "Reel 3", subtitle: "SAI KRISHNA PHOTOGRAPHY", src: "/reels/reel3.mp4" },
  { id: 4, title: "Reel 4", subtitle: "SAI KRISHNA PHOTOGRAPHY", src: "/reels/reel4.mp4" },
];

export default function InstagramReels() {
  return (
    <section className="bg-[#0a0a0c] py-24 border-y border-[#1a1a1e]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Instagram Header */}
        <div className="flex items-center justify-between bg-[#111114] border border-[#1f1f23] rounded-2xl p-4 md:p-6 mb-12 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
              <div className="bg-brand-dark w-full h-full rounded-full flex items-center justify-center border-2 border-[#111114]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
                @saikrishnaphotography
                <span className="bg-blue-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">✓</span>
              </h3>
              <p className="text-brand-ivory/50 text-xs md:text-sm">Behind-the-Scenes · Short Reels · Studio Life</p>
            </div>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">
            Follow
          </a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <motion.div 
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111114] border border-[#1f1f23] rounded-[2rem] p-4 flex flex-col group cursor-pointer hover:border-brand-gold/50 transition-colors relative"
            >
              {/* iPhone Mockup Container */}
              <div className="relative aspect-[9/16] bg-black rounded-[1.5rem] overflow-hidden mb-4 border border-[#2a2a30]">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#111114] rounded-b-xl z-20">
                  <div className="w-12 h-1 bg-[#2a2a30] rounded-full mx-auto mt-2"></div>
                </div>

                {/* Video Player */}
                <video 
                  src={reel.src}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                {/* Gradient Overlay for controls visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>

                {/* Video Controls overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-20">
                   <div className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      <span className="text-xs font-mono">0:00 / 0:15</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4" />
                      <Maximize className="w-4 h-4" />
                   </div>
                </div>
              </div>

              {/* Reel Footer */}
              <div className="flex items-center justify-between px-2">
                <div>
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <Play className="w-3 h-3 text-red-500 fill-current" /> {reel.title}
                  </h4>
                  <p className="text-brand-ivory/40 text-[10px] tracking-widest uppercase mt-1">{reel.subtitle}</p>
                </div>
                <button className="border border-[#2a2a30] hover:bg-white hover:text-black text-brand-ivory/80 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2">
                  Watch <span className="text-lg leading-none">↗</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
