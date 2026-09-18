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
        minHeight="min-h-[78vh]"
        image="/photos/wedding/2.jpg"
      />
      
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <PortfolioGrid items={39} showFilters={true} />
      </section>
    </main>
  );
}
