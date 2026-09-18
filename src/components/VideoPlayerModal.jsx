import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Film, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { drivePreviewUrl } from '../data/videos';

export default function VideoPlayerModal({ video, playlist = [], onClose, onSelectVideo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (playlist && playlist.length > 1) {
        const currentIndex = playlist.findIndex((v) => v.id === video?.id);
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onSelectVideo(playlist[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < playlist.length - 1) {
          onSelectVideo(playlist[currentIndex + 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [video, playlist, onClose, onSelectVideo]);

  if (!video) return null;

  const currentIndex = playlist ? playlist.findIndex((v) => v.id === video.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < playlist.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full max-w-5xl bg-brand-charcoal/80 border border-brand-gold/30 shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[95vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-charcoal bg-black/40">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-brand-gold" />
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-gold font-semibold">
                  SAI KRISHNA CINEMA THEATER
                </span>
              </div>
              {video.badge && (
                <span className="hidden sm:inline-block px-2.5 py-0.5 text-[9px] font-sans tracking-widest uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  {video.badge}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center text-brand-ivory transition-all duration-300"
                aria-label="Close Cinema Player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 16:9 Video Embed Player */}
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
            <iframe
              src={drivePreviewUrl(video.driveId)}
              title={video.title}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />

            {/* Top-Right Shield: Completely covers and blocks Google Drive's redirect pop-out button */}
            <div
              className="absolute top-0 right-0 z-30 pointer-events-auto select-none"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <div className="h-14 min-w-[140px] px-4 bg-brand-dark/95 border-b border-l border-brand-gold/30 flex items-center justify-center gap-2 shadow-2xl shadow-black backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-brand-gold font-semibold">
                  4K CINEMA
                </span>
              </div>
            </div>

            {/* Navigation Arrows for Playlist */}
            {hasPrev && (
              <button
                onClick={() => onSelectVideo(playlist[currentIndex - 1])}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-gold hover:text-brand-dark text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md opacity-70 hover:opacity-100"
                title="Previous Film"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={() => onSelectVideo(playlist[currentIndex + 1])}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-gold hover:text-brand-dark text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-md opacity-70 hover:opacity-100"
                title="Next Film"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Film Details & Metadata */}
          <div className="p-6 md:p-8 bg-brand-dark/95 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-brand-charcoal overflow-y-auto">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl md:text-2xl font-serif text-brand-ivory font-light">
                  {video.title}
                </h3>
                {video.duration && (
                  <span className="text-xs font-sans text-brand-gold tracking-widest px-2 py-0.5 border border-brand-gold/30">
                    {video.duration}
                  </span>
                )}
              </div>

              {video.subtitle && (
                <p className="text-brand-gold/80 text-xs tracking-widest uppercase font-sans">
                  {video.subtitle}
                </p>
              )}

              {video.description && (
                <p className="text-brand-ivory/70 text-sm font-sans leading-relaxed pt-1">
                  {video.description}
                </p>
              )}

              {video.gear && (
                <p className="text-[11px] font-sans tracking-wider text-brand-ivory/40 pt-1">
                  Captured on: {video.gear}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="/contact"
                className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-sans text-xs tracking-[0.2em] uppercase text-center transition-all duration-300"
              >
                Inquire For Cinema
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
