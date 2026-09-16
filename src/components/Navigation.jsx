import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navigation() {
  const { scrollY } = useScroll();
  const bgColor = useTransform(scrollY, [0, 100], ['rgba(6, 6, 6, 0)', 'rgba(6, 6, 6, 0.6)']);
  const blurEffect = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(16px)']);
  const borderColor = useTransform(scrollY, [0, 100], ['rgba(185, 138, 78, 0)', 'rgba(185, 138, 78, 0.2)']);
  
  return (
    <motion.nav
      style={{
        backgroundColor: bgColor,
        backdropFilter: blurEffect,
        WebkitBackdropFilter: blurEffect,
        borderBottom: useTransform(borderColor, v => `1px solid ${v}`),
      }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-brand-ivory font-serif text-lg tracking-wide uppercase">
          Sai Krishna
        </div>
        <div className="hidden md:flex items-center gap-8 text-brand-ivory/80 text-xs font-sans tracking-widest uppercase">
          <a id="nav-link-home" href="/" className="hover:text-brand-gold transition-colors">The Studio</a>
          <a id="nav-link-about" href="/about" className="hover:text-brand-gold transition-colors">About</a>
          <a id="nav-link-portfolio" href="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</a>
          <div className="relative group py-4 -my-4 flex items-center">
            <a id="nav-link-services" href="/services" className="hover:text-brand-gold transition-colors">Services</a>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full w-56 bg-brand-charcoal border border-brand-gold/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="flex flex-col py-2 text-[10px]">
                <a href="/services/wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Weddings</a>
                <a href="/services/pre-wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Pre-Wedding</a>
                <a href="/services/post-wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Post-Wedding</a>
                <a href="/services/videography" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Videography</a>
                <a href="/services/maternity" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Maternity</a>
                <a href="/services/family" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Family</a>
                <a href="/services/birthday" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Birthday</a>
                <a href="/services/event" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Event</a>
                <a href="/services/studio" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Studio</a>
                <a href="/services/commercial" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Commercial</a>
                <a href="/services/drone" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Drone</a>
                <a href="/packages" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Packages</a>
                <a href="/services" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors italic border-t border-brand-gold/10 mt-1 pt-3">View All</a>
              </div>
            </div>
          </div>
          <a id="nav-link-book" href="/contact" className="hover:text-brand-gold transition-colors">Book Session</a>
        </div>
      </div>
    </motion.nav>
  );
}
