import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';
import BabyShinePromo from '../../components/BabyShinePromo';

export default function Family() {
  useSEO({ title: 'Family Photography', description: 'Candid and joyful moments that preserve the legacy of your family tree.' });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero heading="Every Generation, One Frame" subheading="Generational warmth." description="Candid and joyful moments that preserve the legacy of your family tree." image="/photos/family/2.jpg" />
      
      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12 text-center">Featured Work</h3>
        <ServiceGallery theme="family" />
      </section>
      
      <BabyShinePromo />

      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-family" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-10 py-4 text-brand-gold tracking-widest text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}
