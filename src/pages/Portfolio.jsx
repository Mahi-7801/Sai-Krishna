import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/PageHero';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio() {
  useSEO({ 
    title: 'Portfolio', 
    description: 'Explore our finest work spanning weddings, maternity, commercial, and more.' 
  });

  return (
    <main className="bg-brand-dark min-h-screen pb-32">
      <PageHero 
        heading="Every Frame Tells a Story"
        subheading="Our finest work assembled."
        minHeight="min-h-[50vh]"
        image="/photos/event/3.jpg"
      />
      
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="flex justify-center gap-8 mb-16 overflow-x-auto pb-4">
          <button className="text-brand-gold font-sans text-xs tracking-widest uppercase border-b border-brand-gold pb-1 whitespace-nowrap">All</button>
          <button className="text-brand-ivory/50 hover:text-brand-ivory font-sans text-xs tracking-widest uppercase transition-colors whitespace-nowrap">Weddings</button>
          <button className="text-brand-ivory/50 hover:text-brand-ivory font-sans text-xs tracking-widest uppercase transition-colors whitespace-nowrap">Maternity</button>
          <button className="text-brand-ivory/50 hover:text-brand-ivory font-sans text-xs tracking-widest uppercase transition-colors whitespace-nowrap">Commercial</button>
        </div>
        
        <PortfolioGrid items={15} />
        
        <div className="text-center mt-20">
          <button className="border border-brand-gold/30 hover:border-brand-gold hover:bg-brand-gold/10 px-10 py-4 text-brand-gold tracking-widest text-sm uppercase transition-all duration-700 ease-custom">
            Load More
          </button>
        </div>
      </section>
    </main>
  );
}
