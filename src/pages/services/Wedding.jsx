import { useSEO } from '../../hooks/useSEO';
import PageHero from '../../components/PageHero';
import ServiceGallery from '../../components/ServiceGallery';

export default function Wedding() {
  useSEO({ title: 'Wedding Photography', description: 'Every fleeting smile, every joyful tear. We capture the unscripted magic of your big day.' });

  return (
    <main className="bg-brand-dark min-h-screen flex flex-col">
      <PageHero heading="Your Vows, Captured Forever" subheading="Candid documentary realism." description="Every fleeting smile, every joyful tear. We capture the unscripted magic of your big day." image="/photos/wedding/2.jpg" />
      
      <section className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <h3 className="text-brand-gold font-sans text-xs tracking-widest uppercase mb-12 text-center">Featured Work</h3>
        <ServiceGallery theme="wedding" />
      </section>
      <section className="bg-brand-dark px-6 max-w-4xl mx-auto text-center py-24 flex-grow flex flex-col justify-center border-t border-brand-charcoal">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory font-light mb-8">Ready to capture your story?</h2>
        <a id="book-session-wedding" href="/contact" className="inline-block border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-10 py-4 text-brand-gold tracking-widest text-sm uppercase transition-all duration-700 ease-custom mx-auto">Inquire Now</a>
      </section>
    </main>
  );
}
