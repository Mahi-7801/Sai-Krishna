import { portfolioImages, hideOnError } from '../data/photos';

export default function PortfolioGrid({ items = 9, startIndex = 0 }) {
  const images = Array.from({ length: items }).map((_, i) => {
    const srcIndex = (startIndex + i) % portfolioImages.length;
    return {
      id: startIndex + i,
      src: portfolioImages[srcIndex],
      aspect: i % 3 === 0 ? 'aspect-square' : i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]',
    };
  });

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((item) => (
        <div 
          key={item.id} 
          className={`relative overflow-hidden group bg-brand-charcoal/30 w-full ${item.aspect}`}
        >
          <img 
            src={item.src} 
            alt={`Portfolio ${item.id + 1}`}
            onError={hideOnError}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-custom"
            loading="lazy"
          />
          {/* Overlay hover effect */}
          <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-custom z-10 flex items-center justify-center backdrop-blur-sm">
            <span className="text-brand-ivory font-sans text-xs tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              View Project
            </span>
          </div>
          
          <div className="absolute inset-0 border border-brand-charcoal group-hover:border-brand-gold/30 transition-colors duration-700"></div>
        </div>
      ))}
    </div>
  );
}