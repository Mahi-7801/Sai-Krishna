import { Link } from 'react-router-dom';
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
        <Link to="/" className="text-brand-ivory font-serif text-lg tracking-wide uppercase hover:text-brand-gold transition-colors">
          Sai Krishna
        </Link>
        <div className="hidden md:flex items-center gap-8 text-brand-ivory/80 text-xs font-sans tracking-widest uppercase">
          <Link id="nav-link-home" to="/" className="hover:text-brand-gold transition-colors">The Studio</Link>
          <Link id="nav-link-about" to="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link id="nav-link-portfolio" to="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio</Link>
          <div className="relative group py-4 -my-4 flex items-center">
            <Link id="nav-link-services" to="/services" className="hover:text-brand-gold transition-colors">Services</Link>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full w-56 bg-brand-charcoal border border-brand-gold/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="flex flex-col py-2 text-[10px]">
                <Link to="/services/wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Weddings</Link>
                <Link to="/services/pre-wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Pre-Wedding</Link>
                <Link to="/services/post-wedding" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Post-Wedding</Link>
                <Link to="/services/videography" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Videography</Link>
                <Link to="/services/maternity" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Maternity</Link>
                <Link to="/services/family" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Family</Link>
                <Link to="/services/birthday" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Birthday</Link>
                <Link to="/services/event" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Event</Link>
                <Link to="/services/studio" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Studio</Link>
                <Link to="/services/commercial" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Commercial</Link>
                <Link to="/services/drone" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Drone</Link>
                <Link to="/packages" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors">Packages</Link>
                <Link to="/services" className="px-4 py-2 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors italic border-t border-brand-gold/10 mt-1 pt-3">View All</Link>
              </div>
            </div>
          </div>
          <Link id="nav-link-book" to="/contact" className="hover:text-brand-gold transition-colors">Book Session</Link>
        </div>
      </div>
    </motion.nav>
  );
}
