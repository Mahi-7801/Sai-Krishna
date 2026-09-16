import { useSEO } from '../hooks/useSEO';
import CanvasScrollSequence from '../components/CanvasScrollSequence';
import PortfolioGrid from '../components/PortfolioGrid';
import InstagramReels from '../components/InstagramReels';
import HomeReviews from '../components/HomeReviews';
import { motion } from 'framer-motion';

export default function Home() {
  useSEO({ 
    title: 'Sai Krishna Photography', 
    description: '30 Years of Capturing Life\'s Most Precious Moments. Premium wedding, maternity, and family photography.' 
  });

  return (
    <main className="bg-brand-dark min-h-screen">
      <CanvasScrollSequence />
      
      <div className="bg-brand-dark py-32 space-y-32">
        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-brand-ivory font-light mb-6">Every Frame Tells a Story</h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-ivory/70 font-sans leading-relaxed text-sm md:text-base">
            From the quiet anticipatory moments before the vows, to the grand celebrations.
          </p>
        </motion.section>

        {/* Featured Portfolio */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-4">Latest Work</h3>
          </div>
          <PortfolioGrid items={6} />
          <div className="text-center mt-12">
            <a href="/portfolio" className="inline-block border-b border-brand-gold/50 text-brand-gold font-sans uppercase tracking-widest text-xs pb-1 hover:border-brand-gold transition-colors">
              View Full Portfolio
            </a>
          </div>
        </motion.section>

        {/* Instagram Reels Integration */}
        <InstagramReels />

        {/* 5-Star Reviews */}
        <HomeReviews />

        {/* CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 max-w-4xl mx-auto text-center pb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-ivory font-light mb-8">
            Let's Create Something Timeless
          </h2>
          <a id="book-session-home" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-10 py-4 text-brand-gold tracking-widest text-sm uppercase transition-all duration-700 ease-custom">
            Book a Session
          </a>
        </motion.section>
      </div>
    </main>
  );
}
